import { Component, OnInit, ElementRef, Input } from '@angular/core';
//import the native angular http and respone libraries
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";

const uploadurl = 'localhost:3000/image/fileupload';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  constructor(private http: Http, private el: ElementRef) { }

  ngOnInit() {
  }
}
