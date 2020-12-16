// Injectible allows us to inject into a component
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/Movie'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl:string =  'https://ghibliapi.herokuapp.com/films'

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
  }

  getMovie(id:String):Observable<Movie> {
    return this.http.get<Movie>(`${this.moviesUrl}/${id}`)
  }
}
