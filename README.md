# Getting Started

This project is based on and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

You can use it - if you want - like you would any other boilerplate, by cloning

`git clone git@github.com:Neugierdsnase/personal-react-boilerplate.git`

or

`git clone https://github.com/Neugierdsnase/personal-react-boilerplate.git`

installing with

`npm i`.

## Advanced usage

If you plan on using this regulairly, you can write a short script to set up a new react project with this setup in a single command. I, for example, use this fish script to initialize new react projects:

```
function nrp
	git clone git@github.com:Neugierdsnase/personal-react-boilerplate.git $argv
	cd $argv
	rm -rf .git
	npm i
	git init
	git add .
	git commit -m "cloned from boilerplate"
	git checkout -b develop
	code .
end


```
