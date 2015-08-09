var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var camera = require("camera");
var PhotoViewModel = (function (_super) {
    __extends(PhotoViewModel, _super);
    function PhotoViewModel() {
        _super.call(this);
        this.counter = 1;
        this.photos = new observableArray.ObservableArray([]);
        this.set("photos", this.photos);
    }
    PhotoViewModel.prototype.takePhoto = function () {
        var _this = this;
        camera.takePicture({ width: 300, height: 300, keepAspectRatio: true }).then(function (capture) {
            var photo = {
                title: 'Photo ' + _this.counter++,
                src: capture
            };
            _this.photos.push(photo);
        });
    };
    return PhotoViewModel;
})(observable.Observable);
exports.PhotoViewModel = PhotoViewModel;
exports.photoViewModel = new PhotoViewModel();
