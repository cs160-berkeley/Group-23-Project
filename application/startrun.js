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
 
 
 
 
import { HistoricalAnalyticsTemplate } from "analytics_historical";
import { PlaySongTemplate } from "playsong"; 
import { SettingsTemplate } from "settings";
import { LibraryTemplate } from "library";
import { AnalyticsTemplate } from "analytics";
import Pins from "pins";
import {remotePins, currentScreen} from "main";
	//import { currentScreen } from "main";

 
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

let graphg = new Texture("images/graph-icon.png");
 let graphGray = new Skin({
  width: 250, height: 250,
  texture: graphg,
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

 let addPush = new Texture("images/plus-icon-depressed.png");
 let addPushIm = new Skin({
 	width: 80, height: 80,
 	texture: addPush,
 	fill: "white",
 	aspect: "fit"
 });

 let subPush = new Texture("images/minus-icon-depressed.png");
 let subPushIm = new Skin({
 	width: 80, height: 80,
 	texture: subPush,
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

 let startBtn = new Texture("images/start-run-button.png");
 let startBtnIm = new Skin({
 	width: 497, height: 137,
 	texture: startBtn,
 	fill: "white",
 	aspect: "fit"
 });

 let startBtnPush = new Texture("images/start-run-button-depressed.png");
 let startBtnImPush = new Skin({
 	width: 497, height: 137,
 	texture: startBtnPush,
 	fill: "white",
 	aspect: "fit"
 });

 let nextScreenButton = Container.template($ => ({
 	width: 100, height: 30, skin: whiteSkin, active: true,
 	contents: [
    new Line({
      top: 5, left: 0, right: 0, width: 30, height: 30, skin: graphGray,
      contents: [
      ]
    }),
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
      		application.remove(currentScreen);
        	currentScreen = new HistoricalAnalyticsTemplate();
            application.add(currentScreen);
      }
  })
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
      top: 5, left: 0, right: 0, width: 30, height: 30, skin: runningPink,
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

 let addButton = Container.template($ => ({
 	left: 5, width: 40, height: 40, skin: addIm, active: true,
 	contents: [
 	],
 	behavior: Behavior({
 		 onTouchBegan: function(container) {
 			container.skin = addPushIm;
 		},
 		onTouchEnded: function(container) {
 			THR = THR + 5;
 			targetHR.string = THR;
 			container.skin = addIm;
 		}
 	})
 }));



 let subButton = Container.template($ => ({
 	left: 15, width: 40, height: 40, skin: subIm, active: true,
 	contents: [
 	],
 	behavior: Behavior({
 		 onTouchBegan: function(container) {
 			container.skin = subPushIm;
 		},
 		onTouchEnded: function(container) {
 			THR = THR - 5;
 			targetHR.string = THR;
 			container.skin = subIm;
 		}
 	})
 }));

 export var THR = 75;
 let targetHR = new Label({left: 0, right: 5, top: 0,
 	style: whiteHeaderStyle, string: THR});
 	
 let heartButton = Column.template($ => ({
 	left: 10, width: 200, height: 200, skin: heartIm, active: true,
 	contents: [
 	new Label({left: 3, right: 10, top: 65,
 		style: whiteMedStyle, string: "Target HR"}),
 	targetHR,
 	]
 }));


 let startButton = Container.template($ => ({
 	width: 200, height: 50, skin: startBtnIm, active: true,
 	contents: [
 	new Label({
 		left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
 		string: "Start Run"
 	}),
 	],
 	behavior: Behavior({
 		onTouchBegan: function(container) {
 			container.skin = startBtnImPush;
      	},
 		onTouchEnded: function(container) {
 			container.skin = startBtnIm;
      		application.add(new PlaySongTemplate());
      	}
  })
 }));

let TOP_BAR = new Line({
    left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Set Target Heart Rate"}),
    ]
  }),

export var StartRunTemplate = Container.template($ => ({
 	left: 0, right: 0, top: 0, bottom: 0,
 	skin: new Skin({fill: "white"}),
 	contents: [
 	new Column({
 		top: 0, left: 0, bottom: 0, right: 0,
 		skin: whiteSkin,
 		contents: [
 		TOP_BAR,
 		new Line({
 			left: 0, right: 0, top: 150, height: 90, skin: whiteSkin,
 			contents: [
 			new subButton(),
 			new heartButton(),
 			new addButton(),
 			]
 		}),
 		new Line({
 			left: 60, right: 60, top: 150, height: 30, skin: whiteSkin,
 			contents: [
 			new startButton()
 			]
 		}),
 		new Line({
      	top: 25, height: 30, skin: whiteSkin,
      		contents: [
      	    new prevScreenButton(),
      			new finishRunButton(),
      			new nextScreenButton(),
      		]
     	}),
 		]
 	})

 	
 	]
 }));

 /*var mainContainer = new MainContainerTemplate();
 application.add(mainContainer);*/
