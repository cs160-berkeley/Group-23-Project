 import {
    VerticalScroller,
    VerticalScrollbar,
    TopScrollerShadow,
    BottomScrollerShadow
} from 'scroller';


var productDescriptionStyle = new Style({  font: '18px', horizontal: 'left', vertical: 'middle', left: 1, color: 'white' });
var productNameStyle = new Style({  font: 'bold 22px', horizontal: 'left', vertical: 'middle', lines: 1, color: 'black' });

let whiteHeaderStyle = new Style({ font: "30px Helvetica Neue", color: "white" });
let whiteMedStyle = new Style({ font: "20px Helvetica Neue", color: "white" });
let whiteSmallStyle = new Style({ font: "10px Helvetica Neue", color: "white" });

let THR = 90;

// let targetHRSR = new Label({left: 0, right: 5, top: 0,
//     style: whiteHeaderStyle, string: THR});

let targetHRSR = Label.template($ => ({left: 0, right: 5, top: 0,
     style: whiteHeaderStyle, string: THR}));


let blackMedStyle = new Style({ font: "20px Helvetica Neue", color: "black" });
let blackSmallStyle = new Style({ font: "10px Helvetica Neue", color: "black" });

var labelStyle = new Style( { font: "20px Lato", color:"black" } );

// FOOTER BUTTONS
let lineSkin = new Skin({ 
    fill: [ 'white', 'yellow' ],
    borders: { left: 0, right: 0, top: 0, bottom: 1 }, 
    stroke: 'silver'    
});

let blueSkin = new Skin ({fill: 'blue'});
let whiteSkin = new Skin ({fill: 'white'});
let graySkin = new Skin ({fill: 'gray'});
let blackSkin = new Skin ({fill: 'black'});
let pinkSkin = new Skin({fill: 'white'});
let salmonSkin = new Skin({fill: '#FE1B53'});


let listp = new Texture("images/list-icon-push.png");
let listPink = new Skin({
  width: 250, height: 250,
  texture: listp,
  fill: "white",
  aspect: "fit"
});

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

let runningp = new Texture("images/running-icon-push.png");
let runningPink = new Skin({
  width: 250, height: 250,
  texture: runningp,
  fill: "white",
  aspect: "fit"
});


//HEADER CODE FOR ALL SCREENS
let HEADER = Container.template($ => ({
    top: 0, left: 0, right: 0, height: 30, skin: salmonSkin,
    contents: [
    new Label({left: 10, right: 10, top: 5,
      style: whiteMedStyle, string: "$"}),
    ]
}));



let addSR = new Texture("images/plus-icon.png");
let addImSR = new Skin({
    width: 80, height: 80,
    texture: addSR,
    fill: "white",
    aspect: "fit"
});

let subSR = new Texture("images/minus-icon.png");
let subImSR = new Skin({
    width: 80, height: 80,
    texture: subSR,
    fill: "white",
    aspect: "fit"
});

let addPushSR = new Texture("images/plus-icon-depressed.png");
let addPushImSR = new Skin({
    width: 80, height: 80,
    texture: addPushSR,
    fill: "white",
    aspect: "fit"
});

let subPushSR = new Texture("images/minus-icon-depressed.png");
let subPushImSR = new Skin({
    width: 80, height: 80,
    texture: subPushSR,
    fill: "white",
    aspect: "fit"
});

let heartSR = new Texture("images/favorite-heart-button copy.png");
let heartImSR = new Skin({
    width: 550, height: 550,
    texture: heartSR,
    fill: "white",
    aspect: "fit"
});

let startBtnSR = new Texture("images/start-run-button.png");
let startBtnImSR = new Skin({
    width: 497, height: 137,
    texture: startBtnSR,
    fill: "white",
    aspect: "fit"
});

let startBtnPushSR = new Texture("images/start-run-button-depressed.png");
let startBtnImPushSR = new Skin({
    width: 497, height: 137,
    texture: startBtnPushSR,
    fill: "white",
    aspect: "fit"
});

let addButtonSR = Container.template($ => ({
    left: 5, width: 40, height: 40, skin: addImSR, active: true,
    contents: [
    ],
    behavior: Behavior({
       onTouchBegan: function(container) {
        container.skin = addPushImSR;
    },
    onTouchEnded: function(container) {
        THR = THR + 5;
        targetHRSR.string = THR;
        container.skin = addImSR;
    }
})
}));



