import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {
  fulldatatobeviewed: any;

  constructor(private Router: Router) {}

  ngOnInit() {
    if (history.state.name) {
      this.fulldatatobeviewed = history.state;
    } else {
      this.Router.navigate(['/']);
    }
  }
}
