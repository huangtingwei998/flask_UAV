from flask import Blueprint, jsonify

from updateData import dataCenter

line = Blueprint('line', __name__)


@line.route('/Speedline')
def getspeedLine():
    result = []
    result.append(dataCenter.xvelocity_data_list)
    result.append(dataCenter.yvelocity_data_list)
    result.append(dataCenter.zvelocity_data_list)
    return jsonify({'Speedline': result})


@line.route('/accel_line')
def getaccel_Line():
    result = []
    result.append(dataCenter.xaccel_data_list)
    result.append(dataCenter.yaccel_data_list)
    result.append(dataCenter.zaccel_data_list)
    return jsonify({'accel_line': result})


@line.route('/shake_amplitude')
def getshake_amplitude():
    result = []
    result.append(dataCenter.xaccel_data_list)
    result.append(dataCenter.yaccel_data_list)
    result.append(dataCenter.zaccel_data_list)
    return jsonify({'accel_line': result})