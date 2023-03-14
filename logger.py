import logging as log
import os
import time

path = os.getcwd()
name = 'drone.log'  # 日志文件名称
log_ = os.path.join(path, name)  # 进入文件目录

class logging_():
    def __init__(self, path, delete=True):
        self.path = path  # 日志文件存放位置
        self.log_ = log_  # 进入文件目录
        if delete == True:
            open(f"{path}/{name}", "w").close  # 为True时清空文本

        # 创建一个日志处理器
        self.logger = log.getLogger('logger')
        # 设置日志等级，低于设置等级的日志被丢弃
        self.logger.setLevel(log.DEBUG)
        # 设置输出日志格式
        self.fmt = log.Formatter("%(asctime)s - %(levelname)s: %(message)s", "%Y-%m-%d %H:%M:%S")
        # 创建一个文件处理器
        self.fh = log.FileHandler(self.log_, encoding='utf-8')
        # 设置文件输出格式
        self.fh.setFormatter(self.fmt)
        # 将文件处理器添加到日志处理器中
        self.logger.addHandler(self.fh)
        # 创建一个控制台处理器
        self.sh = log.StreamHandler()
        # 设置控制台输出格式
        self.sh.setFormatter(self.fmt)
        # 将控制台处理器添加到日志处理器中
        self.logger.addHandler(self.sh)
        # 关闭文件
        self.fh.close()

# 获取当前的工作目录的路径
_path = os.getcwd()
drone_log = logging_(_path).logger # 实例化封装类


log_ui = []
# 将日志信息打印到前端
def log_msg(msg,level):
    if level=="info":
        drone_log.info(msg)
    elif level == "warning":
        drone_log.warning(msg)
    elif level == "error":
        drone_log.error(msg)
    elif level == "debug":
        drone_log.debug(msg)
    log_ui.append(msg + "$" + level + "$" + get_time())

# 获取时间
def get_time():
    return time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))