var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var PhotoViewModel = (function (_super) {
    __extends(PhotoViewModel, _super);
    function PhotoViewModel() {
        _super.call(this);
        this.photos = new observableArray.ObservableArray([{ title: 'Test Title 1' }, { title: 'Test Title 2' }]);
        this.set("photos", this.photos);
    }
    PhotoViewModel.prototype.takePhoto = function () {
        console.log('photo taken!');
    };
    return PhotoViewModel;
})(observable.Observable);
exports.PhotoViewModel = PhotoViewModel;
exports.photoViewModel = new PhotoViewModel();
