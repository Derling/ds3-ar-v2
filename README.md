# Dark Souls 3 Attack Rating Calculator V2
Reformatting my original ds3-ar project

### Overview 

A reinvision of a project I previously worked on: <a href='https://github.com/Derling/ds3-ar'>Dark Souls 3 Attack Rating Calculator</a>

Getting started

To run this locally, simply pull this repo and have nodejs, json-server and the angular cli installed.

Prerequisites

First of all we need Nodejs once that is done we need Angular Cli
open your machines terminal and install angular cli
to do this simply run npm install @angular/cli 
next we need json-server no run npm install json-server make a directory where this project will be kept and let's begin

Running it

To run it open your terminal and cd into the folder this repo is stored in
next run the command npm start 
the prompt ** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200 ** 
before you open your prefered browser, we need a seperate server for the weapon data 
open a seperate terminal and cd into the folder containg 'weapon_data.json' 
ie your command should look simillar to this cd ~/src/app/
once you are on that directory run this command json-server --watch weapon_data.json to have a seperate server host the necessary json file 
now the app is ready to run, open your browser and go to localhost::4200
