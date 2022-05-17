import re
import string
import numpy as np
import pandas as pd
import pickle
import tensorflow

from keras.preprocessing.sequence import pad_sequences

label_endcoder_path = 'D:/Uni/Finals/FYP/Emotion Helper/EmoTex/v1.0/backend/Predictor/v1.2/labelEncoder.pickle'
label_endcoder_open = open(label_endcoder_path, 'rb')
label_encoder = pickle.load(label_endcoder_open)

tokenizer_path = 'D:/Uni/Finals/FYP/Emotion Helper/EmoTex/v1.0/backend/Predictor/v1.2/tokenizer.pickle'
tokenizer_open = open(tokenizer_path, 'rb')
tokenizer = pickle.load(tokenizer_open)

savedModel = tensorflow.keras.models.load_model('D:/Uni/Finals/FYP/Emotion Helper/EmoTex/v1.0/backend/Predictor/v1.2/v1.2 model/saved model')

# Text preprocessing function

str_punc = string.punctuation.replace(',', '').replace("'",'')

def clean(text):
    global str_punc
    text = re.sub(r'[^a-zA-Z ]', '', text)
    text = text.lower()
    return text  

def predict(sentence):
    #print(sentence)
    sentence = clean(sentence)
    sentence = tokenizer.texts_to_sequences([sentence])
    sentence = pad_sequences(sentence, maxlen=256, truncating='pre')
    result = label_encoder.inverse_transform(np.argmax(savedModel.predict(sentence), axis=-1))[0]
    proba =  np.max(savedModel.predict(sentence))
    return result

#while True:
#    test_prediction = input("enter sentence : ")
#    print("Emotion detected : " +predict(test_prediction))