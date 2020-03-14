import flask
import json
import uuid
from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config['MONGO_DBNAME'] = 'chipinodb'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/chipinodb'

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

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

@app.route('/login', methods=['POST'])
def login_feat():
    all_database_records = mongo.db.users.find_one({'username': request.json['username'], 'password': request.json['password']})
    return json.dumps(all_database_records)

@app.route('/register', methods=['POST'])
def profile_page():
    view = mongo.db.profile
    username = request.json['username']
    title = request.json['title']
    createdOn = request.json['createdOn']
    avatar = request.json['avatar']
    view.insert({'_id': str(uuid.uuid4()), 'username': username, 'title': title, 'createdOn': createdOn, 'avatar': avatar})
    return {'username': username, 'title': title, 'createdOn': createdOn, 'avatar': avatar}

@app.route('/profiles', methods=['GET'])
def prof_():
    find_profile = mongo.db.profile.find({})
    return json.dumps(find_profile)

# @app.route('/prof_page_', methods=['POST'])
# def prof_page():
#     database_records_all = mongo.db.profile.find_one({'username': request.json ['username']})
#     return json.dumps(database_records_all)
    

@app.route('/profile', methods=['POST'])
def profile_feat():
    database_records_all = mongo.db.profile.find_one({'username': request.json ['username']})
    return json.dumps(database_records_all)

app.run()