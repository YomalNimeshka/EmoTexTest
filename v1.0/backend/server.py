from flask import Flask, request
from Predictor.emotionPredictorV2 import predict
from databaseConn import emotion_joy, emotion_angry, emotion_fear, emotion_surprise, emotion_sadness
from flask_cors import CORS, cross_origin

#Initializing the flask app
app = Flask(__name__)
CORS(app)

#Route for seeing data
@app.route('/', methods = ['GET','POST'])
@cross_origin(origin='localhost')
def get_response():
    
        
    # Getting users text input
    TextOnJson = request.json
    TextToWrite = TextOnJson['emoData']
    #print(TextToWrite)

    # Sending the user text to the predictor to predict the emotion
    Final_emotion = predict(TextToWrite)
    #print(Final_emotion)
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
    
    elif Final_emotion == 'sadness':
        emotion_response = emotion_sadness()
    else:
        return "Cant respond"
    
    return {"data":emotion_response}


#running app
if __name__ == '__main__':
    app.run(debug=True)