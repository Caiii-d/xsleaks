from flask import Flask, send_file

app = Flask(__name__)

@app.route('/exists')
def exists():
    return send_file('img.png')

@app.route('/does_not_exist')
def does_not_exist():
    return 'does not exist', 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8880)