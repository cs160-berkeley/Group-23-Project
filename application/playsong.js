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
 
 
 
 

 

 

 
import { SettingsTemplate } from "settings";
import { StartRunTemplate } from "startrun";
import { LibraryTemplate } from "library";
import { AnalyticsTemplate } from "analytics";
import Pins from "pins";
import {remotePins, currentScreen} from "main";



let blueSkin = new Skin ({fill: 'blue'});

 let whiteSkin = new Skin ({fill: 'white'});
 let graySkin = new Skin ({fill: 'gray'});
 let blackSkin = new Skin ({fill: 'black'});
 let pinkSkin = new Skin({fill: 'white'});
 let salmonSkin = new Skin({fill: '#FE1B53'});

 let whiteHeaderStyle = new Style({ font: "30px Helvetica Neue", color: "white" });
 let whiteMedStyle = new Style({ font: "20px Helvetica Neue", color: "white" });
 let whiteSmallStyle = new Style({ font: "10px Helvetica Neue", color: "white" });
 
 let blackHeaderStyle = new Style({ font: "30px Helvetica Neue bold", color: "black" });
 let blackMedStyle = new Style({ font: "20px Helvetica Neue", color: "black" });
 let blackSmallStyle = new Style({ font: "10px Helvetica Neue", color: "black" });



 let centerdots = new Texture("images/dot-menu-icon.png");
 let centermenuDots = new Skin({
  width: 150, height: 50,
  texture: centerdots,
  fill: "white",
  aspect: "fit"
});

 var dictionary = {};
 dictionary['80'] = ["21guns" , "HeyHo","SeeYouAgain"];
 dictionary['90'] = ["GoldDigger" , "Diamonds","WeAreYoung"];
 dictionary['100'] = ["Riptide" , "ManintheMirror","TurnDownForWhat"];

 var name_artist_dict = {};
 name_artist_dict["21guns"] = ["21 Guns", "Green Day"];
 name_artist_dict["HeyHo"] = ["Hey Ho", "The Lumineers"];
 name_artist_dict["SeeYouAgain"] = ["See You Again", "Wiz Khalifa ft. Charlie Puth"];
 name_artist_dict["GoldDigger"] = ["Gold Digger", "Kanye West"];
 name_artist_dict["Diamonds"] = ["Diamonds", "Rihanna"];
 name_artist_dict["WeAreYoung"] = ["We Are Young", "Fun ft. Janelle Monáe"];
 name_artist_dict["Riptide"] = ["Riptide", "Vance Joy"];
 name_artist_dict["ManintheMirror"] = ["Man in the Mirror", "Green Day"];
 name_artist_dict["TurnDownForWhat"] = ["Turn Down For What", "DJ Snake, Lil Jon"];

 var index;
 var curr_index = 0;
 var first = 0;
 var song = 0;
 var THR = 85;
 var CHR = 60;
 let targetHR = new Label({left: 0, right: 5, top: 0,
  style: blackHeaderStyle, string: THR});


 let set = new Texture("images/settings-cogwheel-button copy.png");
 let settingsIm = new Skin({
  width: 50, height: 50,
  texture: set,
  fill: "white",
  aspect: "fit"
});

 let pause = new Texture("images/pause-button copy.png");
 let pauseIm = new Skin({
  width: 50, height: 50,
  texture: pause,
  fill: "white",
  aspect: "fit"
});

 let rewind = new Texture("images/rewind-button copy.png");
 let rewindIm = new Skin({
  width: 50, height: 50,
  texture: rewind,
  fill: "white",
  aspect: "fit"
});

 let fforward = new Texture("images/fast-forward-button copy.png");
 let fforwardIm = new Skin({
  width: 50, height: 50,
  texture: fforward,
  fill: "white",
  aspect: "fit"
});

 let next = new Texture("images/play-next-button copy.png");
 let nextIm = new Skin({
  width: 500, height: 500,
  texture: next,
  fill: "white",
  aspect: "fit"
});

 let prev = new Texture("images/previous-track copy.png");
 let prevIm = new Skin({
  width: 500, height: 500,
  texture: prev,
  fill: "white",
  aspect: "fit"
});

 let play = new Texture("images/play-arrow copy.png");
 let playIm = new Skin({
  width: 500, height: 500,
  texture: play,
  fill: "white",
  aspect: "fit"
});

 let heart = new Texture("images/favorite-heart-button copy.png");
 let heartIm = new Skin({
  width: 550, height: 550,
  texture: heart,
  fill: "white",
  aspect: "fit"
});

 let add = new Texture("images/round-add-button copy.png");
 let addIm = new Skin({
  width: 550, height: 550,
  texture: add,
  fill: "white",
  aspect: "fit"
});

 let sub = new Texture("images/round-remove-button copy.png");
 let subIm = new Skin({
  width: 550, height: 550,
  texture: sub,
  fill: "white",
  aspect: "fit"
});


