import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {
  movie: Movie

  constructor(private actRoute:ActivatedRoute, private movieService:MoviesService) { 
    this.movie = { id: '' };
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.actRoute.snapshot.params.id).subscribe(movie => {
      this.movie = movie;
      console.log(this.movie)
    });
  }

}
