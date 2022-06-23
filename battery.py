from flask import Blueprint, jsonify
from mavproxy import vehicle
battery = Blueprint('battery', __name__)

@battery.route('/voltage')
def getBatteryvoltage():
    voltage = vehicle.battery.voltage
    return jsonify({'voltage': round(float(voltage),1)})


@battery.route('/current')
def getBatterycurrent():
    current = vehicle.battery.current
    return jsonify({'current': round(float(current),1)})

@battery.route('/level')
def getBatterylevel():
    level = vehicle.battery.level
    return jsonify({'drone_battery_level': level})
