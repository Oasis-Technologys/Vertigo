
from flask import Flask, render_template
 
app = Flask(__name__)
 
 
@app.route("/primal")
def primal():
    audio_file_path = '../static/soundtracks/theme.wav'
    return render_template('index.html', audio_file=audio_file_path)

@app.route("/")
def index():
    return render_template('home.html')

@app.route("/storymode")
def storymode():
    return render_template('home.html')

@app.route("/multiplayer")
def index():
    return render_template('home.html')

@app.route("/sandbox")
def index():
    return render_template('home.html')

@app.route("/learning")
def index():
    return render_template('home.html')




if __name__ == "__main__":
    app.run()