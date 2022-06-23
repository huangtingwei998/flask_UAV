import math

import numpy
from flask import Blueprint, jsonify
from ClientConnect import client
from mavproxy import vehicle
from updateData import dataCenter
velocity = Blueprint('velocity', __name__)

@velocity.route('/xvelocity')
def getXvelocity():
    data = vehicle.velocity
    return jsonify({'xvelocity': round(data[0],3)})

@velocity.route('/yvelocity')
def getYvelocity():
    data = vehicle.velocity
    return jsonify({'yvelocity': round(data[1],3)})

@velocity.route('/zvelocity')
def getzvelocity():
    data = vehicle.velocity
    return jsonify({'zvelocity': round(data[2],3)})


@velocity.route('/groundspeed')
def getgroundspeed():
    data = vehicle.groundspeed
    return jsonify({'groundspeed': round(data,3)})

@velocity.route('/airspeed')
def getairspeed():
    data = vehicle.airspeed
    return jsonify({'airspeed': round(float(data),3)})

@velocity.route('/allSpeed')
def getTotal():
    data = vehicle.velocity
    all = numpy.square(data[0]) + numpy.square(data[1]) + numpy.square(data[2])
    result = math.sqrt(all)
    return jsonify({'allSpeed': round(float(result), 3)})







