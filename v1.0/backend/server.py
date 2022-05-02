from flask import Flask, request, json, jsonify
from Predictor.emotionPredictorV2 import predict
from databaseConn import emotion_joy, emotion_angry, emotion_fear, emotion_surprise

#Initializing the flask app
app = Flask(__name__)

#Route for seeing data
@app.route('/', methods = ['GET','POST'])
def get_response():
    if request.method == 'POST':
        
        # Getting users text input
        TextOnJson = request.form
        TextToWrite = TextOnJson['userTextInput']
        print(TextToWrite)

        # Sending the user text to the predictor to predict the emotion
        Final_emotion = predict(TextToWrite)
        #Final_emotion = 'joy'

        # Condtions to get the proper response according to the detected emotion
        if Final_emotion == 'joy':
            emotion_response = emotion_joy()
        
        elif Final_emotion == 'anger':
            emotion_response = emotion_angry()

        elif Final_emotion == 'fear':
            emotion_response = emotion_fear()
        
        elif Final_emotion == 'surprise':
            emotion_response = emotion_surprise()

    

    return {
        # Sending back the response back to the user
        'Emotion' : emotion_response
        
    }


#running app
if __name__ == '__main__':
    app.run(debug=True)