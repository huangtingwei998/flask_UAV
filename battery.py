from flask import Blueprint, jsonify

from logger import log_msg
from mavproxy import vehicle
battery = Blueprint('battery', __name__)

@battery.route('/voltage')
def getBatteryvoltage():
    voltage = vehicle.battery.voltage
    if voltage<10:
        log_msg("电池电量过低", "warning")
    return jsonify({'voltage': round(float(voltage),1)})


@battery.route('/current')
def getBatterycurrent():
    current = vehicle.battery.current
    if current>6:
        log_msg("电池电流过大", "warning")
    return jsonify({'current': round(float(current),1)})

@battery.route('/level')
def getBatterylevel():
    level = vehicle.battery.level
    return jsonify({'level':5})