let subButtonSR = Container.template($ => ({
    left: 15, width: 40, height: 40, skin: subImSR, active: true,
    contents: [
    ],
    behavior: Behavior({
       onTouchBegan: function(container) {
        container.skin = subPushImSR;
    },
    onTouchEnded: function(container) {
        THR = THR - 5;
        targetHRSR.string = THR;
        container.skin = subImSR;
    }
})
}));


let heartButtonSR = Column.template($ => ({
    left: 10, width: 200, height: 200, skin: heartImSR, active: true,
    contents: [
    new Label({left: 3, right: 10, top: 65,
        style: whiteMedStyle, string: "Target HR "}),
    new Label({left: 0, right: 5, top: 0,
    style: whiteHeaderStyle, string: THR})
    ]
}));


let startButtonSR = Container.template($ => ({
    width: 200, height: 50, skin: startBtnImSR, active: true,
    contents: [
    new Label({
        left: 0, right: 0, top: 0, bottom: 0, style: whiteHeaderStyle,
        string: "Start Run"
    }),
    ],
    behavior: Behavior({
        onTouchBegan: function(container) {
            container.skin = startBtnImPushSR;
        },
        onTouchEnded: function(container) {
            container.skin = startBtnImSR;
            application.add(new PlaySongTemplate());
        }
    })
}));



var StartRunTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0,  bottom: 55,
    skin: new Skin({fill: "white"}),
    contents: [
    new Column({
        top: 0, left: 0, bottom: 0, right: 0,
        skin: whiteSkin,
        contents: [
        new HEADER("Set Target Heart Rate"),
        new Line({
            left: 0, right: 0, top: 150, height: 90, skin: whiteSkin,
            contents: [
            new subButtonSR(),
            new heartButtonSR(),
            new addButtonSR()
            ]
        }),
        new Line({
            left: 60, right: 60, top: 150, height: 30, skin: whiteSkin,
            contents: [
            new startButtonSR()
            ]
        }),
        new Line({
            top: 25, height: 30, skin: whiteSkin,
            contents: [
                //new prevScreenButton(listGray, new SettingsTemplate()),
              //  new finishRunButton(runningPink, new StartRunTemplate()),
                //new nextScreenButton(graphGray, new HistoricalAnalyticsTemplate()),
                ]
            }),
        ]
    })

    
    ]
}));
//

var Screen1Template = Column.template($ => ({
    top: 0, bottom: 55, left: 0, right: 0, 
    skin: new Skin({fill: "#202020"}),
    contents: [
    new Label({ top: 20, height: 35, left: 0, right: 0, 
        style: new Style({ font: "30px", color: "white" }), 
        string: "Screen" }),
    new Label({ top: 0, height: 100, left: 0, right: 0, 
        style: new Style({ font: "bold 90px", color: "#3AFF3E" }), 
        string: "1" }),

    ]
}));

var Screen2Template = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 55,
    skin: new Skin({fill: "#202020"}),
    contents: [
    Label($, {  
        left: 0, right: 0, top: 20, height: 35, 
        style: new Style({ font: "30px", color: "white" }), 
        string: "Screen" 
    }),
    Label($, { 
        left: 0, right: 0, top: 0, height: 100, 
        style: new Style({ font: "bold 90px", color: "#3AFF3E" }), 
        string: "2" 
    }),

    ]
}));

var Screen3Template = Column.template($ => ({
    left: 0, right: 0, top: 0, bottom: 55,
    skin: new Skin({fill: "#202020"}),
    contents: [
    Label($, {  
        left: 0, right: 0, top: 20, height: 35, 
        style: new Style({ font: "30px", color: "white" }), 
        string: "Screen" 
    }),
    Label($, { 
        left: 0, right: 0, top: 0, height: 100, 
        style: new Style({ font: "bold 90px", color: "#3AFF3E" }), 
        string: "3" 
    }),
    ]
}));

var currentScreen = new StartRunTemplate();
application.add(currentScreen);

var navButton = Container.template($ => ({
    active: true,
    fill: "transparent", 
    width: 20, height: 20,
    skin: $.btnSkin,
    behavior: Behavior({
        onTouchBegan: function(container) {
            container.skin = $.pushSkin;
        },
        onTouchEnded: function(container){
            container.skin = $.btnSkin;
            application.remove(currentScreen);  // Remove the old screen from the application
            currentScreen = $.nextScreen;  // Make the new screen
            application.add(currentScreen);  // Add the new screen to the application
        }
    })
}));

