import { Component, OnInit } from '@angular/core';
import {IMovie} from '../../models/movie.interface';
import {MovieService} from '../../services/movie.service'
//import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];
  searchStr: any;
  searchRes: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies.results));
  }

  searchMovies() {
    this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}
