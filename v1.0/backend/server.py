from flask import Flask

#Initializing the flask app
app = Flask(__name__)

#Route for seeing data
@app.route('/data')
def get_time():
    return {
        'Name':'Yomal',
        'Age':'20'
    }

#running app
if __name__ == '__main__':
    app.run(debug=True)