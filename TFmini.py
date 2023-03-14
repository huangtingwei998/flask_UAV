from flask import Blueprint, jsonify

from logger import drone_log, log_ui, log_msg
from updateData import dataCenter

TFmini = Blueprint('TFmini', __name__)


@TFmini.route('/TFmini_data')
def getXdata():
    height = round(dataCenter.tfdata/100,2)
    if height>7:
        log_msg("警告：高度过高", "warning")
    return jsonify({'TFmini_data': height*2})