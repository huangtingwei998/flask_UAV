from importlib import import_module
import os
from flask import Flask, render_template, Response
from flask_apscheduler import APScheduler
from GPS import GPS
from TFmini import TFmini
from attitude import attitude
from connectState import state
from logWed import log
from logger import drone_log, log_ui, log_msg
from mpu6050 import mpu6050
from battery import battery
from velocity import velocity
from line import line
import logging
from updateData import dataCenter,updata
if os.environ.get('CAMERA'):
    Camera = import_module('camera_' + os.environ['CAMERA']).Camera
else:
    from camera.camera import Camera

app = Flask(__name__)
app.register_blueprint(mpu6050, url_prefix='/mpu6050')
app.register_blueprint(TFmini, url_prefix='/TFmini')
app.register_blueprint(battery, url_prefix='/battery')
app.register_blueprint(state, url_prefix='/state')
app.register_blueprint(velocity, url_prefix='/velocity')
app.register_blueprint(attitude, url_prefix='/attitude')
app.register_blueprint(GPS, url_prefix='/GPS')
app.register_blueprint(line, url_prefix='/line')
app.register_blueprint(log, url_prefix='/log')



# 配置每0.5秒获取一次树莓派的数据
class Config(object):  # 创建配置，用类
    JSON_AS_ASCII = False
    # 任务列表
    JOBS = [
        {
            'id': 'job2',
            'func': 'updateData:updata',  # 方法名
            'trigger': 'interval',  # interval表示循环任务
            'seconds': 0.5,
        }
    ]


app.config.from_object(Config())  # 为实例化的flask引入配置


@app.route('/')
def index():
    """Video streaming home page."""
    return render_template('index.html')


def gen(camera):
    """Video streaming generator function."""
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/video_start')
def video_feed():
    """Video streaming route. Put this in the src attribute of an img tag."""
    return Response(gen(Camera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    scheduler = APScheduler()
    scheduler.init_app(app)
    scheduler.start()
    log_msg("后台系统启动", "info")
    app.run(host='127.0.0.1', threaded=True, port=5005)
