/*
 *     Copyright (C) 2010-2016 Marvell International Ltd.
 *     Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */

import { HistoricalAnalyticsTemplate } from "analytics_historical";
import { PlaySongTemplate } from "playsong"; 
import { SettingsTemplate } from "settings";
import { StartRunTemplate } from "startrun";
import { AnalyticsTemplate } from "analytics";
import Pins from "pins";
import {remotePins, currentScreen} from "main";

let graySkin = new Skin ({fill: 'gray'});
let whiteSkin = new Skin ({fill: '#fcfcfc',
						borders: {top: 1, bottom: 1}, 
    					stroke: "#000000"});
let blackSkin = new Skin ({fill: 'black'});
var pinkSkin = new Skin({fill: 'white'});
var salmonSkin = new Skin({fill: '#FE1B53'});

let blueSkin = new Skin ({fill: 'blue'});

 let whiteHeaderStyle = new Style({ font: "30px Helvetica Neue", color: "white" });
 let whiteMedStyle = new Style({ font: "20px Helvetica Neue", color: "white" });
 let whiteSmallStyle = new Style({ font: "10px Helvetica Neue", color: "white" });
 
 let blackHeaderStyle = new Style({ font: "30px Helvetica Neue bold", color: "black" });
 let blackMedStyle = new Style({ font: "20px Helvetica Neue", color: "black" });
 let blackSmallStyle = new Style({ font: "10px Helvetica Neue", color: "black" });

var labelStyle = new Style( { font: "20px Lato", color:"black" } );
var targetHR = 80;
var songArrays = {};
songArrays.songs60bpm = ["Here", "Love Gun", "Grapevine Fires", "If No One Will Listen", "My Love", "Beautiful War", "Culo", "No Good Deed", "Cold Desert"];
//songArrays.artists60bpm = ["Alessia Cara", "Cee Lo Green", "Death Cab for Cutie", "Kelly Clarkson", "Sia"];
songArrays.songs80bpm = ["21 Guns", "Hey Ho", "See You Again", "Complicated", "You Shook Me All Night Long", "Come And Get It", "We Cant Stop", "Rehab", "Halo"];

let listp = new Texture("images/list-icon-push.png");
 let listPink = new Skin({
  width: 250, height: 250,
  texture: listp,
  fill: "white",
  aspect: "fit"
});

let graphg = new Texture("images/graph-icon.png");
 let graphGray = new Skin({
  width: 250, height: 250,
  texture: graphg,
  fill: "white",
  aspect: "fit"
});

let runningg = new Texture("images/running-icon.png");
 let runningGray = new Skin({
  width: 250, height: 250,
  texture: runningg,
  fill: "white",
  aspect: "fit"
});

let nextScreenButton = Container.template($ => ({
    width: 100, height: 30, skin: whiteSkin, active: true,
    contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 30, height: 30, skin: graphGray,
      contents: [
      ]
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
            application.remove(currentScreen);
            currentScreen = new AnalyticsTemplate();
            application.add(currentScreen);
      }
  })
 }));

let prevScreenButton = Container.template($ => ({
    width: 100, height: 30, skin: whiteSkin, active: true,
    contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 25, height: 25, skin: listPink,
      contents: [
      ]
    }),
    ],
    //behavior: Behavior({
      //  onTouchEnded: function(container) {
        //    application.add(new LibraryTemplate());
      //}
  //})
 }));

let finishRunButton = Container.template($ => ({
    width: 100, height: 30, skin: whiteSkin, active: true,
    contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 30, height: 30, skin: runningGray,
      contents: [
      ]
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
            application.remove(currentScreen);
            currentScreen = new PlaySongTemplate();
            application.add(currentScreen);
    }
  })
 }));

var labelStuff = Container.template($ => ({ 
    skin: graySkin, 
    contents: [
        new Label($, { width: 640, height:60, string:"TEST", style: labelStyle })
    ],
    Behavior: class extends Behavior {
    	onTouchBegan(content){

    	}
    }
}));

var song = 0;

var SongNameWhite = Container.template($ => ({
    left: 0, right: 0, top: 0, height: 60, active: true, skin: whiteSkin, state:0,
    contents: [
        new Label({name:"songNameWhite", left:0, right:0, height:60, string:$, style: labelStyle})
    ],
    Behavior: class extends Behavior {
    	onTouchBegan(content){
    		content.state = 1;
        }
        onTouchEnded(content){
        	var songStr = $.replace(/\s/g, "-").toLowerCase();
			if(song!=0) song.stop();
	        song = new Media({url: mergeURI(application.url, "songs/"+targetHR+"/"+songStr+".mp3")});
        	song.start();
        }
    }
}));

var SongNameGray = Container.template($ => ({
    left: 0, right: 0, top: 0, height: 60, active: true, skin: graySkin, state:0,
    contents: [
        new Label({name:"songNameGray", left:0, right:0, height:60, string:$, style: labelStyle})
    ],
    Behavior: class extends Behavior {
    	onTouchBegan(content){
    		content.state = 1;
        }
        onTouchEnded(content){
        	var songStr = $.replace(/\s/g, "-").toLowerCase();
        	if(song!=0) song.stop();
        	song = new Media({url: mergeURI(application.url, "songs/"+targetHR+"/"+songStr+".mp3")});
        	song.start();
        }
    }
}));

let TOP_BAR = new Line({
    left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Library"}),
    ]
  }),

function getCurrHRArrays(hr, screen){
	var songArrName = "songs"+hr+"bpm";
	var artistArrName = "artists"+hr+"bpm";
	var songArr = songArrays[songArrName];
	var artistArr = songArrays[artistArrName];
	for(var i in songArr){
			screen.add(new SongNameWhite(songArr[i]));
	}
	/*for(var i in artistArr){
		trace(artistArr[i]+"\n");
	}*/
	var content = new Content({ width: 640, height:500, skin: blackSkin });
	screen.add(content);
}

/* Song screen layout */
let songScreen = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin
}));


var currScreen = new songScreen();
getCurrHRArrays(targetHR, currScreen);
// application.add(currentScreen);

export var LibraryTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    skin: new Skin({fill: "white"}),
    contents: [
        TOP_BAR,
        currScreen,
        new Line({
        top: 25, height: 30, skin: whiteSkin,
            contents: [
            new prevScreenButton(),
                new finishRunButton(),
                new nextScreenButton(),
            ]
     }),
    ]
 }));
