 import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';

import { PlaySongTemplate } from "playsong";
import { SettingsTemplate } from "settings";
import { StartRunTemplate } from "startrun";
import { LibraryTemplate } from "library";
import {remotePins, currentScreen} from "main";


/* ASSETS */
let lineSkin = new Skin({ 
	fill: [ 'white', 'yellow' ],
    borders: { left: 0, right: 0, top: 0, bottom: 1 }, 
    stroke: 'silver'	
});
var blueSkin = new Skin({fill: 'blue' });
var whiteSkin = new Skin({fill: '#FAFAFA' });

/* STYLES */
var productDescriptionStyle = new Style({  font: '18px', horizontal: 'left', vertical: 'middle', left: 1, color: 'white' });
var productNameStyle = new Style({  font: 'bold 22px', horizontal: 'left', vertical: 'middle', lines: 1, color: 'black' });
let whiteMedStyle = new Style({ font: "20px Helvetica Neue", color: "white" });
let blackMedStyle = new Style({ font: "20px Helvetica Neue", color: "black" });
let salmonSkin = new Skin({fill: '#FE1B53'});

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
 
 //HEADER CODE FOR ALL SCREENS
 let HEADER = new Line({
    top: 0, left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Current Analytics"}),
    ]
  });
//FOOTER CODE FOR ALL SCREENS
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

// let prevScreenButton = Container.template($ => ({
// 	width: 100, height: 30, skin: whiteSkin, active: true,
// 	contents: [
// 		new Line({ 
// 				top: 5, left: 0, right: 0, width: 25, height: 25, skin: listGray,
//   				contents: []}),
// 	],
// 	behavior: Behavior({
// 		onTouchEnded: function(container) {
// 		    application.remove(currentScreen);
// 		   //  currentScreen = new LibraryTemplate();
// 		  	// application.add(currentScreen);
//   		}
// 	})
// }));

// let nextScreenButton = Container.template($ => ({
// 	width: 100, height: 30, skin: whiteSkin, active: true,
// 	contents: [
// 		new Line({
// 	  		top: 5, left: 0, right: 0, width: 30, height: 30, skin: graphPink,
// 	  		contents: []}),
// 	],
// 	//behavior: Behavior({
// 	//	onTouchEnded: function(container) {
//   //		application.add(new AnalyticsTemplate());
//   //}
// //})
// }));

// let finishRunButton = Container.template($ => ({
// 	width: 100, height: 30, skin: whiteSkin, active: true,
// 	contents: [
// 		new Line({
// 		  top: 5, left: 0, right: 0, width: 25, height: 25, skin: runningGray,
// 		  contents: []}),
// 	],
// 	behavior: Behavior({
// 		onTouchEnded: function(container) {
// 	  		application.remove(currentScreen);
// 			// currentScreen = new PlaySongTemplate();
// 			// application.add(currentScreen);
// 		}
// 	})
// }));

let nextScreenButton = Container.template($ => ({
 	width: 100, height: 30, skin: whiteSkin, active: true,
 	contents: [
    new Line({
      top: 0, left:15, right: 0, width: 30, height: 30, skin: graphPink,
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
      top: 0, left: 15, right: 0, width: 25, height: 25, skin: listGray,
      contents: [
      ]
    }),
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
          application.remove(currentScreen);
          currentScreen = new LibraryTemplate();
      		application.add(currentScreen);
      }
  })
 }));

let finishRunButton = Container.template($ => ({
 	width: 100, height: 30, skin: whiteSkin, active: true,
 	contents: [
    new Line({
      top: 0, left: 15, right: 0, width: 30, height: 30, skin: runningGray,
      contents: [
      ]
    }),
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
          application.remove(currentScreen);
          currentScreen = new StartRunTemplate()
      		application.add(currentScreen);
    }
  })
 }));

let FOOTER = new Line({
      	left:0, right: 0, bottom:0, height: 50, skin: whiteSkin,
      		contents: [
      	    	new prevScreenButton(),
      			new finishRunButton(),
      			new nextScreenButton(),
      		]
});


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
export var AnalyticsTemplate = Container.template($ => ({
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
		FOOTER
	]
}));

/* When the application is launched, add an instance of ScreenContainer
 * to the application to display a scrolling menu of items */
// class AppBehavior extends Behavior {
// 	onLaunch(application) {
// 		application.add(new ScreenContainer());
// 	}
// }
// application.behavior = new AppBehavior();