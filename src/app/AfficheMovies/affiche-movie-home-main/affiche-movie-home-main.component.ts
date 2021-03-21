import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';
import { UploadService } from 'src/app/movies/upload.service';

import { RatingService } from '../../movie-details/rating.service';

// import { $ } from 'protractor';
import * as $ from 'jquery';
import { outputs } from '@syncfusion/ej2-angular-schedule/src/schedule/schedule.component';

@Component({
	selector: 'app-affiche-movie-home-main',
	templateUrl: './affiche-movie-home-main.component.html',
	styleUrls: [ './affiche-movie-home-main.component.css' ]
})
export class AfficheMovieHomeMainComponent implements OnInit {
	@Input() movie: Movie;
	@Input() del: Movie;
  @Output() public event = new EventEmitter();

  rate=0;

	constructor(public uploadService: UploadService,private ratingService:RatingService) {}

	ngOnInit(): void {
    this.ratingService.getRating(this.movie._id).subscribe((res:any)=>{
      console.log("-----aaaa---------------");
      console.log(res);

      this.rate= res;

    });
  }

	fun_del(x: any) {
		this.uploadService.deleteMovie(x).subscribe();
		$(`#${x}`).fadeOut(400);
	}

	fun_update(x: any) {
		this.uploadService.updateMovie(x);
		$(`#${x}`).fadeOut(400);
	}

	show(x: any) {
    this.event.emit(this.movie._id);
    this.movie.rating ="5.toString();"
		$('button.upload').show('slow');
		$('div.update').show('slow');
		$('div.upload').hide('slow');
		$('#name').val(this.movie.name);
		$('#duration').val(this.movie.duration);
		$('#prodName').val(this.movie.prodName);
		$('#desc').val(this.movie.desc);
		$('#category').val(this.movie.category);
    $('#type').val(this.movie.type);
    $('#price').val(this.movie.price);
		$('#trailer').val(this.movie.trailer);
	}
}
