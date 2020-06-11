import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  minutes = 60;
  degrees = 40;

  constructor() { }

  ngOnInit(): void {
  }

  changeProgressbarMinutes(event) {

    if (this.minutes > 101) {
      this.minutes = 100;
      return;
    } else if (this.minutes < -1) {
      this.minutes = 0;
      return;
    } else {
      this.minutes = event;
    }
  }



  }

