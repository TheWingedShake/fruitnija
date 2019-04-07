/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/activities/activity.js":
/*!************************************!*\
  !*** ./app/activities/activity.js ***!
  \************************************/
/*! exports provided: Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return Activity; });
/* harmony import */ var _assetsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assetsManager */ "./app/assetsManager.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options */ "./app/options.js");


class Activity{

    constructor(stage){
        this.assetsLoader = _assetsManager__WEBPACK_IMPORTED_MODULE_0__["assetsManager"];
        this.stage = stage;
    }

    setPlayer(player){
        this.player = player;
    }

    setBackground(){
        const bgImage = _assetsManager__WEBPACK_IMPORTED_MODULE_0__["assetsManager"].getImage('background');
        const background = new createjs.Bitmap(bgImage);
        background.x = 0;
        background.y = 0;
        this.backgroundContainer.addChild(background);
        //this.stage.addChild(background);
    }

    onInit(){
        this.backgroundContainer = new createjs.Container(); //for background and secondary objects, like a fruit spot
        this.passiveObjectsContainer = new createjs.Container(); //for cut fruits objects
        this.activeObjectsContainer = new createjs.Container(); //for active fruit objects
        this.interfaceContainer = new createjs.Container(); //for buttons and game info, like a score
        this.stage.addChild(this.backgroundContainer);
        this.stage.addChild(this.passiveObjectsContainer);
        this.stage.addChild(this.activeObjectsContainer);
        this.stage.addChild(this.interfaceContainer);
        this.createUI();
    }

    createUI(){

    }

    onDestroy(){
        
    }

}



/***/ }),

/***/ "./app/activities/gameActivity.js":
/*!****************************************!*\
  !*** ./app/activities/gameActivity.js ***!
  \****************************************/
/*! exports provided: GameActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameActivity", function() { return GameActivity; });
/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity */ "./app/activities/activity.js");
/* harmony import */ var _loggers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loggers/logger */ "./app/loggers/logger.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "./app/options.js");
/* harmony import */ var _fruits_redFruit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fruits/redFruit */ "./app/fruits/redFruit.js");
/* harmony import */ var _fruits_blueFruit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fruits/blueFruit */ "./app/fruits/blueFruit.js");
/* harmony import */ var _fruits_greenFruit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fruits/greenFruit */ "./app/fruits/greenFruit.js");
/* harmony import */ var _fruits_orangeFruit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fruits/orangeFruit */ "./app/fruits/orangeFruit.js");
/* harmony import */ var _fruits_purpleFruit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fruits/purpleFruit */ "./app/fruits/purpleFruit.js");
/* harmony import */ var _fruits_yellowFruit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fruits/yellowFruit */ "./app/fruits/yellowFruit.js");









class GameActivity extends _activity__WEBPACK_IMPORTED_MODULE_0__["Activity"]{

    constructor(stage){
        _loggers_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log('GameActivity created');
        super(stage);
        this.fruits = [_fruits_redFruit__WEBPACK_IMPORTED_MODULE_3__["RedFruit"], _fruits_blueFruit__WEBPACK_IMPORTED_MODULE_4__["BlueFruit"], _fruits_orangeFruit__WEBPACK_IMPORTED_MODULE_6__["OrangeFruit"], _fruits_yellowFruit__WEBPACK_IMPORTED_MODULE_8__["YellowFruit"], _fruits_greenFruit__WEBPACK_IMPORTED_MODULE_5__["GreenFruit"], _fruits_purpleFruit__WEBPACK_IMPORTED_MODULE_7__["PurpleFruit"]];
        this.time = 30;
        this.nextFruitLaunch = _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitReloadTime;
        this.fruitCountJumpTime = _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitTimeStep;
        this.fruitLaunchCount = _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitStartCount;
        this.handleTick = () => {
            this.time -=  1 / createjs.Ticker.framerate;
            this.nextFruitLaunch -= 1 / createjs.Ticker.framerate;
            this.fruitCountJumpTime -= 1 / createjs.Ticker.framerate;
            this.timeObject.set({text: `Time: ${Math.round(this.time)}`});
            if(this.time <= 0){
                createjs.Ticker.removeEventListener("tick", this.handleTick);
                this.stage.dispatchEvent('nextAcitity');
                return;
            }
            if(this.fruitCountJumpTime <= 0){
                this.fruitLaunchCount++;
                this.fruitCountJumpTime = _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitTimeStep;
            }
            if(this.nextFruitLaunch <= 0){
                this.nextFruitLaunch = _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitReloadTime;
                for(let i = 0; i < this.fruitLaunchCount; i++){
                    this.launchFruit();
                }
            }
        };
    }

