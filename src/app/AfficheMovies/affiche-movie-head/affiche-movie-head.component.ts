import { ActivatedRoute } from '@angular/router';
import { UserApiService } from './../../services/user-api.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/movies/movie.model';
import {RatingService} from '../../movie-details/rating.service'

@Component({
  selector: 'app-affiche-movie-head',
  templateUrl: './affiche-movie-head.component.html',
  styleUrls: ['./affiche-movie-head.component.css']
})
export class AfficheMovieHeadComponent implements OnInit {

  @Input() movie : Movie ;
  movies;
  public _movie;
    //  user=[] ;

  name : String;
  // @Output() MessageEmit = new EventEmitter <string>();

  rate;

    constructor(private apiService: UserApiService,private _route: ActivatedRoute,private ratingService:RatingService ) { }

    ngOnInit(): void {
      this.ratingService.getRating(this.movie._id).subscribe((res:any)=>{
        console.log("-----aaaa---------------");
        console.log(res);
        this.rate = res;

      });
    }

}
