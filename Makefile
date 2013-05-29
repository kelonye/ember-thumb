all: node_modules build

build: components lib/index.js
	@component build --dev

node_modules:
	@npm install

components:
	@component install

clean:
	@rm -rf build

.PHONY: clean