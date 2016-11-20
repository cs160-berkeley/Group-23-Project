import { PlaySongTemplate } from "playsong"; 
import { SettingsTemplate } from "settings";
import { StartRunTemplate } from "startrun";
import { LibraryTemplate } from "library";
import { AnalyticsTemplate } from "analytics";
import Pins from "pins";
import {remotePins, currentScreen} from "main";

var titleStyle = new Style({ font: "20px", color: "white" });
var buttonStyle = new Style({ color: 'black', font: '18px Arial', horizontal: 'left' });

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
      		top: 5, left: 0, right: 0, width: 30, height: 30, skin: graphPink,
      		contents: [
      		]
    	}),
 	],
 	//behavior: Behavior({
 	//	onTouchEnded: function(container) {
      //		application.add(new AnalyticsTemplate());
      //}
  //})
 }));

let prevScreenButton = Container.template($ => ({
 	width: 100, height: 30, skin: whiteSkin, active: true,
 	contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 25, height: 25, skin: listGray,
      contents: [
      ]
    }),
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
          application.remove(currentScreen);
          currentScreen = new SettingsTemplate();
      		application.add(currentScreen);
      }
  })
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
          currentScreen = new StartRunTemplate();
          application.add(currentScreen);
    }
  })
 }));

let rightdots = new Texture("images/dot-menu-right.png");
let rightmenuDots = new Skin({
      width: 150, height: 50,
      texture: rightdots,
      fill: "white",
      aspect: "fit"
});

// let buttonStyle = new Style({font: '30px', color: 'black'}); 

let TOP_BAR = new Line({
    left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Historical Analytics"}),
    ]
  }),

let DOTS = new Line({
      	top: 25, height: 30, skin: whiteSkin,
      		contents: [
      	    new prevScreenButton(),
      			new finishRunButton(),
      			new nextScreenButton(),
      		]
     }),   
      
let list_of_songs = new Column({ 
    top: 0, left: 0, right: 0, 
    skin: whiteSkin,
    contents: [
        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Top HR Boosting Songs'
    	}),
    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Closer'
    	}),
    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Dream On'
    	}),
    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Gagnam Style'
    	}),
    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Fly'
    	}),
    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Baby'
    	}),
    	    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'One Time Comin'
    	}),
    	    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'No Vasaline'
    	}),
    	    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'Lose Yourself'
    	}),
    	    	        new Label({
	      left: 0, right:0, top: 0,
	      style: buttonStyle,
	      string: 'All Eyez On Me'
    	})
    	
    ]
});
var CONTENT = Column.template($ => ({
	 	left: 0, right: 0, top: 0, skin: whiteSkin,
	contents: [
		list_of_songs
	]
}));




//let cont = new Scroller({contentToScrollVertically: CONTENT});

export var HistoricalAnalyticsTemplate = Column.template($ => ({
	 	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
	contents: [
		TOP_BAR,
		new CONTENT(),
		DOTS
	]
}));