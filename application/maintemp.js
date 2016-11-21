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
 

/******************************************************************************************************************
                                            Imports
*******************************************************************************************************************/

 import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';


 /*import {
    SystemKeyboard
 } from 'assets/keyboard';*/

/******************************************************************************************************************
                                        Shared Variables
*******************************************************************************************************************/

 var index;
 var curr_index = 0;
 var first = 0;
 var song = 0;


let blackHeaderStyle = new Style({ font: "30px Helvetica Neue bold", color: "black" }); //TODO: moved this out of Styles; resolve later

 // two target heart rates???????????
 var THR = 85;
 //var targetHRInt = 80;
 var CHR = 60;
 let targetHR = new Label({left: 0, right: 5, top: 0,
  style: blackHeaderStyle, string: THR});


/* ASSETS */
let lineSkin = new Skin({ 
    fill: [ 'white', 'yellow' ],
    borders: { left: 0, right: 0, top: 0, bottom: 1 }, 
    stroke: 'silver'    
});

 let blueSkin = new Skin ({fill: 'blue'});
 let whiteSkin = new Skin ({fill: 'white'});
 let graySkin = new Skin ({fill: 'gray'});
 let blackSkin = new Skin ({fill: 'black'});
 let pinkSkin = new Skin({fill: 'white'});
 let salmonSkin = new Skin({fill: '#FE1B53'});

/* STYLES */
var productDescriptionStyle = new Style({  font: '18px', horizontal: 'left', vertical: 'middle', left: 1, color: 'white' });
var productNameStyle = new Style({  font: 'bold 22px', horizontal: 'left', vertical: 'middle', lines: 1, color: 'black' });

 let whiteHeaderStyle = new Style({ font: "30px Helvetica Neue", color: "white" });
 let whiteMedStyle = new Style({ font: "20px Helvetica Neue", color: "white" });
 let whiteSmallStyle = new Style({ font: "10px Helvetica Neue", color: "white" });
 
 
 let targetHRSR = new Label({left: 0, right: 5, top: 0,
    style: whiteHeaderStyle, string: THR});
    
 
 let blackMedStyle = new Style({ font: "20px Helvetica Neue", color: "black" });
 let blackSmallStyle = new Style({ font: "10px Helvetica Neue", color: "black" });

 var labelStyle = new Style( { font: "20px Lato", color:"black" } );

/* STATIC */
/* A simple array of objects. Each will be used as an
 * entry in our scrollable list. */
var menuItems = [
    {title: 'Closer', button: '80 bpm'},
    {title: 'Dream On', button: '60 bpm'},
    {title: 'Gagnam Style', button: '120 bpm'},
    {title: 'Fly', button: '60 bpm'},
    {title: 'Baby', button: '90 bpm'},
    {title: 'One Time Comin', button: '200 bpm'},
    {title: 'No Vasaline', button: '150 bpm'},
    {title: 'Lose Yourself', button: '120 bpm'},
    {title: 'All Eyez On Me', button: '22 bpm'},
    {title: 'Heartless', button: '90 bpm'},
    {title: 'Baby', button: '90 bpm'},
    {title: 'One Time Comin', button: '200 bpm'},
    {title: 'No Vasaline', button: '150 bpm'},
    {title: 'Lose Yourself', button: '120 bpm'},
    {title: 'All Eyez On Me', button: '22 bpm'},
    {title: 'Heartless', button: '90 bpm'}
];


//SONG ARRAYS

var songArrays = {};
songArrays.songs60bpm = ["Here", "Love Gun", "Grapevine Fires", "If No One Will Listen", "My Love", "Beautiful War", "Culo", "No Good Deed", "Cold Desert"];
//songArrays.artists60bpm = ["Alessia Cara", "Cee Lo Green", "Death Cab for Cutie", "Kelly Clarkson", "Sia"];
songArrays.songs80bpm = ["21 Guns", "Hey Ho", "See You Again", "Complicated", "You Shook Me All Night Long", "Come And Get It", "We Cant Stop", "Rehab", "Halo"];


//HEADER CODE FOR ALL SCREENS
 let HEADER = Container.template($ => ({
    top: 0, left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "$"}),
    ]
  }));
//FOOTER CODE FOR ALL SCREENS

 let listp = new Texture("images/list-icon-push.png");
 let listPink = new Skin({
  width: 250, height: 250,
  texture: listp,
  fill: "white",
  aspect: "fit"
});

 let listg = new Texture("images/list-icon.png");
 let listGray = new Skin({
  width: 250, height: 250,
  texture: listg,
  fill: "white",
  aspect: "fit"
});

