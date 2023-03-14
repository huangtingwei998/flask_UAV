from flask import Blueprint, jsonify

from logger import log_msg
from mavproxy import vehicle
from updateData import dataCenter

line = Blueprint('line', __name__)


@line.route('/gyro_line')
def getspeedLine():
    result = []
    result.append(dataCenter.xgyro_data_list)
    result.append(dataCenter.ygyro_data_list)
    result.append(dataCenter.zgyro_data_list)
    return jsonify({'gyro_line': result})


@line.route('/accel_line')
def getaccel_Line():
    result = []
    result.append(dataCenter.xaccel_data_list)
    result.append(dataCenter.yaccel_data_list)
    result.append(dataCenter.zaccel_data_list)
    return jsonify({'accel_line': result})


@line.route('/shake_amplitude')
def getshake_amplitude():
    if len(dataCenter.shake_amplitude_list) and dataCenter.shake_amplitude_list[0] > 100:
        log_msg("机身失稳", "warning")
    return jsonify({'shake_amplitude': dataCenter.shake_amplitude_list})
