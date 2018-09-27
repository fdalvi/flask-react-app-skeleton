# Flask/React App skeleton

A quick start project that includes all initial configuration for a flask+react app. Uses `conda` for backend (flask/python) dependencies, and `npm` for frontend dependencies (react). `webpack` is used to compile all `html`/`jsx`/`js`/`css` etc into vanilla `html` and `js`. 

## Getting started
To get started, run:
```bash
conda env create -f flask-react-app-skeleton.yml
npm install
```

_Note: Ensure node is not in production mode, or else development dependencies will not be installed_

Now, you can use any of the following to build the frontend files:
```bash
npm run build # One time build
npm run dev # Continuous build on file change
```

And the following to launch your server:
```bash
python app.py
```

## Project Structure
```
├── README.md
├── app.py : flask entry file (backend)
├── client : all frontend code
│   └── assets : folder for all jsx/css
│   │   └── css : folder for css
│   │   └── *.jsx : jsx files for this project
│   └── dist : folder where webpack will place all compiled files
│   └── *.html : html templates
├── flask-react-app-skeleton.yml : Conda environment
├── package.json : NPM config
├── webpack.config.js : Webpack configuration
```

## Notes
- Webpack is configured to load all css/sass/less and compile it into JS'ed css.
- Webpack is configured to load the html templates and automatically add compiled js scripts in `<script>` tags.
- JS Minification is on by default (webpack is in production mode)
