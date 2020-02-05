  
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/v1/btcusd', methods=['GET'])
@cross_origin()
def ticker():

    url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
    data = requests.get(url).json()

    id = data['id']
    title = data['title']
    description = data['description']
    director = data['director']

    return jsonify(id=id, title=title, description=description, director=director )

if __name__ == '__main__':
    app.run()