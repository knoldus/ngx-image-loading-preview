import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './awesome-image-loader.component.html',
  styleUrls: ['./awesome-image-loader.component.scss']
})
export class AwesomeImageLoaderComponent {

  @Input() imageLoading: boolean = false;
  @Input() imageLoaded: boolean = false;
  @Input() imageUrl: string = "";
  @Input() imageLoadingUrl: string = "";
  @Input() noImageUrl: string = "";
  @Input() alt: string = "";
  @Input() imageId: string = "";
  @Input() imageHeight: string = "";
  @Input() imageWidth: string = "";
  @Input() imageClass: string = "";

  onImageLoaded() {
    this.imageLoading = false;
  }

  handleEmptyImage() {
    this.imageLoading = false;
    this.imageUrl = this.noImageUrl;
  }

}
