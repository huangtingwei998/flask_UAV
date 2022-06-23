from flask import Blueprint, jsonify

from mavproxy import vehicle
attitude = Blueprint('attitude', __name__)


@attitude.route('/heading')
def getgroundspeed():
    data = vehicle.heading
    return jsonify({'heading': data})


@attitude.route('/yaw')
def getYaw():
    data = vehicle.attitude.yaw
    return jsonify({'yaw': round(float(data), 3)})

@attitude.route('/roll')
def getRoll():
    data = vehicle.attitude.roll
    return jsonify({'roll': round(float(data), 3)})

@attitude.route('/pitch')
def getPitch():
    data = vehicle.attitude.pitch
    return jsonify({'pitch': round(float(data), 3)})