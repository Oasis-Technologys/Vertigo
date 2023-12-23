
from flask import Flask, render_template
import random as r

app = Flask(__name__)
soundtracks = ["../static/soundtracks/theme1.mp3","../static/soundtracks/theme.mp3"]
 
@app.route("/primal")
def primal():
    sessionchoice = r.choice(soundtracks)
    print("[+ Console +] Selected Track: ", sessionchoice)
    return render_template('index.html', audio_file=sessionchoice)

@app.route("/")
def index():
    return render_template('home.html')

@app.route("/storymode")
def storymode():
    return render_template('/storymode/index.html')

@app.route("/multiplayer")
def multiplayer():
    return render_template('/multiplayer/index.html')

@app.route("/sandbox")
def sandbox():
    return render_template('/sandbox/index.html')

@app.route("/learning")
def learning():
    return render_template('/learning/index.html')

# Settings Routes
@app.route("/settings")
def settings():
    sessionchoice = r.choice(soundtracks)
    print("[+ Console +] Selected Track (/settings): ", sessionchoice)
    return render_template('/settings/settings.html', audio_file=sessionchoice)

# END SETTING ROUTES

@app.route("/credits")
def credits():
    return render_template('credits.html')

@app.route("/test")
def test():
    return render_template('/settings/menus/general.html')





if __name__ == "__main__":
    app.run()