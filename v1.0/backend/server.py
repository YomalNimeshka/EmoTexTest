
from flask import Flask, request, redirect

#Initializing the flask app
app = Flask(__name__)

#Route for seeing data
@app.route('/data', methods = ['GET','POST'])
def get_time():
    if request.method == 'POST':
        formName = request.form['formName']
        formAge = request.form['formAge']
    return {
        'Name':formName,
        'Age':formAge
    }

#running app
if __name__ == '__main__':
    app.run(debug=True)