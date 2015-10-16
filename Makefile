BIN=./node_modules/.bin/

run: build
	npm start

build: javascripts stylesheets index.html index-en.html

javascripts: node_modules
	$(BIN)browserify src/index.js  > javascripts/site.js

stylesheets: node_modules
	$(BIN)stylus --compress < src/index.styl --include-css > stylesheets/app.css

index.html: node_modules
	$(BIN)jade -O src/translations/es.json -p . < src/index.jade > index.html

index-en.html: node_modules
	$(BIN)jade -O src/translations/en.json -p . < src/index.jade > index-en.html

node_modules:
	npm install

clean:
	rm -rf node_modules

.PHONY: stylesheets javascripts index.html index-en.html clean
