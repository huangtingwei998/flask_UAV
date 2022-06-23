from flask import Blueprint, jsonify
from ClientConnect import client
from updateData import dataCenter

mpu6050 = Blueprint('mpu6050', __name__)

"""
获取三轴的加速度
"""


@mpu6050.route('/mpu_accel_xdata')
def getXdata():
    return jsonify({'mpu_accel_xdata': round(float(dataCenter.xaccel_data), 1)})


@mpu6050.route('/mpu_accel_ydata')
def getYdata():
    return jsonify({'mpu_accel_ydata': round(float(dataCenter.yaccel_data), 1)})


@mpu6050.route('/mpu_accel_zdata')
def getZdata():
    return jsonify({'mpu_accel_zdata': round(float(dataCenter.zaccel_data), 1)})


"""
获取三轴的角速度
"""


@mpu6050.route('/mpu_gyro_xdata')
def getXgyro():
    return jsonify({'mpu_gyro_xdata': round(float(dataCenter.xgyro_data), 1)})


@mpu6050.route('/mpu_gyro_ydata')
def getYgyro():
    return jsonify({'mpu_gyro_ydata': round(float(dataCenter.ygyro_data), 1)})


@mpu6050.route('/mpu_gyro_zdata')
def getZgyro():
    return jsonify({'mpu_gyro_zdata': round(float(dataCenter.zgyro_data), 1)})
