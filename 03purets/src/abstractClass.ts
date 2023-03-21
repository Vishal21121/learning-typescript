abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia():void
    getReelTime():number{
        // some complex calculation
        return 8
    }
}


//* we cannot create a object of the abstract class
// const vs = new TakePhoto("test","test")


class Instagam extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const vs = new Instagam("test","test",3)
