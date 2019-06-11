import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { Photo } from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  photos: Array<Photo> = [];

  constructor(private photoService: PhotoService) {
    photoService.getPhotos().subscribe(photos => this.photos = photos);
  }
}
