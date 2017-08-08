# Dark Souls 3 Attack Rating Calculator V2
Reformatting my original ds3-ar project

### Overview 

A reinvision of a project I previously worked on: <a href='https://github.com/Derling/ds3-ar'>Dark Souls 3 Attack Rating Calculator</a>

## Getting started 

To run this locally, simply pull this repo and have nodejs, json-server and the angular cli installed.

### Prerequisites

First of all we need <a href='https://nodejs.org/en/download/'>Nodejs</a>
once that is done we need Angular Cli<br/>
open your machines terminal and install angular cli<br/>
to do this simply run ``` npm install @angular/cli ```
<br/>
next we need json-server no run ```npm install json-server```
make a directory where this project will be kept and let's begin

### Running it

To run it open your terminal and cd into the folder this repo is stored in<br/>
next run the command ```npm start``` <br/>
the prompt ```** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200 ** ```
<br/>before you open your prefered browser, we need a seperate server for the weapon data <br/>
open a seperate terminal and cd into the folder containg 'weapon_data.json' <br/> 
ie your command should look simillar to this ``` cd ~/src/app/ ```<br/>
once you are on that directory run this command ```json-server --watch weapon_data.json  ``` to have a seperate server host the necessary json file <br/>
now the app is ready to run, open your browser and go to localhost::4200

#### Personal Notes

Core elements are the same. A view for all the weapons, a view for the selected weapon, its description, stats, etc. Lastly is the actual calculator itself. However I combnined all three views to better resemble the in-game menu that Dark Souls 3 players are familiar with.

*** not meant to be as stand-alone application. *** 

Here is a screenshot of my app: 
![alt text](https://github.com/Derling/ds3-ar-v2/blob/master/ds3-ar-v2-demo.png)

Here is an in-game screenshot of the menu:
 ![alt text](https://github.com/Derling/ds3-ar-v2/blob/master/in-game-demo.png)
 
 It's clear to see where my inspiration for the reimagining of the app came from. Feel free to view/use this app on my <a href='http://derling.info/ds3.html'>site</a>. Any comments/feedback is more than welcome, feel free to email me at derling0704@gmail.com.
