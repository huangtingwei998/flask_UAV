from dronekit import connect
# Connect to the Vehicle (in this case a UDP endpoint)

vehicle = connect('192.168.1.100:14450', wait_ready=False, baud=57600)

# vehicle is an instance of the Vehicle class