    onInit(){
        super.onInit();
        this.setBackground();
        this.launchFruit();
        createjs.Ticker.addEventListener("tick", this.handleTick);
    }

    createUI(){
        this.scoreObject = new createjs.Text(`Score: ${this.player.score}`, "20px 'Comic Sans'", "#ff7700");
        this.scoreObject.x = 25;
        this.scoreObject.y = 25;
        this.scoreObject.textBaseline = "alphabetic";
        this.interfaceContainer.addChild(this.scoreObject);
        this.timeObject = new createjs.Text(`Time: ${Math.round(this.time)}`, "20px 'Comic Sans'", "#ff7700");
        this.timeObject.x = _options__WEBPACK_IMPORTED_MODULE_2__["options"].w - 95;
        this.timeObject.y = 25;
        this.timeObject.textBaseline = "alphabetic";
        this.interfaceContainer.addChild(this.timeObject);
    }

    launchFruit(){
        const fruit = this.getRandomFruit();
        const imgFruit = this.assetsLoader.getImage(fruit.id);
        const fruitShape = new createjs.Bitmap(imgFruit);
        fruitShape.scale = _options__WEBPACK_IMPORTED_MODULE_2__["options"].imgScale;
        fruitShape.regX = imgFruit.width / 2;
        fruitShape.regY = imgFruit.height / 2;
        fruitShape.x = 100;
        fruitShape.y = _options__WEBPACK_IMPORTED_MODULE_2__["options"].h + _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitStartYOffset;

        fruitShape.on('click', () => {
            this.player.addScore(fruit.score);
            this.scoreObject.set({text: `Score: ${this.player.score}`});
            this.activeObjectsContainer.removeChild(fruitShape);
            fruit.onCut();
            this.placeCutFruit(
                fruit,
                {
                    x: fruitShape.x,
                    y: fruitShape.y,
                    rotation: fruitShape.rotation
                }
            );
        });
        const path = fruit.generatePath();
        createjs.Tween.get(fruitShape, {loop: false})
        .to({guide: {path: path.up}, rotation: 360}, fruit.time, createjs.Ease.getPowOut(1.3))
        .to({guide: {path: path.down}, rotation: 720}, fruit.time, createjs.Ease.getPowIn(1.3));

        this.activeObjectsContainer.addChild(fruitShape);
    }

