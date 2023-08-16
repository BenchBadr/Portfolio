from flask import Flask, render_template, request
from util.external_apis import *

app = Flask(__name__) 

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/members")
def members():
    return {"members": ["Member1","Member2"]}

@app.route("/api/gpt3-5-turbo/", methods=['POST'])
def prompt():
    prompt = request.json['prompt']
    return {"output":Completion.create(prompt)}

@app.route("/api/test")
def prompt_test():
    prompt = request.json['prompt']
    return {"output":f"//{prompt}//"}

if __name__== "__main__":
    app.run(debug=1)