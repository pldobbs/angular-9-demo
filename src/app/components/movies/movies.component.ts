import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService:MoviesService) {
    this.movies = [];
   }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

}