    placeCutFruit(fruit, coords){
        const cutParts = fruit.getCutParts();

        const leftPartImage = this.assetsLoader.getImage(cutParts.l);
        const leftPartShape = new createjs.Bitmap(leftPartImage);
        leftPartShape.scale = _options__WEBPACK_IMPORTED_MODULE_2__["options"].imgScale;
        leftPartShape.x = coords.x - leftPartShape.scale * leftPartImage.width / 2;
        leftPartShape.y = coords.y;
        leftPartShape.regX = leftPartImage.width / 2;
        leftPartShape.regY = leftPartImage.height / 2;

        const rightPartImage = this.assetsLoader.getImage(cutParts.r);
        const rightPartShape = new createjs.Bitmap(rightPartImage);
        rightPartShape.scale = _options__WEBPACK_IMPORTED_MODULE_2__["options"].imgScale;
        rightPartShape.x = coords.x + rightPartShape.scale * rightPartImage.width / 2 ;
        rightPartShape.y = coords.y;
        rightPartShape.regX = rightPartImage.width / 2;
        rightPartShape.regY = rightPartImage.height / 2;

        const spotImage = this.assetsLoader.getImage(cutParts.s);
        const spotShape = new createjs.Bitmap(spotImage);
        spotShape.scale = _options__WEBPACK_IMPORTED_MODULE_2__["options"].imgScale;
        spotShape.x = coords.x;
        spotShape.y = coords.y;
        spotShape.regX = spotImage.width / 2;
        spotShape.regY = spotImage.height / 2;

        this.passiveObjectsContainer.addChild(leftPartShape);
        this.passiveObjectsContainer.addChild(rightPartShape);
        this.backgroundContainer.addChild(spotShape);
        this.fallDownCutShape(leftPartShape, {x: leftPartShape.x, y: leftPartShape.y, rotation: -90});
        this.fallDownCutShape(rightPartShape, {x: rightPartShape.x, y: rightPartShape.y, rotation: 90});        
    }

    fallDownCutShape(shape, coords){
        const fallTime = this.getFallTime(coords.y);
        createjs.Tween.get(shape, {loop: false, onComplete: () => {
            _loggers_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log('cut part has been fallen');
        }})
        .to({x: coords.x, y: _options__WEBPACK_IMPORTED_MODULE_2__["options"].h + _options__WEBPACK_IMPORTED_MODULE_2__["options"].fruitStartYOffset, rotation: coords.rotation}, fallTime, createjs.Ease.getPowIn(2));
    }

    getRandomFruit(){
        const index = Math.floor(Math.random() * this.fruits.length);
        return new this.fruits[index]();
    }

    getFallTime(y){
        return _options__WEBPACK_IMPORTED_MODULE_2__["options"].fallTime * (_options__WEBPACK_IMPORTED_MODULE_2__["options"].h - y)/_options__WEBPACK_IMPORTED_MODULE_2__["options"].h; 
    }

}



/***/ }),

/***/ "./app/activities/resultActivity.js":
/*!******************************************!*\
  !*** ./app/activities/resultActivity.js ***!
  \******************************************/
/*! exports provided: ResultActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultActivity", function() { return ResultActivity; });
/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity */ "./app/activities/activity.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options */ "./app/options.js");


class ResultActivity extends _activity__WEBPACK_IMPORTED_MODULE_0__["Activity"]{

    constructor(stage){
        super(stage);
    }

    onInit(){
        super.onInit();
        this.setBackground();
    }

    createUI(){
        this.showScore();
    }

    showScore(){
        const scoreObject = new createjs.Text(`Total score: ${this.player.score}`, "30px 'Comic Sans'", "#ff7700");
        scoreObject.x = _options__WEBPACK_IMPORTED_MODULE_1__["options"].w / 4;
        scoreObject.y = _options__WEBPACK_IMPORTED_MODULE_1__["options"].h / 2;
        scoreObject.textBaseline = "alphabetic";
        this.interfaceContainer.addChild(scoreObject);
    }

}



/***/ }),

/***/ "./app/activities/startActivity.js":
/*!*****************************************!*\
  !*** ./app/activities/startActivity.js ***!
  \*****************************************/
/*! exports provided: StartActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartActivity", function() { return StartActivity; });
/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity */ "./app/activities/activity.js");
/* harmony import */ var _loggers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loggers/logger */ "./app/loggers/logger.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options */ "./app/options.js");



class StartActivity extends _activity__WEBPACK_IMPORTED_MODULE_0__["Activity"]{

    constructor(stage){
        _loggers_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log('StartActivity created');
        super(stage);
    }

    onInit(){
        super.onInit();
        this.setBackground();
    }

    createUI(){
        this.createStartButton();
    }

    onDestroy(){

    }

