BIN=./node_modules/.bin/

run: build
	npm start

build: node_modules javascripts stylesheets index.html index-en.html jobs.html jobs-en.html

javascripts:
	$(BIN)browserify src/index.js  > javascripts/site.js && $(BIN)browserify src/jobs/index.js  > javascripts/jobs.js

stylesheets:
	$(BIN)stylus --compress < src/index.styl --include-css > stylesheets/app.css

index.html:
	$(BIN)jade --path index -O src/translations/es.json -p . < src/index.jade > index.html

index-en.html:
	$(BIN)jade --path index -O src/translations/en.json -p . < src/index.jade > ./en/index.html

jobs.html:
	$(BIN)jade --path jobs -O src/translations/es.json -p .  < src/jobs.jade > jobs.html

jobs-en.html:
	$(BIN)jade --path jobs-en -O src/translations/en.json -p .  < src/jobs-en.jade > ./en/jobs.html

node_modules:
	npm install

clean:
	rm -rf node_modules

.PHONY: stylesheets javascripts index.html index-en.html jobs.html jobs-en.html clean
