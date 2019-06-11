import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Photo } from './photo';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos (): Observable<Photo[]> {
    return this.http.get<Photo[]>(apiUrl)
      .pipe(
        tap(todos => console.log('Fetch photos')),
        catchError(this.handleError('getPhotos', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error('Error while fetching the photos', error);

      return of(result as T);
    };
  }
}