    createStartButton(){
        this.handleStartButtonClick = () => {
            startButton.removeEventListener('click', this.handleStartButtonClick);
            createjs.Tween.get(startButton, {loop: false, onComplete: () => {
                this.stage.dispatchEvent('nextAcitity');
            }})
            .to({scale: 0.9}, 250, createjs.Ease.quadOut);
        };
        const image = this.assetsLoader.getImage('startButton');
        const startButton = new createjs.Bitmap(image);
        startButton.x = _options__WEBPACK_IMPORTED_MODULE_2__["options"].w / 2;
        startButton.y = _options__WEBPACK_IMPORTED_MODULE_2__["options"].h / 2;
        startButton.regX = image.width / 2;
        startButton.regY = image.height / 2;
        this.interfaceContainer.addChild(startButton);
        startButton.addEventListener('click', this.handleStartButtonClick);
    }

}



/***/ }),

/***/ "./app/assetsManager.js":
/*!******************************!*\
  !*** ./app/assetsManager.js ***!
  \******************************/
/*! exports provided: assetsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetsManager", function() { return assetsManager; });
class AssetsManager{

    constructor(){
        this.images = {};
        this.sounds = {};
    }

    loadImage(images = []){
        const p1 = new Promise((resolve) => {
            const preload = new createjs.LoadQueue();
            
            images.forEach(item => {
                preload.loadFile(item);
            });
            preload.addEventListener("fileload", res => {
                this.images[res.item.id] = res.result;
            });
            preload.addEventListener("complete", () => {
                resolve();
            });
        });
        return p1;
    }

    loadSounds(sounds = []){
        sounds.forEach(item => {
            createjs.Sound.registerSound(item.src, item.id);
        });
    }

    getImage(id){
        return this.images[id] || false;
    }

    getSound(id){
        return this.sounds[id] || false;
    }

}

const assetsManager = new AssetsManager();

/***/ }),

/***/ "./app/fruits/blueFruit.js":
/*!*********************************!*\
  !*** ./app/fruits/blueFruit.js ***!
  \*********************************/
/*! exports provided: BlueFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueFruit", function() { return BlueFruit; });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./app/fruits/fruit.js");

class BlueFruit extends _fruit__WEBPACK_IMPORTED_MODULE_0__["Fruit"]{

    constructor(){
        super();
        this.score = 30;
        this.time = 1500;
        this.id = 'blueFruit';
    }

    getCutParts(){
        return {
            l: 'blueFruitL',
            r: 'blueFruitR',
            s: 'blueFruitS'
        };
    }

}



/***/ }),

/***/ "./app/fruits/fruit.js":
/*!*****************************!*\
  !*** ./app/fruits/fruit.js ***!
  \*****************************/
/*! exports provided: Fruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fruit", function() { return Fruit; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ "./app/options.js");

class Fruit{

    constructor(){
        this.score = 0;
        this.time = 0;
        this.id = '';
    }

    generatePath(){
        const leftBottomX = Math.round(Math.random() * (xLeftRange[1] - xLeftRange[0])) + xLeftRange[0];
        const leftTopX = Math.round(Math.random() * (xLeftRange[1] - xLeftRange[0])) + xLeftRange[0];
        const rightBottomX = Math.round(Math.random() * (xRightRange[1] - xRightRange[0])) + xRightRange[0];
        const rightTopX = Math.round(Math.random() * (xRightRange[1] - xRightRange[0])) + xRightRange[0];
        const bottomY = _options__WEBPACK_IMPORTED_MODULE_0__["options"].h + 50;
        const topY = Math.round(Math.random() * (yTopRange[1] - yTopRange[0])) + yTopRange[0];
        const middleTopX = Math.round((leftTopX + rightTopX)/2);

        const path = {};

        /*
            choose fruit direction 
        */
        if(Math.random() > 0.5){
            path.up = [
                leftBottomX, bottomY,
                leftTopX, topY,
                middleTopX, topY
            ];
            path.down = [
                middleTopX, topY,
                rightTopX, topY,
                rightBottomX, bottomY
            ];
        }else{
            path.up = [
                rightBottomX, bottomY,
                rightTopX, topY,
                middleTopX, topY
            ];
            path.down = [
                middleTopX, topY,
                leftTopX, topY,
                leftBottomX, bottomY
            ]
        }
        
        return path;
    }

    getCutParts(){
        return {
            l: 'blueFruitL',
            r: 'blueFruitR',
            s: 'blueFruitS'
        };
    }

    onCut(){
        createjs.Sound.play('swordUnsheathing');
    }

}

