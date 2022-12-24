import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Movie, SingleMovie, Video } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'] , 
  encapsulation: ViewEncapsulation.None
})
export class SingleMovieComponent implements OnInit {

  item:SingleMovie | null = null;
  videos: Video[] = [];

  constructor(private route: ActivatedRoute, private movieServie:MoviesService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      console.log(id) ; 
      this.movieServie.getMovie(id).subscribe(movieData=>{
        this.item = movieData;
      }) ; 

      this.movieServie.getVideos(id).subscribe(videoData=>{
        this.videos = videoData;
      }) ; 
    });
  }

}
