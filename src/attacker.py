from flask import Flask, send_file

app = Flask(__name__, static_url_path='.')
@app.route('/')
def index():
    return send_file('static/attacker.html')

@app.route('/size')
def size():
    return send_file('static/size.html')

if __name__ == '__main__':
    app.run('0.0.0.0', '8880')
