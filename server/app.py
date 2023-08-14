from flask import Flask, request , jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'video'

mysql = MySQL(app)

@app.route('/submit', methods=['POST'])
def submit():
    link = request.get_json()['link']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO store(link) VALUES (%s)", [link])
    mysql.connection.commit()
    return {'status': 'success'}

@app.route('/home', methods=['GET'])
def home():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM store ORDER BY id DESC")
    link = cur.fetchall()
    print(link)
    if link!= None:
        return {'link': link}
    else:
        return {'link': ""}

if __name__ == '__main__':
    app.run(debug=True)
