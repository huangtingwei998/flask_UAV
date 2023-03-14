import math
import time

import numpy

from ClientConnect import client
from logger import drone_log, log_ui, log_msg
from mavproxy import vehicle

data = vehicle.velocity
from mavproxy import vehicle
class dataCenter():
    xaccel_data = 0.0
    yaccel_data = 0.0
    zaccel_data = 0.0
    xgyro_data = 0.0
    ygyro_data = 0.0
    zgyro_data = 0.0
    tfdata = 0

    xaccel_data_list = []
    yaccel_data_list = []
    zaccel_data_list = []

    xgyro_data_list = []
    ygyro_data_list = []
    zgyro_data_list = []

    shake_amplitude_list = []

    connect_time_list = []
    connectstate = True

"""
姿态传感器和GPS传感器和激光雷达传感的数据的更新
"""
def updata():
    try:
        t1 = time.time()
        client.sendData("ok")
        data = client.getData()
        data = eval(data)
        dataCenter.xaccel_data = data['xaccel_data']
        dataCenter.yaccel_data = data['yaccel_data']
        dataCenter.zaccel_data = data['zaccel_data']
        dataCenter.xgyro_data = data['xgyro_data']
        dataCenter.ygyro_data = data['ygyro_data']
        dataCenter.zgyro_data = data['zgyro_data']
        dataCenter.tfdata = data['tfdata']
        dataCenter.connectstate = True

        """
        右端加速度曲线
        """
        if len(dataCenter.xaccel_data_list)>10:
            dataCenter.xaccel_data_list.pop(0)
        dataCenter.xaccel_data_list.append(data['xaccel_data'])

        if len(dataCenter.yaccel_data_list)>10:
            dataCenter.yaccel_data_list.pop(0)
        dataCenter.yaccel_data_list.append(data['yaccel_data'])

        if len(dataCenter.zaccel_data_list)>10:
            dataCenter.zaccel_data_list.pop(0)
        dataCenter.zaccel_data_list.append(data['zaccel_data'])

        """
        角速度的数据更新
        """
        if len(dataCenter.xgyro_data_list)>10:
            dataCenter.xgyro_data_list.pop(0)
        dataCenter.xgyro_data_list.append(data['xgyro_data'])

        if len(dataCenter.ygyro_data_list)>10:
            dataCenter.ygyro_data_list.pop(0)
        dataCenter.ygyro_data_list.append(data['ygyro_data']/3)

        if len(dataCenter.zgyro_data_list)>10:
            dataCenter.zgyro_data_list.pop(0)
        dataCenter.zgyro_data_list.append(data['zgyro_data'])

        """
        ping时间的数据更新
        
        """
        if len(dataCenter.connect_time_list)>8:
            dataCenter.connect_time_list.pop(0)
        dataCenter.connect_time_list.append(round(time.time()-t1, 4))
        """
        震荡幅度的计算
        """
        if len(dataCenter.shake_amplitude_list)>10:
            dataCenter.shake_amplitude_list.pop(0)
        all_accel = numpy.square(dataCenter.xaccel_data) + numpy.square(dataCenter.yaccel_data) + numpy.square(dataCenter.zaccel_data)
        all_gyro = numpy.square(dataCenter.xgyro_data) + numpy.square(dataCenter.xgyro_data) + numpy.square(dataCenter.xgyro_data)
        all_attitude = numpy.square(vehicle.attitude.yaw) + numpy.square(vehicle.attitude.roll) + numpy.square(vehicle.attitude.pitch)
        dataCenter.shake_amplitude_list.append(round(float(math.sqrt(all_accel) + math.sqrt(all_gyro) + math.sqrt(all_attitude)),1))

    except BaseException:
        dataCenter.connectstate = False