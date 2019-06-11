import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { Photo } from './photo';
import { PhotoService } from './photo.service';

export class PhotoDataSource extends DataSource<Photo> {

  private photos: Photo[];
  private dataStream = new BehaviorSubject<Photo[]>([]);

  constructor(private photoService: PhotoService) {
    super();
  }

  connect() {
    this.photoService.getPhotos()
      .subscribe((photos: Array<Photo>) => {
        this.photos = photos;
        this.dataStream.next(this.photos);
      });

    return this.dataStream;
  }

  disconnect(): void {
  }
}
