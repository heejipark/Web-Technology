
# Hee Ji Park - flask

from flask import Flask, render_template, request
import pandas as pd
import joblib

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/result', methods=['POST'])
def post():
    model = joblib.load("regr.pkl")
    age = int(request.form['age'])
    weight = int(request.form['weight'])
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = model.predict(x)[0]

    return render_template("index.html", data=prediction)