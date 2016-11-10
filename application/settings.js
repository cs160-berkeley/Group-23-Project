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
import { PlaySongTemplate } from "playsong";
import { LibraryTemplate } from "library";
import { StartRunTemplate } from "startrun";


 let whiteMedStyle = new Style({ font: "20px", color: "white" });
 let whiteHeaderStyle = new Style({ font: "30px", color: "white" });
 let whiteSkin = new Skin ({fill: 'white'});
 let blackSkin = new Skin ({fill: 'black'});

 /*import {
 	SystemKeyboard
 } from 'assets/keyboard';*/

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
 

 export var SettingsTemplate = Container.template($ => ({
 	left: 0, right: 0, top: 0, bottom: 0,
 	skin: new Skin({fill: "white"}),
 	contents: [
 	new Column({
 		top: 0, left: 0, bottom: 0, right: 0,
 		skin: whiteSkin,
 		contents: [
 		new Line({
 			top: 0, left: 0, right: 0, height: 40,
 			skin: new Skin({ fill: "#7f7f7f" }),
 			contents: [
 			new Label({
 				left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
 				string: "Settings"
 			})
 			]
 		}),
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
 		})
 		]
 	})

 	
 	]
 }));

// var mainContainer = new MainContainerTemplate();
// application.add(mainContainer);
