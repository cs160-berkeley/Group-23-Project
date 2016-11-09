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
 
trace("I am here \n");
let blueSkin = new Skin ({fill: 'blue'});

let whiteSkin = new Skin ({fill: 'white'});
let graySkin = new Skin ({fill: 'gray'});
let blackSkin = new Skin ({fill: 'black'});

let whiteHeaderStyle = new Style({ font: "30px", color: "white" });
let whiteMedStyle = new Style({ font: "20px", color: "white" });
let whiteSmallStyle = new Style({ font: "10px", color: "white" });



let centerdots = new Texture("images/dot-menu-icon.png");let centermenuDots = new Skin({      width: 150, height: 50,      texture: centerdots,      fill: "white",      aspect: "fit"});

var dictionary = {};
dictionary['80'] = ["21guns.mp3" , "HeyHo.mp3","SeeYouAgain.mp3"];
dictionary['90'] = ["GoldDigger.mp3" , "Diamonds.mp3","WeAreYoung.mp3"];
dictionary['100'] = ["Riptide.mp3" , "ManintheMirror.mp3","TurnDownForWhat.mp3"];
var index;
var curr_index = 0;
var first = 0;
var song = 0;

var THR = 75;
let targetHR = new Label({left: 0, right: 5, top: 0,          		style: whiteHeaderStyle, string: THR});


let set = new Texture("images/settings-cogwheel-button copy.png");let settingsIm = new Skin({      width: 50, height: 50,      texture: set,      fill: "white",      aspect: "fit"});

let pause = new Texture("images/pause-button copy.png");
let pauseIm = new Skin({      width: 50, height: 50,      texture: set,      fill: "white",      aspect: "fit"});

let rewind = new Texture("images/rewind-button copy.png");
let rewindIm = new Skin({      width: 50, height: 50,      texture: rewind,      fill: "white",      aspect: "fit"});

let fforward = new Texture("images/fast-forward-button copy.png");let fforwardIm = new Skin({      width: 50, height: 50,      texture: fforward,      fill: "white",      aspect: "fit"});

let next = new Texture("images/play-next-button copy.png");let nextIm = new Skin({      width: 500, height: 500,      texture: next,      fill: "white",      aspect: "fit"});

let prev = new Texture("images/previous-track copy.png");let prevIm = new Skin({      width: 500, height: 500,      texture: prev,      fill: "white",      aspect: "fit"});

let play = new Texture("images/play-arrow copy.png");let playIm = new Skin({      width: 500, height: 500,      texture: play,      fill: "white",      aspect: "fit"});

let heart = new Texture("images/favorite-heart-button copy.png");let heartIm = new Skin({      width: 550, height: 550,      texture: heart,      fill: "white",      aspect: "fit"});

let add = new Texture("images/round-add-button copy.png");let addIm = new Skin({      width: 550, height: 550,      texture: add,      fill: "white",      aspect: "fit"});

let sub = new Texture("images/round-remove-button copy.png");let subIm = new Skin({      width: 550, height: 550,      texture: sub,      fill: "white",      aspect: "fit"});

