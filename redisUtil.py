import redis
r=redis.Redis(host='127.0.0.1',port=6609,db=0)
r.set('name','baby')
print(r.get('name'))
print(r.dbsize())