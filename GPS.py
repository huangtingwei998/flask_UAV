import requests
from flask import Blueprint, jsonify

from mavproxy import vehicle

GPS = Blueprint('GPS', __name__)


# @GPS.route('/gps')
# def latAndlon():
#     """读取无人机的gps数据"""
#     lon = vehicle.location.global_frame.lon
#     lat = vehicle.location.global_frame.lat
#     """如果GPS数据异常，设置默认值，为浙大紫金港机械工程学院开物苑"""
#     if lon == 0.0:
#         lon = 120.0701461
#         lat = 30.3072456
#     """
#     百度地图API坐标系不是GPS坐标，需要调用转换接口，由于转换公式涉及国家机密，因为只提供接口
#     """
#     resp = requests.get(url="https://api.map.baidu.com/geoconv/v1/?coords=" + str(lon) + "," + str(
#         lat) + "&from=1&to=5&ak=ki3jGBtNuafVtk2mFXxIiLLUBC6X2k4k")
#     dict = eval(resp.text)
#     return jsonify({'lon': dict['result'][0]['x'], 'lat': dict['result'][0]['y']})