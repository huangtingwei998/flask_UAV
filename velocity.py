import math

import numpy
from flask import Blueprint, jsonify

import updateData
from ClientConnect import client
from logger import drone_log, log_ui, log_msg
from mavproxy import vehicle
from updateData import dataCenter

velocity = Blueprint('velocity', __name__)


@velocity.route('/xvelocity')
def getXvelocity():
    data = vehicle.velocity
    if data[0] > 2:
        log_msg("警告：x方向的速度过快", "warning")
    return jsonify({'xvelocity': round(data[0], 2)})


@velocity.route('/yvelocity')
def getYvelocity():
    data = vehicle.velocity
    if data[1] > 2:
        log_msg("警告：y方向的速度过快", "warning")
    return jsonify({'yvelocity': round(data[1], 2)})


@velocity.route('/zvelocity')
def getzvelocity():
    data = vehicle.velocity
    if data[2] > 2:
        log_msg("警告：z方向的速度过快", "warning")
    return jsonify({'zvelocity': round(data[2], 2)})


@velocity.route('/groundspeed')
def getgroundspeed():
    data = vehicle.groundspeed
    return jsonify({'groundspeed': round(data, 2)})


@velocity.route('/airspeed')
def getairspeed():
    data = vehicle.airspeed
    return jsonify({'airspeed': round(float(data), 2)})


@velocity.route('/allSpeed')
def getTotal():
    data = vehicle.velocity
    all = numpy.square(data[0]) + numpy.square(data[1]) + numpy.square(data[2])
    result = math.sqrt(all)
    if result > 2:
        log_msg("警告：速度过快", "warning")
    return jsonify({'allSpeed': round(float(result), 2)})
