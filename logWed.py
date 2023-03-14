import json

from flask import Blueprint, jsonify

from logger import log_ui

log = Blueprint('log', __name__)


@log.route('/log')
def get_last_five_line_log():
    if len(log_ui)>5:
        log_ui.pop(0)
    # 打印最后的五行
    index = -5
    length = len(log_ui)
    if length<5:
        index = -length
    return jsonify({'log': log_ui[index:]})


@log.route('/log_all')
def get_all_log():
    return jsonify({'log': log_ui})

