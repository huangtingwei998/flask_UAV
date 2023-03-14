import time

from dronekit import connect
# Connect to the Vehicle (in this case a UDP endpoint)
from logger import drone_log, log_ui, log_msg

try:
    vehicle = connect('192.168.1.100:14450', wait_ready=False, baud=57600)
    # vehicle = connect('com5', wait_ready=False, baud=57600)
    log_msg("mavlink成功", "info")
except Exception:
    log_msg("mavlink失败", "error")


