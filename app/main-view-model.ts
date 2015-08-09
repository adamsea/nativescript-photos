import observable = require("data/observable");
import observableArray = require("data/observable-array");

export class PhotoViewModel extends observable.Observable {
    photos: observableArray.ObservableArray<Object> = new observableArray.ObservableArray([{title: 'Test Title 1'}, {title: 'Test Title 2'}]);

    constructor() {
        super();
        this.set("photos", this.photos);
    }

    takePhoto() {
        console.log('photo taken!');
    }
}
export var photoViewModel = new PhotoViewModel();