let graphp = new Texture("images/graph-icon-push.png");
 let graphPink = new Skin({
  width: 250, height: 250,
  texture: graphp,
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

let runningp = new Texture("images/running-icon-push.png");
let runningPink = new Skin({
  width: 250, height: 250,
  texture: runningp,
  fill: "white",
  aspect: "fit"
});


let nextScreenButton = Container.template($ => ({
    width: 100, height: 30, skin: whiteSkin, active: true,
    contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 30, height: 30, skin: $,
      contents: [
      ]
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
            application.remove(currentScreen);
            currentScreen = $;
            application.add(currentScreen);
      }
  })
 }));

let prevScreenButton = Container.template($ => ({
    width: 100, height: 30, skin: whiteSkin, active: true,
    contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 25, height: 25, skin: $,
      contents: [
      ]
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
            application.remove(currentScreen);
            currentScreen = $;
            application.add(currentScreen);
    }
  })
 }));

let finishRunButton = Container.template($ => ({
    width: 100, height: 30, skin: whiteSkin, active: true,
    contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 30, height: 30, skin: $,
      contents: [
      ]
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
            application.remove(currentScreen);
            currentScreen = $;
            application.add(currentScreen);
    }
  })
 }));

 /******************************************************************************************************************
                                    Play Screen
*******************************************************************************************************************/

 
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
    //  application.add(currentScreen);
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
  HEADER("Now Playing"),
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
        bottom: 0, top: 25, height: 30, skin: lightGraySkin,
            contents: [
                new prevScreenButton(listGray, new LibraryTemplate()),
                new finishRunButton(runningPink, new StartRunTemplate()),
                new nextScreenButton(graphGray, new AnalyticsTemplate()),
            ]
     }),
    ]
  }),
]
}));
 /******************************************************************************************************************
                                    Library
*******************************************************************************************************************/

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
            song = new Media({url: mergeURI(application.url, "songs/"+THR+"/"+songStr+".mp3")});
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
            song = new Media({url: mergeURI(application.url, "songs/"+THR+"/"+songStr+".mp3")});
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
getCurrHRArrays(THR, currScreen);
// application.add(currentScreen);

var LibraryTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    skin: new Skin({fill: "white"}),
    contents: [
        HEADER("Library"),
        currScreen,
        new Line({
        top: 25, height: 30, skin: whiteSkin,
            contents: [
                new prevScreenButton(listPink, new LibraryTemplate()),
                new finishRunButton(runningGray, new PlaySongTemplate()),
                new nextScreenButton(graphGray, new AnalyticsTemplate()),
            ]
     }),
    ]
 }));

 /******************************************************************************************************************
                                    Settings
*******************************************************************************************************************/


 let emailButton = Container.template($ => ({
    width: 200, height: 50, top: 10, skin: new Skin({ fill: "#c4c4c4" }), active: true,
    contents: [
    new Label({
        left: 0, right: 0, top: 0, bottom: 0, style: whiteMedStyle,
        string: "Email"
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
        //go to running screen
      }
  })
 }));

 let passwordButton = Container.template($ => ({
    width: 200, height: 50, top: 15, skin: new Skin({ fill: "#c4c4c4" }), active: true,
    contents: [
    new Label({
        left: 0, right: 0, top: 0, bottom: 0, style: whiteMedStyle,
        string: "Password"
    }),
    ],
    behavior: Behavior({
        onTouchEnded: function(container) {
        //go to running screen
      }
  })
 }));
 
 var SettingsTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    skin: new Skin({fill: "white"}),
    contents: [
    new Column({
        top: 0, left: 0, bottom: 0, right: 0,
        skin: whiteSkin,
        contents: [
        HEADER("Settings"),
        new Label({
            top: 100, left: 0, right: 0, height: 30,
            style: new Style({ font: "30px", color: "black" }),
            string: "Spotify Account"

        }),
        new Column({
            top: 0, left: 0, right: 0, height: 80,
            skin: whiteSkin,
            contents: [
            new emailButton(),
            new passwordButton()

            ]
        }),
        new Line({
        top: 25, height: 30, skin: whiteSkin,
            contents: [
                //new prevScreenButton(listPink, new SettingsTemplate),
                new finishRunButton(runningGray, new StartRunTemplate()),
                new nextScreenButton(graphGray, new HistoricalAnalyticsTemplate()),
            ]
        }),
        ]
    })

    
    ]
 }));


 /******************************************************************************************************************
                                   Start Run
*******************************************************************************************************************/
 let addSR = new Texture("images/plus-icon.png");
 let addImSR = new Skin({
    width: 80, height: 80,
    texture: addSR,
    fill: "white",
    aspect: "fit"
 });

 let subSR = new Texture("images/minus-icon.png");
 let subImSR = new Skin({
    width: 80, height: 80,
    texture: subSR,
    fill: "white",
    aspect: "fit"
 });

 let addPushSR = new Texture("images/plus-icon-depressed.png");
 let addPushImSR = new Skin({
    width: 80, height: 80,
    texture: addPushSR,
    fill: "white",
    aspect: "fit"
 });

 let subPushSR = new Texture("images/minus-icon-depressed.png");
 let subPushImSR = new Skin({
    width: 80, height: 80,
    texture: subPushSR,
    fill: "white",
    aspect: "fit"
 });

 let heartSR = new Texture("images/favorite-heart-button copy.png");
 let heartImSR = new Skin({
    width: 550, height: 550,
    texture: heartSR,
    fill: "white",
    aspect: "fit"
 });

 let startBtnSR = new Texture("images/start-run-button.png");
 let startBtnImSR = new Skin({
    width: 497, height: 137,
    texture: startBtnSR,
    fill: "white",
    aspect: "fit"
 });

 let startBtnPushSR = new Texture("images/start-run-button-depressed.png");
 let startBtnImPushSR = new Skin({
    width: 497, height: 137,
    texture: startBtnPushSR,
    fill: "white",
    aspect: "fit"
 });

 let addButtonSR = Container.template($ => ({
    left: 5, width: 40, height: 40, skin: addImSR, active: true,
    contents: [
    ],
    behavior: Behavior({
         onTouchBegan: function(container) {
            container.skin = addPushImSR;
        },
        onTouchEnded: function(container) {
            THR = THR + 5;
            targetHRSR.string = THR;
            container.skin = addImSR;
        }
    })
 }));



 let subButtonSR = Container.template($ => ({
    left: 15, width: 40, height: 40, skin: subImSR, active: true,
    contents: [
    ],
    behavior: Behavior({
         onTouchBegan: function(container) {
            container.skin = subPushImSR;
        },
        onTouchEnded: function(container) {
            THR = THR - 5;
            targetHRSR.string = THR;
            container.skin = subImSR;
        }
    })
 }));

    
 let heartButtonSR = Column.template($ => ({
    left: 10, width: 200, height: 200, skin: heartImSR, active: true,
    contents: [
    new Label({left: 3, right: 10, top: 65,
        style: whiteMedStyle, string: "Target HR"}),
    targetHRSR,
    ]
 }));


 let startButtonSR = Container.template($ => ({
    width: 200, height: 50, skin: startBtnImSR, active: true,
    contents: [
    new Label({
        left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
        string: "Start Run"
    }),
    ],
    behavior: Behavior({
        onTouchBegan: function(container) {
            container.skin = startBtnImPushSR;
        },
        onTouchEnded: function(container) {
            container.skin = startBtnImSR;
            application.add(new PlaySongTemplate());
        }
  })
 }));

var StartRunTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    skin: new Skin({fill: "white"}),
    contents: [
    new Column({
        top: 0, left: 0, bottom: 0, right: 0,
        skin: whiteSkin,
        contents: [
        HEADER("Set Target Heart Rate"),
        new Line({
            left: 0, right: 0, top: 150, height: 90, skin: whiteSkin,
            contents: [
            new subButtonSR(),
            new heartButtonSR(),
            new addButtonSR(),
            ]
        }),
        new Line({
            left: 60, right: 60, top: 150, height: 30, skin: whiteSkin,
            contents: [
            new startButtonSR()
            ]
        }),
        new Line({
        top: 25, height: 30, skin: whiteSkin,
            contents: [
                //new prevScreenButton(listGray, new SettingsTemplate()),
              //  new finishRunButton(runningPink, new StartRunTemplate()),
                //new nextScreenButton(graphGray, new HistoricalAnalyticsTemplate()),
            ]
        }),
        ]
    })

    
    ]
 }));
 /******************************************************************************************************************
                                    Analytics
*******************************************************************************************************************/


/* Changing the state in the touch events gives the user
 * visual feedback on which entry they have tapped by changing
 * the background color of the line. Note that the skin turns 
 * yellow when the state is 1 (while it's being tapped)
 * and reverts back to white when the state is 0. */
class ProcessorLineBehavior extends Behavior {
    /* data is an object from the menuItems array */
    onCreate(line, data) {
        this.data = data;
    }    
    onTouchBegan(line, id, x,  y, ticks) {
        line.state = 1;
    }
    onTouchCancelled(line, id, x,  y, ticks) {
        line.state = 0;
    }
    /* Traces out the value of the first Label's string, which we 
     * get by referencing this.data.title */
    onTouchEnded(line, id, x,  y, ticks) {  
        line.state = 0;
        trace(this.data.title+"\n");
    }
}

