 import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';

import Pins from "pins";
export var remotePins;

var index;
var curr_index = 0;
var first = 0;
var song = 0;

var productDescriptionStyle = new Style({  font: '18px', horizontal: 'left', vertical: 'middle', left: 1, color: 'white' });
var productNameStyle = new Style({  font: 'bold 22px', horizontal: 'left', vertical: 'middle', lines: 1, color: 'black' });

let whiteHeaderStyle = new Style({ font: "30px Helvetica Neue", color: "white" });
let whiteMedStyle = new Style({ font: "20px Helvetica Neue", color: "white" });
let whiteSmallStyle = new Style({ font: "10px Helvetica Neue", color: "white" });
let blackHeaderStyle = new Style({ font: "30px Helvetica Neue bold", color: "black" }); //TODO: moved this out of Styles; resolve later

let THR = 80;

let targetHRSR = new Label({left: 0, right: 5, top: 0,
    style: whiteHeaderStyle, string: THR});

 // let targetHRSR = Label.template($ => ({left: 0, right: 5, top: 0,
 //   style: whiteHeaderStyle, string: THR}));


 let blackMedStyle = new Style({ font: "20px Helvetica Neue", color: "black" });
 let blackSmallStyle = new Style({ font: "10px Helvetica Neue", color: "black" });

 var labelStyle = new Style( { font: "20px Lato", color:"black" } );

// FOOTER BUTTONS
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


//HEADER CODE FOR ALL SCREENS
let HEADER = Container.template($ => ({
    top: 0, left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "$"}),
    ]
}));



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
        // heartButtonSR.prototype.empty(0);
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
        style: whiteMedStyle, string: "Target HR "}),
    targetHRSR    ]
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
            application.remove(currentScreen);
            // currentScreen = new PlaySongTemplate();
            currentScreen = nowPlayingTemp;
            application.remove(navBar);
            application.add(currentScreen);
            application.add(navBar2);
        }
    })
}));

var heartBtn = new heartButtonSR();

var StartRunTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0,  bottom: 55,
    skin: new Skin({fill: "white"}),
    contents: [
    new Column({
        top: 0, left: 0, bottom: 0, right: 0,
        skin: whiteSkin,
        contents: [
        new HEADER("Set Target Heart Rate"),
        new Line({
            left: 0, right: 0, top: 150, height: 90, skin: whiteSkin,
            contents: [
            new subButtonSR(),
            heartBtn,
            new addButtonSR()
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
//

var Screen1Template = Column.template($ => ({
    top: 0, bottom: 55, left: 0, right: 0, 
    skin: new Skin({fill: "#202020"}),
    contents: [
    new Label({ top: 20, height: 35, left: 0, right: 0, 
        style: new Style({ font: "30px", color: "white" }), 
        string: "Screen" }),
    new Label({ top: 0, height: 100, left: 0, right: 0, 
        style: new Style({ font: "bold 90px", color: "#3AFF3E" }), 
        string: "1" }),

    ]
}));

var Screen2Template = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 55,
    skin: new Skin({fill: "#202020"}),
    contents: [
    Label($, {  
        left: 0, right: 0, top: 20, height: 35, 
        style: new Style({ font: "30px", color: "white" }), 
        string: "Screen" 
    }),
    Label($, { 
        left: 0, right: 0, top: 0, height: 100, 
        style: new Style({ font: "bold 90px", color: "#3AFF3E" }), 
        string: "2" 
    }),

    ]
}));

var Screen3Template = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 55,
    skin: new Skin({fill: "#202020"}),
    contents: [
    Label($, {  
        left: 0, right: 0, top: 20, height: 35, 
        style: new Style({ font: "30px", color: "white" }), 
        string: "Screen" 
    }),
    Label($, { 
        left: 0, right: 0, top: 0, height: 100, 
        style: new Style({ font: "bold 90px", color: "#3AFF3E" }), 
        string: "3" 
    }),
    ]
}));



var navButton = Container.template($ => ({
    active: true,
    fill: "transparent", 
    width: 20, height: 20,
    skin: $.btnSkin,
    behavior: Behavior({
        onTouchBegan: function(container) {
            container.skin = $.pushSkin;
        },
        onTouchEnded: function(container){
            container.skin = $.btnSkin;
            application.remove(currentScreen);  // Remove the old screen from the application
            currentScreen = $.nextScreen;  // Make the new screen
            application.add(currentScreen);  // Add the new screen to the application
        }
    })
}));


//******************************************************************************************************************
//                                Library
//******************************************************************************************************************
var songArrays = {};
songArrays.songs80bpm = ["21 Guns", "Hey Ho", "See You Again"];
songArrays.songs90bpm = ["Gold Digger", "Diamonds", "We Are Young"];
var initial_song = "";

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
            trace("hi\n");
            first = 1;
            initial_song = $;
            application.remove(currentScreen);
            currentScreen = nowPlayingTemp;
            application.add(nowPlayingTemp);

                                                // var songStr = $.replace(/\s/g, "-").toLowerCase();
                                                // if(song!=0) song.stop();
                                                // song = new Media({url: mergeURI(application.url, "songs/"+THR+"/"+songStr+".mp3")});
                                                // song.start();
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
            trace("hi\n");
            initial_song = $;
            application.remove(currentScreen);
            currentScreen = nowPlayingTemp;
            application.add(nowPlayingTemp);
            // var songStr = $.replace(/\s/g, "-").toLowerCase();
            // if(song!=0) song.stop();
            // song = new Media({url: mergeURI(application.url, "songs/"+THR+"/"+songStr+".mp3")});
            // song.start();
        }
    }
}));


 function getCurrHRArrays(hr, screen){
  trace("getCurrHRArrays\n");
  var songArrName = "songs"+hr+"bpm";
  var artistArrName = "artists"+hr+"bpm";
  var songArr = songArrays[songArrName];
  var artistArr = songArrays[artistArrName];
  for(var i in songArr){
    trace(songArr[i] + "\n");
    screen.add(new SongNameWhite(songArr[i]));
}
    /*for(var i in artistArr){
        trace(artistArr[i]+"\n");
    }*/
    var content = new Content({ width: 640, height:400, skin: blackSkin });
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
    left: 0, right: 0, top: 0, bottom: 55,
    skin: new Skin({fill: "white"}),
    contents: [
    HEADER("Library"),
    currScreen
    ]
}));

