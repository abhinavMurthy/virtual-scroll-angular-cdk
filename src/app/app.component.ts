import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  PhotoDataSource } from './photo-data-source';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Album List - CDK Virtual Scroll';
  ds = new PhotoDataSource(this.photoService);

  constructor(private photoService: PhotoService) { }
}
