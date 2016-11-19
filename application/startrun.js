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
import { SettingsTemplate } from "settings";
import { LibraryTemplate } from "library";
	//import { currentScreen } from "main";

 
 let whiteMedStyle = new Style({ font: "25px Lato", color: "white" });
 let whiteHeaderStyle = new Style({ font: "30px Lato Black", color: "white" });
 let whiteSkin = new Skin ({fill: 'white'});
 let blackSkin = new Skin ({fill: 'black'});
 
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
 	width: 200, height: 50, skin: new Skin({ fill: "#c4c4c4" }), active: true,
 	contents: [
 	new Label({
 		left: 0, right: 0, top: 0, bottom: 0, style: whiteMedStyle,
 		string: "Start Run"
 	}),
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
      		application.add(new PlaySongTemplate());
      }
  })
 }));


export var StartRunTemplate = Container.template($ => ({
 	left: 0, right: 0, top: 0, bottom: 0,
 	skin: new Skin({fill: "white"}),
 	contents: [
 	new Column({
 		top: 0, left: 0, bottom: 0, right: 0,
 		skin: whiteSkin,
 		contents: [
 		new Line({
 			top: 0, left: 0, right: 0, height: 60,
 			skin: new Skin({ fill: "#7f7f7f" }),
 			contents: [
 			new Label({
 				left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
 				string: "Set Target Heart Rate"
 			})
 			]
 		}),
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
 		})
 		]
 	})

 	
 	]
 }));

 /*var mainContainer = new MainContainerTemplate();
 application.add(mainContainer);*/