let nextScreenButton = Container.template($ => ({
 	width: 100, height: 50, skin: salmonSkin, active: true,string: "Analysis",
 	contents: [

      new Label({left: 0, right: 0, top: 0,
      style: blackMedStyle, string: "Analysis"}),

 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
      		application.add(new AnalyticsTemplate());
      }
  })
 }));

let prevScreenButton = Container.template($ => ({
 	width: 100, height: 50, skin: salmonSkin, active: true,
 	contents: [

     new Label({left: 0, right: 0, top: 0,
      style: blackMedStyle, string: "Songs"}),
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
      		application.add(new LibraryTemplate());
      }
  })
 }));

let finishRunButton = Container.template($ => ({
 	width: 100, height: 50, skin: new Skin({ fill: "#c4c4c4" }), active: true,
 	contents: [
 	new Label({
 		left: 0, right: 0, top: 0, bottom: 0, style: blackMedStyle,
 		string: "Finish Run"
 	}),
 	],

 
 	behavior: Behavior({
 		onTouchEnded: function(container) {

      		application.add(new StartRunTemplate());
    }

  })
 }));

 let heartButton = Column.template($ => ({
   left: 10, width: 87, height: 87, skin: heartIm, active: true,
   contents: [
   new Label({left: 10, right: 10, top: 12,
    style: blackMedStyle, string: "Target"}),
   targetHR,
   ],
   //behavior: Behavior({
     // onTouchEnded: function(container) {
       // application.remove(currentScreen);
		//currentScreen = new playScreen();
	//	application.add(currentScreen);
      //}
   //})
}));

 let addButton = Container.template($ => ({
   left: 10, width: 50, height: 50, skin: addIm, active: true,
   contents: [
   ],
   behavior: Behavior({
    onTouchEnded: function(container) {
     THR = THR + 10;
     targetHR.string = THR;
     container.container.container.controls[1][1].delegate("onTouchEnded");
     first = 0;
     container.container.container.controls[1][1].delegate("onTouchEnded");
   }
 })
 }));

let subButton = Container.template($ => ({
   left: 10, width: 50, height: 50, skin: subIm, active: true,
   contents: [
   ],
   behavior: Behavior({
    onTouchEnded: function(container) {
     THR = THR - 10;
     targetHR.string = THR;
     container.container.container.controls[1][1].delegate("onTouchEnded");
     first = 0;
     container.container.container.controls[1][1].delegate("onTouchEnded");
   }
 })
 }));


 var curr_cat = 90;
 var count = -1;
 let playButton = Container.template($ => ({
   left: 0, right: 0, width: 30, height: 30, skin: playIm, active: true,
   contents: [
   ],
   behavior: Behavior({
    onCreate: function(container){
      if (remotePins) {
        remotePins.repeat("/heartRate/read", 100, (HR) => {
          CHR = HR * 130;
          container.container.container.container.curr_bpm_bar.string = "Current Music BPM: " + curr_cat;

          trace(curr_cat+"\n");

         
        });
      }
    },
    onTouchEnded: function(container) {
     if (container.skin ==pauseIm){
      container.skin = playIm;
      song.stop();

    } else{
      container.skin = pauseIm;
      if (count == 2){
        count = 0;
        if (THR - CHR >= 10){
          curr_cat +=10;
        } else if( CHR - THR >= 10){
          curr_cat -= 10;
        } 
      } else{
       count +=1;
     }

     index = dictionary[curr_cat.toString()].length;
			if (first == 0){ // when the application first loads up, play the first song in the correct HB category.
       first = 1;
       curr_index = 0;
       song = new Media({url: mergeURI(application.url,"songs/" + curr_cat + "/" + dictionary[curr_cat.toString()][curr_index] +".mp3"),width: 0, height: 0});
       let picture = new Picture({url: mergeURI(application.url, "songs/" +curr_cat + "/" + dictionary[curr_cat.toString()][curr_index] +".jpg"),width: 180, height: 180});
       container.container.container[0][0].empty();
       container.container.container[0][0].add(picture);

       container.container.container[0][1].string = name_artist_dict[dictionary[curr_cat.toString()][curr_index]][0];

       container.container.container[0][2].string = name_artist_dict[dictionary[curr_cat.toString()][curr_index]][1];
       song.start();

     } else{
       song.start();
     }
   }
 }
})
}));


