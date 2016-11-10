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
let graySkin = new Skin ({fill: 'gray'});
let whiteSkin = new Skin ({fill: 'white'});
let blackSkin = new Skin ({fill: 'black'});
var labelStyle = new Style( { font: "bold 40px", color:"black" } );
var targetHR = 80;
var songArrays = {};
songArrays.songs60bpm = ["Here", "Love Gun", "Grapevine Fires", "If No One Will Listen", "My Love", "Beautiful War", "Culo", "No Good Deed", "Cold Desert"];
//songArrays.artists60bpm = ["Alessia Cara", "Cee Lo Green", "Death Cab for Cutie", "Kelly Clarkson", "Sia"];
songArrays.songs80bpm = ["21 Guns", "Hey Ho", "See You Again", "Complicated", "You Shook Me All Night Long", "Come And Get It", "We Cant Stop", "Rehab", "Halo"];



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


function getCurrHRArrays(hr, screen){
	var songArrName = "songs"+hr+"bpm";
	var artistArrName = "artists"+hr+"bpm";
	var songArr = songArrays[songArrName];
	var artistArr = songArrays[artistArrName];
	for(var i in songArr){
		if(i%2==0){
			screen.add(new SongNameWhite(songArr[i]));
		}
		else{
			screen.add(new SongNameGray(songArr[i]));
		}
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


var currentScreen = new songScreen();
getCurrHRArrays(targetHR, currentScreen);
// application.add(currentScreen);

export var LibraryTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    skin: new Skin({fill: "white"}),
    contents: [
        currentScreen
    ]
 }));
