import json
import random
from flask import Flask
from flask import request
from gevent.pywsgi import WSGIServer
from bokeh.plotting import Figure
from bokeh.models import ColumnDataSource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/plot_throughput')
def plot_throughput():
    # Generate random data for throughput vs time (250 seconds)
    time = list(range(250))
    throughput = [random.uniform(0, 100) for _ in range(250)]

    # Create a ColumnDataSource
    source = ColumnDataSource(data=dict(time=time, throughput=throughput))

    # Create a Bokeh plot
    plot = Figure(plot_width=800, plot_height=400, title="Throughput vs Time")
    plot.line('time', 'throughput', source=source, line_width=2)

    # Embed the plot as JSON
    plot_json = json.dumps(plot.to_json())

    return plot_json

if __name__ == "__main__":
    print("Listening on HTTP port 5000")
    http_server = WSGIServer(('localhost', 5000), app)
    http_server.serve_forever()
