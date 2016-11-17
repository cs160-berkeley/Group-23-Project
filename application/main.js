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
 
import Pins from "pins";
export var remotePins;class AppBehavior extends Behavior {    onLaunch(application) {        let discoveryInstance = Pins.discover(            connectionDesc => {                if (connectionDesc.name == "pins-share-led") {                    trace("Connecting to remote pins\n");                    remotePins = Pins.connect(connectionDesc);                }            },             connectionDesc => {                if (connectionDesc.name == "pins-share-led") {                    trace("Disconnected from remote pins\n");                    remotePins = undefined;                }            }        );    }}
import { PlaySongTemplate } from "playsong";
import { SettingsTemplate } from "settings";
import { StartRunTemplate } from "startrun";
import { LibraryTemplate } from "library";
import { AnalyticsTemplate } from "analytics";
var currentScreen;
application.behavior = new AppBehavior();
currentScreen = new StartRunTemplate();

application.add(currentScreen);
