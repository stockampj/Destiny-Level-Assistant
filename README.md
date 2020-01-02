# _Destiny Level Assistant_

#### _See your guardians' path {12/19/2019}_

#### By _**Joel Stockamp**_

## Description

_This app is still in development. The purpose of this application is help players of the game Destiny 2 (developed by Bungie), decide which type of reward would be the most beneficial for them to pursue next, given their particular gear profile._

## Specifications


* #### API Call to Bungie.net
|: Spec |: Input|: Output|
|Web-app that will make an api call to retrieve the character's current stats |Robot Chickens| X-box live profile with 3 characters and 8 gear slots|
|App will pull completed activities, and return a list of activities currently available to character. |Robot Chickens | Recommendation: character can pursue the following 3 activities to maximize their character level gains|


* #### Visual Feedback on current state
| Spec                      |Input          | Output |
|:|:|:|
|A user can see their current character's light level profile with each piece of gear showing its level | warlock | head: 365, arms: 364, chest: 370, legs: 363, class item: 369, primary: 366, secondary: 367, power: 363|
|A user can see how a particular gear drop will impact their level profile|tier 1|overall light level has 34% chance of increasing|




## Setup/Installation Requirements

* clone this repository from github.
* navigate to the root level of the reop using command line interface
* enter the command "npm install"
* enter the command "npm run start"
* open a browser at the url http://localhost:8080/

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Send any questions or comments to Joel Stockamp at stockampj@gmail.com_

## Technologies Used

_JavaScript | React | Redux | npm | Webpack | InkScape_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Joel Stockamp**