const xLeftRange = [0, _options__WEBPACK_IMPORTED_MODULE_0__["options"].w/3];
const yTopRange = [100, _options__WEBPACK_IMPORTED_MODULE_0__["options"].h / 2];
const xRightRange = [2 * _options__WEBPACK_IMPORTED_MODULE_0__["options"].w/3, _options__WEBPACK_IMPORTED_MODULE_0__["options"].w];



/***/ }),

/***/ "./app/fruits/greenFruit.js":
/*!**********************************!*\
  !*** ./app/fruits/greenFruit.js ***!
  \**********************************/
/*! exports provided: GreenFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenFruit", function() { return GreenFruit; });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./app/fruits/fruit.js");

class GreenFruit extends _fruit__WEBPACK_IMPORTED_MODULE_0__["Fruit"]{

    constructor(){
        super();
        this.score = 5;
        this.time = 2500;
        this.id = 'greenFruit';
    }

    getCutParts(){
        return {
            l: 'greenFruitL',
            r: 'greenFruitR',
            s: 'greenFruitS'
        };
    }

}



/***/ }),

/***/ "./app/fruits/orangeFruit.js":
/*!***********************************!*\
  !*** ./app/fruits/orangeFruit.js ***!
  \***********************************/
/*! exports provided: OrangeFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrangeFruit", function() { return OrangeFruit; });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./app/fruits/fruit.js");

class OrangeFruit extends _fruit__WEBPACK_IMPORTED_MODULE_0__["Fruit"]{

    constructor(){
        super();
        this.score = 20;
        this.time = 1700;
        this.id = 'orangeFruit';
    }

    getCutParts(){
        return {
            l: 'orangeFruitL',
            r: 'orangeFruitR',
            s: 'orangeFruitS'
        };
    }

}



/***/ }),

/***/ "./app/fruits/purpleFruit.js":
/*!***********************************!*\
  !*** ./app/fruits/purpleFruit.js ***!
  \***********************************/
/*! exports provided: PurpleFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurpleFruit", function() { return PurpleFruit; });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./app/fruits/fruit.js");

class PurpleFruit extends _fruit__WEBPACK_IMPORTED_MODULE_0__["Fruit"]{

    constructor(){
        super();
        this.score = 15;
        this.time = 2100;
        this.id = 'purpleFruit';
    }

    getCutParts(){
        return {
            l: 'purpleFruitL',
            r: 'purpleFruitR',
            s: 'purpleFruitS'
        };
    }

}



/***/ }),

/***/ "./app/fruits/redFruit.js":
/*!********************************!*\
  !*** ./app/fruits/redFruit.js ***!
  \********************************/
/*! exports provided: RedFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedFruit", function() { return RedFruit; });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./app/fruits/fruit.js");

class RedFruit extends _fruit__WEBPACK_IMPORTED_MODULE_0__["Fruit"]{

    constructor(){
        super();
        this.time = 2000;
        this.score = 25;
        this.id = 'redFruit';
    }

    getCutParts(){
        return {
            l: 'redFruitL',
            r: 'redFruitR',
            s: 'redFruitS'
        };
    }

}



/***/ }),

/***/ "./app/fruits/yellowFruit.js":
/*!***********************************!*\
  !*** ./app/fruits/yellowFruit.js ***!
  \***********************************/
/*! exports provided: YellowFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowFruit", function() { return YellowFruit; });
/* harmony import */ var _fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruit */ "./app/fruits/fruit.js");