let heartButton = Column.template($ => ({   left: 10, width: 87, height: 87, skin: heartIm, active: true,   contents: [
   		new Label({left: 10, right: 10, top: 10,          		style: whiteMedStyle, string: "Target"}),
   		targetHR,   ],   //behavior: Behavior({     // onTouchEnded: function(container) {       // application.remove(currentScreen);
		//currentScreen = new playScreen();
	//	application.add(currentScreen);      //}   //})}));

let addButton = Container.template($ => ({   left: 10, width: 50, height: 50, skin: addIm, active: true,   contents: [   ],   behavior: Behavior({      onTouchEnded: function(container) {
      	THR = THR + 10;
      	targetHR.string = THR;
      	container.container.container.controls[1][1].delegate("onTouchEnded");
      	first = 0;
      	container.container.container.controls[1][1].delegate("onTouchEnded");
      }   })}));



let subButton = Container.template($ => ({   left: 10, width: 50, height: 50, skin: subIm, active: true,   contents: [   ],   behavior: Behavior({      onTouchEnded: function(container) {
      	THR = THR - 10;
      	targetHR.string = THR;
      	container.container.container.controls[1][1].delegate("onTouchEnded");
      	first = 0;
      	container.container.container.controls[1][1].delegate("onTouchEnded");      }   })}));

let playButton = Container.template($ => ({   left: 0, right: 0, width: 30, height: 30, skin: playIm, active: true,   contents: [   ],   behavior: Behavior({      onTouchEnded: function(container) {
      	if (container.skin ==pauseIm){
      		container.skin = playIm;
      		//var song = new Media({url: mergeURI(application.url,"silence-1sec.mp3"),width: 0, height: 0});
			song.stop();
		
      	} else{
      		container.skin = pauseIm;
      		var cat = THR/10;
			cat = Math.ceil(cat) * 10;
			index = dictionary[cat.toString()].length;
			if (first == 0){ // when the application first loads up, play the first song in the correct HB category.
      			first = 1;
      			curr_index = 0;
      		 	song = new Media({url: mergeURI(application.url,"songs/" + cat + "/" + dictionary[cat.toString()][curr_index]),width: 0, height: 0});
				song.start();
      			//var sound = new Sound(mergeURI(application.url, "songs/" + cat + "/" + dictionary[cat.toString()][curr_index]));
				//sound.play();
      			
      		} else{
      			song.start();
			}
		}      }   })}));

let prevButton = Container.template($ => ({   left: 50, width: 20, height: 20, skin: prevIm, active: true,   contents: [   ],   behavior: Behavior({      onTouchEnded: function(container) {
      	song.stop();
      	var cat = THR/10;
		cat = Math.ceil(cat) * 10;
		curr_index = curr_index -1;
		index = dictionary[cat.toString()].length;
		if (curr_index < 0){			curr_index = index -1;		}      	song = new Media({url: mergeURI(application.url,"songs/" + cat + "/" + dictionary[cat.toString()][curr_index]),width: 0, height: 0});
		song.start();      }   })}));

let nextButton = Container.template($ => ({   right: 50, width: 20, height: 20, skin: nextIm, active: true,   contents: [   ],   behavior: Behavior({      onTouchEnded: function(container) {
		song.stop();      	var cat = THR/10;
		cat = Math.ceil(cat) * 10;
		curr_index = curr_index +1;

		if (curr_index >= index){			curr_index = 0;		}      	song = new Media({url: mergeURI(application.url,"songs/" + cat + "/" + dictionary[cat.toString()][curr_index]),width: 0, height: 0});
		song.start();
		trace(curr_index + "  " + index+ "\n");      }   })}));


/* Play screen layout */export var playScreen = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,    contents: [      new Line({          left: 0, right: 0, height: 30, skin: graySkin,          contents: [
          	new Label({left: 10, right: 10, top: 5,          		style: whiteMedStyle, string: "Now Playing"}),          ]      }),
      new Line({          left: 45, right: 45, top: 10, height: 90, skin: whiteSkin,          contents: [
          		new subButton(),
          		new heartButton(),
          		new addButton(),
      	 ]
      }),
      new Column({
      		left: 10, right: 10, height: 380, top: 5, skin: blackSkin, name:"controls",
      		contents: [
      			 new Line({
      				top: 5, left: 5, right: 5, height: 320, skin: graySkin,
      				contents: [
      					new Line({
      						top: 10, left: 30, width: 230, height: 230, skin: whiteSkin,
      						contents: [
      						]
     			 		}),
     			 		//having trouble making these labels appear
     			 		new Label({left: 10, right: 10, top: 0,          					style: whiteSmallStyle, string: "Song Title"}),
          				new Label({left: 10, right: 10, top: 0,          					style: whiteSmallStyle, string: "Song Artist"}),
      				]
     			 }),
     			 new Line({
      				top: 5, left: 5, right: 5, height: 45, skin: graySkin,
      				contents: [
      					new prevButton(),
      					new playButton(),
      					new nextButton(),
      				]
     			 }),
      		]
      }),
      new Line ({
      		left: 0, right: 0, height: 20, top: 10, skin: centermenuDots,
      }),    ]}));

/*let currentScreen;
currentScreen = new playScreen();
application.add(currentScreen);
*/