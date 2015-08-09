import observable = require("data/observable");
import observableArray = require("data/observable-array");
import camera = require("camera");
import imageSource = require("image-source");

export class PhotoViewModel extends observable.Observable {
    private counter: number = 1;
    photos: observableArray.ObservableArray<Object> = new observableArray.ObservableArray([]);

    constructor() {
        super();
        this.set("photos", this.photos);
    }

    public takePhoto() {
        camera.takePicture({width: 300, height: 300, keepAspectRatio: true}).then((capture: imageSource.ImageSource) => {
            let photo = {
                title: 'Photo ' + this.counter++,
                src: capture
            };
            this.photos.push(photo);
        });
    }
}
export var photoViewModel = new PhotoViewModel();