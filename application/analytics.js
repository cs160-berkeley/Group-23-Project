import { PlaySongTemplate } from "playsong";import { SettingsTemplate } from "settings";import { StartRunTemplate } from "startrun";import { LibraryTemplate } from "library";var titleStyle = new Style({ font: "20px", color: "white" });// import {//     VerticalScroller,//     VerticalScrollbar,//     TopScrollerShadow,//     BottomScrollerShadow// } from 'scroller';var whiteSkin = new Skin ({fill: 'white'});var graySkin = new Skin ({fill: 'gray'});let darkGraySkin = new Skin({ fill: "#202020" });var whiteMedStyle = new Style({ font: "20px", color: "white" });let listg = new Texture("images/list-icon.png");
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
      		application.add(new LibraryTemplate());
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
      		application.add(new PlaySongTemplate());
    }
  })
 }));let rightdots = new Texture("images/dot-menu-right.png");let rightmenuDots = new Skin({      width: 150, height: 50,      texture: rightdots,      fill: "white",      aspect: "fit"});let buttonStyle = new Style({font: '30px', color: 'white'}); let TOP_BAR = new Line({          left: 0, right: 0, height: 30, skin: graySkin,          contents: [          	new Label({left: 10, right: 10, top: 5,          		style: whiteMedStyle, string: "Historical Analytics"})          ]      });let DOTS = new Line({
      	top: 25, height: 30, skin: whiteSkin,
      		contents: [
      	    	new prevScreenButton(),
      			new finishRunButton(),
      			new nextScreenButton(),
      		]
     }),     var graph_image_skin = new Skin({      width: 620, height: 385,      texture: new Texture("images/graph.PNG"),      //fill: "white",      aspect: "fit"});var graph_thing = new Line({		left: 0, right: 0, top: 0, height: 198, skin: graph_image_skin});// var Scroller = Column.template($ => ({//     top: 0, bottom: 55, left: 0, right: 0, //     skin: new Skin({fill: "#202020"}),//     contents: [//         new Column({ //             top: 0, height: 500, left: 0, right: 0, skin: darkGraySkin, //             style: titleStyle, //             contents: [//                  VerticalScroller($, { //                             active: true, top: 0, bottom: 0,//                             contents: [//                                 new $.contentToScrollVertically,//                                 VerticalScrollbar(), //                                 TopScrollerShadow(), //                                 BottomScrollerShadow(),    //                             ]//                 })//             ]//         })//     ]// }));  //       let discoveryInstance = Pins.discover(  //           connectionDesc => {  //               if (connectionDesc.name == "/sensor") {  //                   trace("Connecting to remote pins\n");  //                   remotePins = Pins.connect(connectionDesc);  //               }  //           },   //           connectionDesc => {  //              if (connectionDesc.name == "/sensor") {  //                   trace("Disconnected from remote pins\n");  //                   remotePins = undefined;  //              }  //           }  //       );		// /*		// Initializes a GraphContainer, which includes the GraphCanvas,		// upon which values are drawn, and the GraphLabel, which displays		// the value as text. 		// */		// var graph = new GraphContainer();		// var graph2 = new GraphContainer();					// *		// Parameters for the plotter		// 	name: unique identifier		// 	interval: ms between updates		// 	buckets: number of values displayed on the screen at once		// 	background: background color		// 	strokeStyle: color of the line		// 	lineWidth: width of the line		// 	complement: if true, graph ( 1 - value ) rather than the value 		  //       var plotterParams = {  //       	name: "sensor1",		  //    		interval: 10,		// 	buckets:200,  //       	background: "white",  //       	strokeStyle: "red",		// 	lineWidth: 4,		// 	complement: true		// };		// var plotterParams2 = {  //       	name: "sensor2",		  //    		interval: 10,		// 	buckets:200,  //       	background: "white",  //       	strokeStyle: "red",		// 	lineWidth: 4,		// 	complement: true		// };					// graph.add( new GraphCanvas1( plotterParams ) );		// graph.add( new GraphLabel1( plotterParams) );		// graph2.add( new GraphCanvas2( plotterParams2 ) );		// graph2.add( new GraphLabel2( plotterParams2) );		//let whiteSkin = new Skin({ fill: 'white' });		/* Main screen layout */let contentToScrollVertically = new Column({     top: 0, left: 0, right: 0,     skin: graySkin,    contents: [        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Top HR Boosting Songs'    	}),    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Closer'    	}),    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Dream On'    	}),    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Gagnam Style'    	}),    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Fly'    	}),    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Baby'    	}),    	    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'One Time Comin'    	}),    	    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'No Vasaline'    	}),    	    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'Lose Yourself'    	}),    	    	        new Label({	      left: 0, right:0, top: 0,	      style: buttonStyle,	      string: 'All Eyez On Me'    	})    	    ]});var CONTENT = Column.template($ => ({	 	left: 0, right: 0, top: 0, skin: whiteSkin,	contents: [		//graph,		//graph2,		graph_thing,		contentToScrollVertically	]}));//let cont = new Scroller({contentToScrollVertically: CONTENT});export var AnalyticsTemplate = Column.template($ => ({	 	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,	contents: [		TOP_BAR,		new CONTENT(),		DOTS	]}));