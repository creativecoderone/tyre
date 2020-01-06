# -*- coding: utf-8 -*-
"""
Created on Fri Jan  3 16:07:28 2020

@author: Administrator
"""

from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import json
import pymongo
import urllib

client = pymongo.MongoClient('mongodb://manoj10101996:' + urllib.parse.quote_plus(
    'Mano@3010') + '@cluster0-shard-00-00-u80ry.mongodb.net:27017,cluster0-shard-00-01-u80ry.mongodb.net:27017,cluster0-shard-00-02-u80ry.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
database = client['datas']


@app.route('/apps')
def heello():
    res = database['apps'].find_one()
    res['_id'] = str(res['_id'])
    print(res)
    return json.dumps(res['name'])


@app.route('/usercheck', methods=['POST'])
def usercheck():
    data = request.get_json();
    query = {"username": data['username']}
    for x in database['apps'].find(query):
        status = False
        msg = 'Username exists'
        return json.dumps({'status': status, 'msg': msg})
    status = True
    msg = 'Username exists'
    return json.dumps({'status': status, 'msg': msg})


@app.route('/userprofile', methods=['POST'])
def userprofile():
    data = request.get_json();
    query = {"username": data['username']}
    resp = [];
    for x in database['apps'].find(query):
        x['_id'] = str(x['_id']);
        resp.append(x)
    return json.dumps(resp)


@app.route('/getupdateuser', methods=['POST'])
def getupdateuser():
    data = request.get_json();
    query = {"username": data['username']}
    resp = [];
    for x in database['updateuser'].find(query):
        x['_id'] = str(x['_id']);
        resp.append(x)
    return json.dumps(resp)


@app.route('/updateuser', methods=['POST'])
def updateuser():
    data = request.get_json();
    x = database['updateuser'].insert_one(data)
    if x.inserted_id:
        status = True
        msg = 'Successfully updated'
        # id = x.inserted_id
    else:
        status = False
        # id = None
        msg = 'Cannot register'
    return json.dumps({'status': status, 'msg': msg})


@app.route('/doupdateuserdata', methods=['POST'])
def doupdateuserdata():
    data = request.get_json();
    query = {"_id": data['_id']}
    resp = [];
    newvalues = {"$set": data}
    database['updateuser'].update_one(query, newvalues)
    for x in database['updateuser'].find(query):
        x['_id'] = str(x['_id']);
        resp.append(x)
    return json.dumps(resp)

@app.route('/updataapps', methods=['POST'])
def updataapps():
    data = request.get_json();
    newvalues = {"$set": {"update": "1"}}
    database['apps'].update_one(data, newvalues)
    # print "customers" after the update:
    for x in database['apps'].find(data):
        if x['update'] == '1':
            status = True
            msg = 'Successfully updated'
        else:
            status = False
            # id = None
            msg = 'Cannot register'
        return json.dumps({'status': status, 'msg': msg})


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json();
    x = database['apps'].insert_one(data)
    if x.inserted_id:
        status = True
        msg = 'Successfully registered'
        # id = x.inserted_id
    else:
        status = False
        # id = None
        msg = 'Cannot register'
    return json.dumps({'status': status, 'msg': msg})


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json();
    query = {"username": data['username'], "password": data['password']}
    for x in database['apps'].find(query):
        print(x)
        status = True
        msg = 'login  success'
        # id = x.inserted_id
        query2 = {"username": data['username']}
        resp = [];
        for xd in database['apps'].find(query2):
            xd['_id'] = str(xd['_id']);
            resp.append(xd)
        return json.dumps({'status': status, 'msg': msg, 'update': resp[0]['update'],'_id': resp[0]['_id'],'username': resp[0]['username']})
    status = False
    # id = None
    msg = 'Invalid login'
    return json.dumps({'status': status, 'msg': msg})


@app.route('/property', methods=['POST'])
def property():
    data = request.get_json();
    x = database['property'].insert_one(data)
    if x.inserted_id:
        status = True
        msg = 'Successfully inserted'
        # id = x.inserted_id
    else:
        status = False
        # id = None
        msg = 'Cannot insert data.'
    return json.dumps({'status': status, 'msg': msg})


@app.route('/profile', methods=['POST'])
def profile():
    data = request.get_json();
    x = database['profile'].insert_one(data)
    if x.inserted_id:
        status = True
        msg = 'Successfully inserted'
        # id = x.inserted_id
    else:
        status = False
        # id = None
        msg = 'Cannot insert data.'
    return json.dumps({'status': status, 'msg': msg})


@app.route('/profileinfo')
def profileinfo():
    resp = [];
    for x in database['profile'].find():
        x['_id'] = str(x['_id']);
        resp.append(x)
    return json.dumps(resp)


@app.route('/propertyinfo')
def propertyinfo():
    resp = [];
    for x in database['property'].find():
        x['_id'] = str(x['_id']);
        resp.append(x)
    return json.dumps(resp)

.
@app.route('/')
def hello_world():
    return 'Hello manoj'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='1234')