let prevButton = Container.template($ => ({
 left: 50, width: 20, height: 20, skin: prevIm, active: true,
 contents: [
 ],
 behavior: Behavior({
  onTouchEnded: function(container) {
   song.stop();

   curr_index = curr_index -1;
   index = dictionary[curr_cat.toString()].length;
   if (curr_index < 0){
     curr_index = index -1;
   }

  if (count == 2){
        count = 0;
        if (THR - CHR >= 10){
          curr_cat +=10;
        } else if( CHR - THR >= 10){
          curr_cat -= 10;
        } 
      } else{
       count +=1;
     }
   song = new Media({url: mergeURI(application.url,"songs/" + curr_cat + "/" + dictionary[curr_cat.toString()][curr_index]+".mp3"),width: 0, height: 0});
   let picture = new Picture({url: mergeURI(application.url, "songs/" +curr_cat + "/" + dictionary[curr_cat.toString()][curr_index] +".jpg"),width: 180, height: 180});
   container.container.container[0][0].empty();

   container.container.container[0][0].add(picture);

   container.container.container[0][1].string = name_artist_dict[dictionary[curr_cat.toString()][curr_index]][0];

   container.container.container[0][2].string = name_artist_dict[dictionary[curr_cat.toString()][curr_index]][1];

   song.start();
 }
})
}));

let nextButton = Container.template($ => ({
 right: 50, width: 20, height: 20, skin: nextIm, active: true,
 contents: [
 ],
 behavior: Behavior({
  onTouchEnded: function(container) {
    song.stop();

    curr_index = curr_index +1;

	if (count == 2){
        count = 0;
        if (THR - CHR >= 10){
          curr_cat +=10;
        } else if( CHR - THR >= 10){
          curr_cat -= 10;
        } 
      } else{
       count +=1;
     }
    if (curr_index >= index){
     curr_index = 0;
   }
   song = new Media({url: mergeURI(application.url,"songs/" + curr_cat + "/" + dictionary[curr_cat.toString()][curr_index]+".mp3"),width: 0, height: 0});
   let picture = new Picture({url: mergeURI(application.url, "songs/" +curr_cat + "/" + dictionary[curr_cat.toString()][curr_index] +".jpg"),width: 180, height: 180});

   container.container.container[0][0].empty();
   container.container.container[0][0].add(picture);

   container.container.container[0][1].string = name_artist_dict[dictionary[curr_cat.toString()][curr_index]][0];

   container.container.container[0][2].string = name_artist_dict[dictionary[curr_cat.toString()][curr_index]][1];

   song.start();
 }
})
}));


/* Play screen layout */
export var PlaySongTemplate = Column.template($ => ({
  left: 0, right: 0, top: 0, bottom: 0, skin: pinkSkin,
  contents: [
  new Line({
    left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Now Playing"}),
    ]
  }),
  new Line({
    left: 45, right: 45, top: 10, height: 90, skin: pinkSkin,
    contents: [
    new subButton(),
    new heartButton(),
    new addButton(),
    ]
  }),

  new Column({
    left: 0, right: 0, skin: pinkSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5, name: "curr_bpm_bar",
     style: blackMedStyle, string: "Current Music BPM:"}),

    
    new Column({

   
      left: 10, right: 10, height: 330, top: 5, bottom: 10, skin: whiteSkin, name:"controls",
      contents: [
      new Column({
        top: 5, left: 5, right: 5, height: 270, skin: pinkSkin,
        contents: [
        new Line({
          top: 10, left: 50, width: 180, height: 180, skin: blackSkin,
          contents: [
          ]
        }),
     			 		//having trouble making these labels appear
     			 		new Label({left: 10, right: 10, top: 10,
          					style: blackHeaderStyle, string: "Song Title"}),
          				new Label({left: 10, right: 10, top: 10,
          					style: blackMedStyle, string: "Song Artist"}),
      				]
     			 }),
     			 new Line({
      				top: 5, left: 5, right: 5, height: 45, skin: pinkSkin,
      				contents: [
      					new prevButton(),
      					new playButton(),
      					new nextButton(),
      				]
     			 }),
      		]
      }),
	  new Line({
      	top: 10, height: 50, skin: pinkSkin,
      		contents: [
      	      	new prevScreenButton(),
      			new finishRunButton(),
      			new nextScreenButton(),
      		]
     }),
	  new Line ({
      		left: 0, right: 0, height: 20, top: 10, skin: centermenuDots,
      }), 
    ]
  }),
]
}));

/*let currentScreen;
currentScreen = new playScreen();
application.add(currentScreen);
*/
