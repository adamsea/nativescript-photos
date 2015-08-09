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
        this.photos.push({title: 'Test Layout ' + this.counter++, src: 'http://aidsresearch.org/images/uploads/Stock_Gift_Pix.jpg'});
        // camera.takePicture({keepAspectRatio: true}).then((capture: imageSource.ImageSource) => {
        //     let src = capture.toBase64String('image/jpeg');
        //     let photo = {
        //         title: 'Photo ' + this.counter++,
        //         src: src
        //     };
        //     this.photos.push(photo);
        // });
    }
}
export var photoViewModel = new PhotoViewModel();