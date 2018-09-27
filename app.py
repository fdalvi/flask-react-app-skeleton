from flask import Flask
from flask import render_template
from flask import request, jsonify, send_from_directory

# creates a Flask application, named app
app = Flask(__name__, template_folder="client/dist")
app.config.from_mapping({
	"JS_FOLDER": "client/dist/js"
})

# Routes to serve
# Serve JS static files
@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory(app.config['JS_FOLDER'],
                               filename, as_attachment=True)

# HTML routes
@app.route("/")
def index():
	return render_template('index.html')

@app.route("/pagetwo")
def pagetwo():
	return render_template('pagetwo.html')

# run the application
if __name__ == "__main__":  
	app.run(host="0.0.0.0", port="5001", debug=True)