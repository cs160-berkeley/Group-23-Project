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

 let whiteMedStyle = new Style({ font: "20px", color: "white" });
 let whiteHeaderStyle = new Style({ font: "30px", color: "white" });
 let whiteSkin = new Skin ({fill: 'white'});
 let blackSkin = new Skin ({fill: 'black'});
 
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

 let heart = new Texture("images/favorite-heart-button copy.png");
 let heartIm = new Skin({
 	width: 550, height: 550,
 	texture: heart,
 	fill: "white",
 	aspect: "fit"
 });

 let addButton = Container.template($ => ({
 	left: 10, width: 50, height: 50, skin: addIm, active: true,
 	contents: [
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
 			THR = THR + 1;
 			targetHR.string = THR;
 		}
 	})
 }));



 let subButton = Container.template($ => ({
 	left: 10, width: 50, height: 50, skin: subIm, active: true,
 	contents: [
 	],
 	behavior: Behavior({
 		onTouchEnded: function(container) {
 			THR = THR - 1;
 			targetHR.string = THR;
 		}
 	})
 }));

 var THR = 75;
 let targetHR = new Label({left: 0, right: 5, top: 0,
 	style: whiteHeaderStyle, string: THR});
 	
 let heartButton = Column.template($ => ({
 	left: 10, width: 87, height: 87, skin: heartIm, active: true,
 	contents: [
 	new Label({left: 10, right: 10, top: 10,
 		style: whiteMedStyle, string: "Target"}),
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
      	//go to running screen
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
 			top: 0, left: 0, right: 0, height: 40,
 			skin: new Skin({ fill: "#7f7f7f" }),
 			contents: [
 			new Label({
 				left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
 				string: "Set Target Heart Rate"
 			})
 			]
 		}),
 		new Line({
 			left: 45, right: 45, top: 150, height: 90, skin: whiteSkin,
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
