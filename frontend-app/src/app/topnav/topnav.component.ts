import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  route='';
//needed to inject router to be able to get to the URL of the current page
  constructor(private router:Router) { }

  ngOnInit() {
    this.route = this.router.url;
    console.log(this.route);
  }


}
