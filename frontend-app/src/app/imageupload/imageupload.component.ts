import { Component, OnInit, ElementRef, Input } from '@angular/core';
//import the native angular http and respone libraries
import { Http, Response, RequestOptions } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
import { ImageUploadService } from './Service/imageupload.service';


const uploadurl = 'localhost:3000/image/fileupload';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  constructor(private http: Http, private el: ElementRef, private imageuploadservice: ImageUploadService) { }

  ngOnInit() {
   
  }

  fileChange(event) {
    const URL = 'http://localhost:3000/image/imageupload';
    let fileList: FileList = event.target.files;
    console.log(fileList[0]);
    let formData = new FormData();
    formData.append('imageupload' ,fileList[0]);
    console.log(formData);
    this.http.post(URL, formData).subscribe((success) => alert('success'), (error) => alert(error));
}
}
