from flask import Blueprint, jsonify
from updateData import dataCenter

TFmini = Blueprint('TFmini', __name__)


@TFmini.route('/TFmini_data')
def getXdata():

    return jsonify({'TFmini_data': round(dataCenter.tfdata/100,2)})