class YellowFruit extends _fruit__WEBPACK_IMPORTED_MODULE_0__["Fruit"]{

    constructor(){
        super();
        this.score = 10;
        this.time = 2300;
        this.id = 'yellowFruit';
    }

    getCutParts(){
        return {
            l: 'yellowFruitL',
            r: 'yellowFruitR',
            s: 'yellowFruitS'
        };
    }

}



/***/ }),

/***/ "./app/gameApp.js":
/*!************************!*\
  !*** ./app/gameApp.js ***!
  \************************/
/*! exports provided: GameApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameApp", function() { return GameApp; });
/* harmony import */ var _activities_startActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities/startActivity */ "./app/activities/startActivity.js");
/* harmony import */ var _activities_gameActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities/gameActivity */ "./app/activities/gameActivity.js");
/* harmony import */ var _activities_resultActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities/resultActivity */ "./app/activities/resultActivity.js");
/* harmony import */ var _assetsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assetsManager */ "./app/assetsManager.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./app/options.js");
/* harmony import */ var _loggers_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loggers/logger */ "./app/loggers/logger.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player */ "./app/player.js");









class GameApp{

    constructor(options){
        const canvas = document.getElementById('gameapp');
        this.stage = new createjs.Stage(canvas);
        this.stage.enableDOMEvents(true);
        createjs.Ticker.addEventListener("tick", this.stage);
        this.currentActivityIndex = 0;
        this.activities = [
            _activities_startActivity__WEBPACK_IMPORTED_MODULE_0__["StartActivity"],
            _activities_gameActivity__WEBPACK_IMPORTED_MODULE_1__["GameActivity"],
            _activities_resultActivity__WEBPACK_IMPORTED_MODULE_2__["ResultActivity"]
        ];
        this.player = new _player__WEBPACK_IMPORTED_MODULE_6__["Player"]();
    }

    init(){
        _assetsManager__WEBPACK_IMPORTED_MODULE_3__["assetsManager"].loadSounds(_options__WEBPACK_IMPORTED_MODULE_4__["soundUrls"]);
        _assetsManager__WEBPACK_IMPORTED_MODULE_3__["assetsManager"].loadImage(_options__WEBPACK_IMPORTED_MODULE_4__["imgsUrls"])
        .then(() => {
            this.listenEvents();
            this.runActivity(this.currentActivityIndex);
        })
        .catch(error => {
            _loggers_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].error(error);
        });
    }

    runActivity(index){
        if(this.activities[index]){
            const activity = new this.activities[index](this.stage);
            activity.setPlayer(this.player);
            activity.onInit();
        }
    }

    listenEvents(){
        this.stage.addEventListener('nextAcitity', () => {
            this.stage.removeAllChildren();
            this.currentActivityIndex++;
            this.runActivity(this.currentActivityIndex);
        });
    }

}



/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameApp */ "./app/gameApp.js");

const options = {
    width: 397,
    height: 632
};
window.onload = () => {
    createjs.MotionGuidePlugin.install();
    const gameApp = new _gameApp__WEBPACK_IMPORTED_MODULE_0__["GameApp"](options);
    gameApp.init();
};


/***/ }),

/***/ "./app/loggers/consoleLogger.js":
/*!**************************************!*\
  !*** ./app/loggers/consoleLogger.js ***!
  \**************************************/
/*! exports provided: ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
class ConsoleLogger{

    constructor(){
        
    }

    log(message = ''){
        console.log(message);
    }

    warn(message = ''){
        console.warn(message);
    }

    error(message = ''){
        console.error(message);
    }

}



/***/ }),

/***/ "./app/loggers/logger.js":
/*!*******************************!*\
  !*** ./app/loggers/logger.js ***!
  \*******************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _consoleLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consoleLogger */ "./app/loggers/consoleLogger.js");

class Logger{

