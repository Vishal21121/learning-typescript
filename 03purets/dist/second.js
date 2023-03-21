"use strict";
//* Instagram is implementing TakePhoto so it must use those properties
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//* Instagram is implementing TakePhoto so it must use those properties
//* as Youtube is implementing Story hence it must give the definition to the method createStory from interface Story
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    //* writing the definition of the function createStory for implementing Story interface   
    createStory() {
        console.log("story was created");
    }
}
