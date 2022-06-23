import time

from flask import Blueprint, jsonify
from ClientConnect import client

state = Blueprint('state', __name__)
from updateData import dataCenter


@state.route('/ping')
def getState():
    return jsonify({'state': dataCenter.connectstate})


@state.route('/time')
def getTime():
    return jsonify({'time': dataCenter.connecttime})