    constructor(loggerType){
        switch(loggerType){
            case loggerTypes.default:
                this.logger = new _consoleLogger__WEBPACK_IMPORTED_MODULE_0__["ConsoleLogger"]();
                break;
            default:
                this.logger = new _consoleLogger__WEBPACK_IMPORTED_MODULE_0__["ConsoleLogger"]();
                break;
        }
    }

    log(message = ''){
        this.logger.log(message);
    }

    warn(message = ''){
        this.logger.warn(message);
    }

    error(message = ''){
        this.logger.error(message);
    }

}

const loggerTypes = {
    default: 'console'
};

const currentLoggerType = loggerTypes.default;

const logger = new Logger(currentLoggerType);

/***/ }),

/***/ "./app/options.js":
/*!************************!*\
  !*** ./app/options.js ***!
  \************************/
/*! exports provided: options, imgsUrls, soundUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgsUrls", function() { return imgsUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundUrls", function() { return soundUrls; });
const options = {
    w: 422,
    h: 750,
    fruitStartYOffset: 50,
    imgScale: 0.5,
    fallTime: 1500,
    fruitReloadTime: 2,
    fruitTimeStep: 8,
    fruitStartCount: 1
};
const imgsUrls = [
    {
        id: 'background',
        src: 'assets/background.jpg'
    },
    {
        id: 'startButton',
        src: 'assets/buttonplay.png'
    },
    {
        id: 'redFruit',
        src: 'assets/redFruit.png'
    },
    {
        id: 'redFruitL',
        src: 'assets/redFruitL.png'
    },
    {
        id: 'redFruitR',
        src: 'assets/redFruitR.png'
    },
    {
        id: 'redFruitS',
        src: 'assets/redFruitS.png'
    },
    {
        id: 'blueFruit',
        src: 'assets/blueFruit.png'
    },
    {
        id: 'blueFruitL',
        src: 'assets/blueFruitL.png'
    },
    {
        id: 'blueFruitR',
        src: 'assets/blueFruitR.png'
    },
    {
        id: 'blueFruitS',
        src: 'assets/blueFruitS.png'
    },
    {
        id: 'greenFruit',
        src: 'assets/greenFruit.png'
    },
    {
        id: 'greenFruitL',
        src: 'assets/greenFruitL.png'
    },
    {
        id: 'greenFruitR',
        src: 'assets/greenFruitR.png'
    },
    {
        id: 'greenFruitS',
        src: 'assets/greenFruitS.png'
    },
    {
        id: 'yellowFruit',
        src: 'assets/yellowFruit.png'
    },
    {
        id: 'yellowFruitL',
        src: 'assets/yellowFruitL.png'
    },
    {
        id: 'yellowFruitR',
        src: 'assets/yellowFruitR.png'
    },
    {
        id: 'yellowFruitS',
        src: 'assets/yellowFruitS.png'
    },
    {
        id: 'orangeFruit',
        src: 'assets/orangeFruit.png'
    },
    {
        id: 'orangeFruitL',
        src: 'assets/orangeFruitL.png'
    },
    {
        id: 'orangeFruitR',
        src: 'assets/orangeFruitR.png'
    },
    {
        id: 'orangeFruitS',
        src: 'assets/orangeFruitS.png'
    },
    {
        id: 'purpleFruit',
        src: 'assets/purpleFruit.png'
    },
    {
        id: 'purpleFruitL',
        src: 'assets/purpleFruitL.png'
    },
    {
        id: 'purpleFruitR',
        src: 'assets/purpleFruitR.png'
    },
    {
        id: 'purpleFruitS',
        src: 'assets/purpleFruitS.png'
    }
];

const soundUrls = [
    {
        id: 'swordUnsheathing',
        src: 'assets/swordUnsheathing.mp3'
    }
];

/***/ }),

/***/ "./app/player.js":
/*!***********************!*\
  !*** ./app/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player{

    constructor(){
        this.score = 0;
    }

    addScore(score){
        this.score += score;
    }

    reset(){
        this.score = 0;
    }

}



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./app/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./app/index.js */"./app/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map