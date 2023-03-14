import time

from flask import Blueprint, jsonify
from ClientConnect import client
from logger import drone_log, log_ui, log_msg

state = Blueprint('state', __name__)
from updateData import dataCenter


@state.route('/ping')
def getState():
    if not dataCenter.connectstate:
        log_msg("无人机连接断开", "error")
    return jsonify({'state': dataCenter.connectstate})


@state.route('/time')
def getTime():
    if len(dataCenter.connect_time_list)>0 and dataCenter.connect_time_list[0]>0.5:
        log_msg("无人机信号弱", "warning")
    return jsonify({'time': dataCenter.connect_time_list})