// var NavButton = Container.template($ => ({
//     active: true, top: 2, bottom: 2, right: 2, left: 2,
//     behavior: Behavior({
//         onCreate: function(content){
//             this.upSkin = new Skin({
//                 fill: "transparent", 
//                 borders: {left: 1, right: 1, top: 1, bottom: 1}, 
//                 stroke: "white"
//             });
//             this.downSkin = new Skin({
//                 fill: "#3AFF3E", 
//                 borders: {left: 1, right: 1, top: 1, bottom: 1}, 
//                 stroke: "white"
//             });
//             content.skin = this.upSkin;
//         },
//         onTouchBegan: function(content){
//             content.skin = this.downSkin;
//         },
//         onTouchEnded: function(content){
//             content.skin = this.upSkin;
//             application.remove(currentScreen);  // Remove the old screen from the application
//             currentScreen = new $.nextScreen;  // Make the new screen
//             application.add(currentScreen);  // Add the new screen to the application
//         },
//     }),
//     contents: [
//     Label($, { top: 0, bottom: 0, left: 0, right: 0, 
//         style: new Style({ font: "20px", color: "white" }), 
//         string: $.string})
//     ]
// }));


// new Line({
//     top: 25, height: 30, skin: whiteSkin,
//     contents: [
//     new prevScreenButton(listPink, new LibraryTemplate()),
//     new finishRunButton(runningGray, new PlaySongTemplate()),
//     new nextScreenButton(graphGray, new AnalyticsTemplate()),
//     ]
// })



 /******************************************************************************************************************
                                    Analytics
*******************************************************************************************************************/
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
var AnalyticsTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 55,
    contents: [
        HEADER("Analytics"),
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
        scroll_header,
        // new Line({
        // top: 25, height: 30, skin: whiteSkin,
        //     contents: [
        //         // new prevScreenButton(listGray, new LibraryTemplate()),
        //         // new finishRunButton(runningGray, new PlaySongTemplate()),
        //         //new nextScreenButton(graphPink, new AnalyticsTemplate()),
        //     ]
        // }),
    ]
}));

 /******************************************************************************************************************
                                    Analytics Historical
*******************************************************************************************************************/

/* This is a template for a container which takes up the
 * whole screen.  It contains only a single object,
 * a VerticalScroller. */
var HistoricalAnalyticsTemplate = Container.template($ => ({
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
    // new Line({
    //     top: 25, height: 30, skin: whiteSkin,
    //         contents: [
    //             // new prevScreenButton(listGray, new SettingsTemplate()),
    //             // new finishRunButton(runningGray, new StartRunTemplate()),
    //             // new nextScreenButton(graphPink, new HistoricalAnalyticsTemplate()),
    //         ]
    //     }),
  ]
}));

 /******************************************************************************************************************
                                    Settings
*******************************************************************************************************************/


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
 
 var SettingsTemplate = Container.template($ => ({
    left: 0, right: 0, top: 0, bottom: 55,
    skin: new Skin({fill: "white"}),
    contents: [
    new Column({
        top: 0, left: 0, bottom: 0, right: 0,
        skin: whiteSkin,
        contents: [
        HEADER("Settings"),
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
                //new prevScreenButton(listPink, new SettingsTemplate),
                // new finishRunButton(runningGray, new StartRunTemplate()),
                // new nextScreenButton(graphGray, new HistoricalAnalyticsTemplate()),
            ]
        }),
        ]
    })

    
    ]
 }));



let startRunTemplateVar = new StartRunTemplate();
let screen1Var = new SettingsTemplate();
let screen2Var = new Screen2Template();
//NAVBAR STUFF

var navBar = new Line({ bottom: 0, height: 55, left: 0, right: 0,
    skin: new Skin({ fill: "black" }),
    contents: [
    new navButton({btnSkin: listGray, pushSkin: listPink, nextScreen: screen1Var}),
    new navButton({btnSkin: runningGray, pushSkin: runningPink, nextScreen: startRunTemplateVar}),
    new navButton({btnSkin: graphGray, pushSkin: graphPink, nextScreen: screen2Var})
    ]
});
application.add(navBar);