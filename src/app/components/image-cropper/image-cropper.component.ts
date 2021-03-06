import { AfterViewInit, Component, EventEmitter, Input, Output } from "@angular/core";
import { ImageCroppedEvent, LoadedImage } from "ngx-image-cropper";

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements AfterViewInit {
  @Input() imageChangedEvent: any = '';
  croppedImage: any = '';
  @Output() callbackEvent = new EventEmitter<string>();

  ngAfterViewInit() {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.callbackEvent.emit(this.croppedImage);
  }

  imageLoaded(image?: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }
}
