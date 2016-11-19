import { PlaySongTemplate } from "playsong";
import { SettingsTemplate } from "settings";
import { StartRunTemplate } from "startrun";
import { LibraryTemplate } from "library";

var titleStyle = new Style({ font: "20px", color: "white" });
var buttonStyle = new Style({ color: 'black', font: '18px Arial', horizontal: 'left' });

var whiteSkin = new Skin ({fill: 'white'});
var graySkin = new Skin ({fill: 'gray'});
let darkGraySkin = new Skin({ fill: "#202020" });
var whiteMedStyle = new Style({ font: "20px", color: "white" });

let rightdots = new Texture("images/dot-menu-right.png");
let rightmenuDots = new Skin({
      width: 150, height: 50,
      texture: rightdots,
      fill: "white",
      aspect: "fit"
});

// let buttonStyle = new Style({font: '30px', color: 'black'}); 

let TOP_BAR = new Line({
          left: 0, right: 0, height: 30, skin: graySkin,
          contents: [
          	new Label({left: 10, right: 10, top: 5,
          		style: whiteMedStyle, string: "Historical Analytics"})
          ]
      });

let DOTS = new Line ({
      		width: 640, height: 20, top: 10, skin: rightmenuDots
      });
      
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