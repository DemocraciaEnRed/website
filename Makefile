BIN=./node_modules/.bin/

run: build
	npm start

build: node_modules javascripts stylesheets index.html index-en.html

javascripts:
	$(BIN)browserify src/index.js  > javascripts/site.js

stylesheets:
	$(BIN)stylus --compress < src/index.styl --include-css > stylesheets/app.css

index.html:
	$(BIN)jade -O src/translations/es.json -p . < src/index.jade > index.html

index-en.html:
	$(BIN)jade -O src/translations/en.json -p . < src/index.jade > index-en.html

node_modules:
	npm install

clean:
	rm -rf node_modules

.PHONY: stylesheets javascripts index.html index-en.html clean
