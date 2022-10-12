from flask import Flask, send_file, Response

app = Flask(__name__)


@app.route('/')
def index():
    return send_file('static/target.html')

@app.route('/logo')
def logo():

    resp = send_file('static/logo.png')
    print(resp)
    return resp


@app.route('/attacker')
def attacker():
    return send_file('static/attacker.html')


@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Cache-Control'] = '' # 'no-store'
    return response

if __name__ == '__main__':
    app.run('0.0.0.0', '8880')
