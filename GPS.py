from flask import Blueprint, jsonify
from ClientConnect import client
from mavproxy import vehicle

GPS = Blueprint('GPS', __name__)


@GPS.route('/latAndlon')
def getLatitude():
    client.sendData("GPS")
    data = client.getData()
    if data == "Parse error" or data =="Device error":
        return jsonify({'flag': False, 'lat':30.2679,'lon':120.12585})
    line = spitStr(data)
    if line[2]=='' or line[2]=='':
        return jsonify({'flag': False, 'lat': 30.2679, 'lon': 120.12585})
    print(data)
    lat,lon = charge(data)
    return jsonify({'flag': True, 'lat':lat, 'lon': lon})


def spitStr(line):
    return str(line).split(',')

def charge(line):
    if line.startswith('$GNGGA'):  # 只匹配以“$GNGGA”开头的数据
        line = str(line).split(',')
        print("指令名称: ", line[0])
        print("发送时间: ", line[1][:6])

        # 经度数据处理
        j = float(line[4][:3]) + float(line[4][3:]) / 60 + 0.01082983
        # 纬度数据处理
        w = float(line[2][:2]) + float(line[2][2:]) / 60 + 0.0037923
        return  w,j

if __name__=='__main__':
    line  = "$GNGGA,121327.00,3015.83689,N,12006.87499,E,2,11,1.10,79.2,M,7.2,M,,0000*49"
    w,j = charge(line)
    print(w)
    print(j)