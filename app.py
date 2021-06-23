import sqlite3
from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route("/")
def GetData():
    conn = sqlite3.connect('filter.db')
    cursor = conn.cursor()
    cursor.execute("select * from Data")
    items = cursor.fetchall()
    conn.close()
    return render_template('index.html', items=items)


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
