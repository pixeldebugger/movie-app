import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie } from '../models/movie.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MovieService {

  constructor(private httpClient: HttpClient) {}

  public getMovies(): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL}/movie/popular?api_key=${environment.API_KEY}`);
  }

  searchMovies(searchStr: string | undefined): Observable<any> {
    return this.httpClient.get(`${environment.BASE_URL}/search/movie?api_key=${environment.API_KEY}&query=${searchStr}`);
  }
  // public getMovie(movieId: number): Observable<IMovie> {
  //   return this.httpClient.get<IMovie>(`${environment.BASE_URL}/movie/${movieId}`, this.httpOptions)
  // }
}
