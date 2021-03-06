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

 /*import {
 	SystemKeyboard
 } from 'assets/keyboard';*/

 let listp = new Texture("images/list-icon-push.png");
 let listPink = new Skin({
  width: 250, height: 250,
  texture: listp,
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
      top: 5, left: 0, right: 0, width: 25, height: 25, skin: listPink,
      contents: [
      ]
    }),
    ],
    //behavior: Behavior({
      //  onTouchEnded: function(container) {
        //    application.add(new LibraryTemplate());
      //}
  //})
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
 
let TOP_BAR = new Line({
    left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Settings"}),
    ]
  }),
 export var SettingsTemplate = Container.template($ => ({
 	left: 0, right: 0, top: 0, bottom: 0,
 	skin: new Skin({fill: "white"}),
 	contents: [
 	new Column({
 		top: 0, left: 0, bottom: 0, right: 0,
 		skin: whiteSkin,
 		contents: [
 		TOP_BAR,
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
      	    	new prevScreenButton(),
      			new finishRunButton(),
      			new nextScreenButton(),
      		]
     	}),
 		]
 	})

 	
 	]
 }));

// var mainContainer = new MainContainerTemplate();
// application.add(mainContainer);
