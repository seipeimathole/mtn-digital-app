import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mtn-digital-evolution-app';
  public search: any;

  constructor(private _el: ElementRef,
              private route: Router) { }

  ngOnInit() {
    this.route.navigateByUrl('/carousel'); //redirect to carousel
  }

  onSearch(event: any) {
    if (!this._el.nativeElement.contains(event.target)) {
       this.search = false;
    } else {
      this.search = true;
    }
  }
}
