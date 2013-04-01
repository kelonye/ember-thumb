all: node_modules build

build: components lib lib/index.js
	@component build --dev

node_modules: package.json
	@npm install

components:
	@component install

lib:
	@mkdir -p lib

lib/index.js: src/index.coffee
	coffee -bcj $@ $<

example: build
	@coffee example

clean:
	@rm -rf lib

.PHONY: clean example