import time
from socket import *


def help():
    print("         命令：")
    print("         up:无人机向上")
    print("         down:无人机向下")
    print("         left:无人机向左")
    print("         down:无人机向右")
    print("         exit:断开连接，系统退出")


HOST = '192.168.1.199'  # or 'localhost'
PORT = 21568
BUFSIZ = 1024
ADDR = (HOST, PORT)


class ClientConnect():
    tcpCliSock = socket(AF_INET, SOCK_STREAM)

    def __init__(self):
        self.tcpCliSock.connect(ADDR)

    def closeClientConnect(self):
        self.tcpCliSock.send('bye'.encode())
        self.tcpCliSock.close()

    def sendData(self, data):
        self.tcpCliSock.send((data.encode()))

    def getData(self):
        data = self.tcpCliSock.recv(BUFSIZ)
        return data.decode('utf-8')


client = ClientConnect()
