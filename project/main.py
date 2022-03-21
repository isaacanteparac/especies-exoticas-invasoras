from flask import Flask
app = Flask(__name__)

@app.route('/')
def main_():
    return"hola"

if __name__ == "__main__":
    app.run(debug=True)