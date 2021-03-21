import { UserApiService } from './../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import {RatingService} from '../movie-details/rating.service';

import * as $ from 'jquery';
@Component({
	selector: 'app-catalog1',
	templateUrl: './catalog1.component.html',
	styleUrls: [ './catalog1.component.css' ]
})
export class Catalog1Component implements OnInit {
	items = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	public movies;
	public filtered_movies;

	constructor(private apiService: UserApiService,private ratingService:RatingService) {}

	ngOnInit(): void {
		this.apiService.getMovies().subscribe((res: any) => {
			console.log(res);
			this.movies = res.data;
			this.filtered_movies = this.movies;
		});
	}

	filter() {
		var type = $('#type').val();
		var start = parseFloat($('#filter__imbd-start').text());
		var end = parseFloat($('#filter__imbd-end').text());
		if (type == 'All Types') {
			this.filtered_movies = this.movies.filter((movie) => {

        this.ratingService.getRating(movie._id).subscribe((res:any)=>{
          console.log("-----aaaa---------------");
          console.log(res);
          movie.rating = res;

        });

				return start <= parseFloat(movie.rating) && parseFloat(movie.rating) <= end;
			});
		} else {
			this.filtered_movies = this.movies.filter((movie) => {

        this.ratingService.getRating(movie._id).subscribe((res:any)=>{
          console.log("-----aaaa---------------");
          console.log(res);
          movie.rating = res;

        });
				return movie.type == type && start<= parseFloat(movie.rating) && parseFloat(movie.rating) <= end;
			});
		}
  }


}