/* The 'button' property of each item in the menuItems array
 * is used as the string of a label. Each of those labels 
 * is assigned an instance of the following behavior. */
class ProductDescriptionButtonBehavior extends Behavior {
    /* When this label is touched, simply trace out its string. */
    onTouchEnded(label, id, x,  y, ticks) { 
        trace(label.string+"\n");
    }
}

/* This is a template that will be used to for each entry populating the list. 
 * Note that it is anticipating an object each time it is instantiated; the
 * object it gets is an item from the menuItems array. */
var ProcessorLine = Line.template($ =>  ({
    left: 0, right: 0, height: 52, active: true, skin: lineSkin, 
    behavior: new ProcessorLineBehavior($),
    contents: [
        /* This label expects that the object passed to ProcessorLine 
         * includes a value for title.  Note that this Label is not marked
         * as active. Touches registered here will bubble back up through
         * the parent objects until it hits one which is active. */
        Label($, { left: 14, right: 0, style: productNameStyle, string: $.title,}),
                        
        /* This label is expecting a value for button.  Note that this Label
         * is marked active. Touches registered here will be handled by its
         * own behavior */
        Label($, { 
            right: 14, style: productDescriptionStyle, skin: salmonSkin, 
            active: true, string: $.button, behavior: new ProductDescriptionButtonBehavior()
        })                          
     ]
 }));
 
let scroll_header = new Line({
top: 30, left: 0, right: 0, height: 50, skin: whiteSkin,
contents: [
new Label({left: 10, right: 10,
  style: blackMedStyle, string: "Most HR Boosting Songs"}),
]
});


/* This is a template for a container which takes up the
 * whole screen.  It contains only a single object,
 * a VerticalScroller. */
var AnalyticsTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 0,
    contents: [
        
        VerticalScroller($, {
            top: 30 , bottom: 30,
            name: 'scroller',
            contents: [
                Column($, { 
                    left: 0, right: 0, top: 0, name: 'menu',
                    /* Add a ProcessorLine object for each item in the menuItems array */
                    contents: menuItems.map(element => new ProcessorLine(element))
                })                      
            ]
        }),
        HEADER("Analytics"),
        scroll_header,
        new Line({
        top: 25, height: 30, skin: whiteSkin,
            contents: [
                new prevScreenButton(listGray, new LibraryTemplate()),
                new finishRunButton(runningGray, new PlaySongTemplate()),
                //new nextScreenButton(graphPink, new AnalyticsTemplate()),
            ]
        }),
    ]
}));

 /******************************************************************************************************************
                                    Analytics Historical
*******************************************************************************************************************/

/* This is a template for a container which takes up the
 * whole screen.  It contains only a single object,
 * a VerticalScroller. */
var HistoricalAnalyticsTemplate = Container.template($ => ({
  left: 0, right: 0, top: 0, bottom: 0,
  contents: [
    
    VerticalScroller($, {
      top: 30 , bottom: 30,
      name: 'scroller',
      contents: [
        Column($, { 
          left: 0, right: 0, top: 0, name: 'menu',
          /* Add a ProcessorLine object for each item in the menuItems array */
          contents: menuItems.map(element => new ProcessorLine(element))
        })                  
      ]
    }),
    HEADER,
    scroll_header,
    new Line({
        top: 25, height: 30, skin: whiteSkin,
            contents: [
                new prevScreenButton(listGray, new SettingsTemplate()),
                new finishRunButton(runningGray, new StartRunTemplate()),
                new nextScreenButton(graphPink, new HistoricalAnalyticsTemplate()),
            ]
        }),
  ]
}));

 /******************************************************************************************************************
                                    Main Screen
*******************************************************************************************************************/

import Pins from "pins";
export var remotePins;
class AppBehavior extends Behavior {
    onLaunch(application) {
        let discoveryInstance = Pins.discover(
            connectionDesc => {
                if (connectionDesc.name == "pins-share-led") {
                    trace("Connecting to remote pins\n");
                    remotePins = Pins.connect(connectionDesc);
                }
            }, 
            connectionDesc => {
                if (connectionDesc.name == "pins-share-led") {
                    trace("Disconnected from remote pins\n");
                    remotePins = undefined;
                }
            }
        );
    }

} 


export var currentScreen;
application.behavior = new AppBehavior();

currentScreen = new StartRunTemplate();
                     
application.add(currentScreen);
