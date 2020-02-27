import flask
import json
import uuid
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config['MONGO_DBNAME'] = 'chipinodb'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/chipinodb'

mongo = PyMongo(app)

@app.route('/oswald', methods=['GET'])
def home():
    return "I'm kinda cute.  A bit of a shit.  I love cats.  And I like to sit.  Chester is my cousin.  Max is my friend.  And I drive my mum around the bend.  Food is life.  I can't reach it when it's above. But I'm happy anyway.  Because all I need is love. "
    

@app.route('/user', methods=['POST'])
def test():
    one = mongo.db.users
    username = request.json['username']
    password = request.json['password']
    one_id = one.insert({'_id': str(uuid.uuid4()),'username': username, 'password': password})
    return {'username': username, "password": password}

@app.route('/users', methods=['GET'])
def test2():
    two = mongo.db.users.find({})
    four = {}
    for three in two: 
        ozzy = dict(three) 
        four[ozzy['username']] = three
    return json.dumps(four)

@app.route('/username', methods=['POST'])
def test3():
    all_database_records = mongo.db.users.find_one({'username': request.json['username']})
    # key = {}
    # for database_record in all_database_records:
    #     if database_record['username'] == request.json['username']:
    #         return json.dumps(database_record)
    return json.dumps(all_database_records)


app.run()