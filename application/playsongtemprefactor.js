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

let add = new Texture("images/plus-icon.png");
let addIm = new Skin({
  width: 80, height: 80,
  texture: add,
  fill: "white",
  aspect: "fit"
});

let sub = new Texture("images/minus-icon.png");
let subIm = new Skin({
  width: 80, height: 80,
  texture: sub,
  fill: "white",
  aspect: "fit"
});

let heartButton = Column.template($ => ({
 left: 48, width: 70, height: 70, skin: heartIm, active: true,
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
 left: 47, width: 30, height: 30, skin: addIm, active: true,
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
 left: 47, width: 30, height: 30, skin: subIm, active: true,
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

 let finishButton = Container.template($ => ({
    width: 200, height: 50, skin: startBtnImSR, active: true,
    contents: [
    new Label({
        left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
        string: "Finish Run"
    }),
    ],
    behavior: Behavior({
        onTouchBegan: function(container) {
            container.skin = startBtnImPushSR;
        },
        onTouchEnded: function(container) {
            container.skin = startBtnImSR;
            application.remove(currentScreen);

            currentScreen = analyticsTempVar;
            application.remove(navBar2);
            application.add(currentScreen);
            application.add(navBar);
        }
    })
}));


 /* Play screen layout */
 var PlaySongTemplate = Column.template($ => ({
  left: 0, right: 0, top: 0, bottom: 55, skin: pinkSkin,
  contents: [
  HEADER({string: "Now Playing"}),
  new Line({
    left: 0, right: 0, top: 10, height: 70, skin: pinkSkin,
    contents: [
    new subButton(),
    new heartButton(),
    new addButton(),
    ]
}),

  new Column({
    left: 0, right: 0, skin: pinkSkin,
    contents: [
    new Label({left: 10, right: 10, top: 0, name: "curr_bpm_bar",
       style: blackMedStyle, string: "Current Music BPM:"}),

    new Column({
      left: 10, right: 10, height: 320, top: 0, bottom: 0, skin: whiteSkin, name:"controls",
      contents: [
      new Column({
        top: 0, left: 5, right: 5, height: 270, skin: pinkSkin,
        contents: [
        new Line({
            top: 10, left: 50, width: 180, height: 180, skin: blackSkin,
            contents: [
            ]
        }),
                        //having trouble making these labels appear
                        new Label({left: 10, right: 10, top: 0,
                            style: blackHeaderStyle, string: "Song Title"}),
                        new Label({left: 10, right: 10, top: 0,
                            style: blackMedStyle, string: "Song Artist"}),
                        ]
                    }),
      new Line({
        top: 0, left: 5, right: 5, height: 45, skin: pinkSkin,
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
 new finishButton()
 ]
}));
