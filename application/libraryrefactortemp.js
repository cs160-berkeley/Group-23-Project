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