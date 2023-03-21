interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

//* Instagram is implementing TakePhoto so it must use those properties
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { }
}

//* Instagram is implementing TakePhoto so it must use those properties
//* as Youtube is implementing Story hence it must give the definition to the method createStory from interface Story
class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {

    }

    //* writing the definition of the function createStory for implementing Story interface   
    createStory(): void {
        console.log("story was created")
    }
}