//******************************************************************************************************************
//                                    Play Screen
//*******************************************************************************************************************


var dictionary = {};
dictionary['80'] = ["21 Guns" , "Hey Ho","See You Again"];
dictionary['90'] = ["Gold Digger" , "Diamonds","We Are Young"];
dictionary['100'] = ["Riptide" , "Man in the Mirror","Turn Down For What"];

var name_artist_dict = {};
name_artist_dict["21 Guns"] = ["21 Guns", "Green Day"];
name_artist_dict["Hey Ho"] = ["Hey Ho", "The Lumineers"];
name_artist_dict["See You Again"] = ["See You Again", "Wiz Khalifa ft. Charlie Puth"];
name_artist_dict["Gold Digger"] = ["Gold Digger", "Kanye West"];
name_artist_dict["Diamonds"] = ["Diamonds", "Rihanna"];
name_artist_dict["We Are Young"] = ["We Are Young", "Fun ft. Janelle Monáe"];
name_artist_dict["Riptide"] = ["Riptide", "Vance Joy"];
name_artist_dict["Man in the Mirror"] = ["Man in the Mirror", "Green Day"];
name_artist_dict["Turn Down For What"] = ["Turn Down For What", "DJ Snake, Lil Jon"];


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
 THR,
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

         } else if(initial_song.length > 0){
            trace("it worked\n");
            song = new Media({url: mergeURI(application.url,"songs/" + curr_cat + "/" + initial_song +".mp3"),width: 0, height: 0});
            let picture = new Picture({url: mergeURI(application.url, "songs/" +curr_cat + "/" + initial_song +".jpg"),width: 180, height: 180});
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
  left: 0, right: 0, top: 0, bottom: 55, skin: pinkSkin,
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
      left: 10, right: 10, height: 350, top: 5, bottom: 10, skin: whiteSkin, name:"controls",
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
  })
    ]
}),
 ]
}));



//******************************************************************************************************************
//                                   Analytics
//******************************************************************************************************************
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
    left: 0, right: 0, top: 0, bottom: 55,
    contents: [
    HEADER("Analytics"),
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
    scroll_header,
    ]
}));

//******************************************************************************************************************
//                                    Analytics Historical
//******************************************************************************************************************

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
    // new Line({
    //     top: 25, height: 30, skin: whiteSkin,
    //         contents: [
    //             // new prevScreenButton(listGray, new SettingsTemplate()),
    //             // new finishRunButton(runningGray, new StartRunTemplate()),
    //             // new nextScreenButton(graphPink, new HistoricalAnalyticsTemplate()),
    //         ]
    //     }),
 ]
}));

//******************************************************************************************************************
//                                    Settings
//******************************************************************************************************************


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
    left: 0, right: 0, top: 0, bottom: 55,
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

            ]
        }),
        ]
    })


    ]
}));


// let histAnalyticsTemp = new AnalyticsTemplate(); //TODO: resolve historical analytics template
let startRunTemplateVar = new StartRunTemplate();
let settingsTempVar = new SettingsTemplate();
let analyticsTempVar = new AnalyticsTemplate();
let libraryTempVar = new LibraryTemplate();
let nowPlayingTemp = new PlaySongTemplate();

let screen2Var = new Screen2Template();


var currentScreen = startRunTemplateVar;
application.add(currentScreen);

var navBar = new Line({ bottom: 0, height: 55, left: 0, right: 0,
    skin: new Skin({ fill: "white" }),
    contents: [
    new navButton({btnSkin: listGray, pushSkin: listPink, nextScreen: libraryTempVar}),
    new navButton({btnSkin: runningGray, pushSkin: runningPink, nextScreen: startRunTemplateVar}),
    new navButton({btnSkin: graphGray, pushSkin: graphPink, nextScreen: analyticsTempVar})
    ]
});

var navBar2 = new Line({ bottom: 0, height: 55, left: 0, right: 0,
    skin: new Skin({ fill: "white" }),
    contents: [
    new navButton({btnSkin: listGray, pushSkin: listPink, nextScreen: libraryTempVar}),
    new navButton({btnSkin: runningGray, pushSkin: runningPink, nextScreen: nowPlayingTemp}),
    new navButton({btnSkin: graphGray, pushSkin: graphPink, nextScreen: analyticsTempVar})
    ]
});
 application.add(navBar);