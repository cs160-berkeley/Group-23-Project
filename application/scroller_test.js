
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
let salmonSkin = new Skin({fill: '#FE1B53'});

/* STATIC */
/* A simple array of objects. Each will be used as an
 * entry in our scrollable list. */
var menuItems = [
	{title: 'Closer', button: 'P5'},
	{title: 'Dream On', button: 'Tillamook'},
	{title: 'Gagnam Style', button: 'P6'},
	{title: 'Fly', button: 'Klamath'},
	{title: 'Baby', button: 'Coppermine'},
	{title: 'One Time Comin', button: 'Prescott'},
	{title: 'No Vasaline', button: 'Dothan'},
	{title: 'Lose Yourself', button: 'Yonah'},
	{title: 'All Eyez On Me', button: 'Penryn'},
	{title: 'Heartless', button: 'Sandy Bridge'},
	{title: 'Baby', button: 'Coppermine'},
	{title: 'One Time Comin', button: 'Prescott'},
	{title: 'No Vasaline', button: 'Dothan'},
	{title: 'Lose Yourself', button: 'Yonah'},
	{title: 'All Eyez On Me', button: 'Penryn'},
	{title: 'Heartless', button: 'Sandy Bridge'}
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
			right: 14, style: productDescriptionStyle, skin: blueSkin, 
			active: true, string: $.button, behavior: new ProductDescriptionButtonBehavior()
		})							
     ]
 }));
 
 
var top_bar = new Line({
    top: 0, left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "Top"}),
    ]
  });

 let list = new Texture("images/list-icon.png");
 let listIm = new Skin({
  width: 500, height: 500,
  texture: list,
  fill: "white",
  aspect: "fit"
});
let leftButton = Container.template($ => ({
   top: 0, left: 10, width: 100, height: 100, skin: listIm, active: true,
   contents: [
   ],
   // behavior: Behavior({
   //  onTouchEnded: function(container) {
   //   THR = THR - 10;
   //   targetHR.string = THR;
   //   container.container.container.controls[1][1].delegate("onTouchEnded");
   //   first = 0;
   //   container.container.container.controls[1][1].delegate("onTouchEnded");
   // }
 // })
 }));

var icon_left = new Label({
  style: whiteMedStyle, string: "Bottom"});

var icon_center = new Label({
  style: whiteMedStyle, string: "Bottom"});

var icon_right = new Label({
  style: whiteMedStyle, string: "Bottom"});

var bottom_bar = new Line({
    bottom: 0, left: 0, right: 0, height: 50, skin: salmonSkin,
    contents: [
    	new Line({
      	height: 50, skin: whiteSkin,
      		contents: [
      	      	new leftButton(),
      			icon_center,
      			icon_right
      		]
    	 }),
    ]
  });


/* This is a template for a container which takes up the
 * whole screen.  It contains only a single object,
 * a VerticalScroller. */
export var ScreenContainer = Container.template($ => ({
	left: 0, right: 0, top: 0, bottom: 0,
	contents: [
		
		VerticalScroller($, {
			top: 30 ,
			name: 'scroller',
			contents: [
				Column($, { 
					left: 0, right: 0, top: 0, name: 'menu',
					/* Add a ProcessorLine object for each item in the menuItems array */
					contents: menuItems.map(element => new ProcessorLine(element))
				})             			
			]
		}),
		top_bar,
		bottom_bar
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