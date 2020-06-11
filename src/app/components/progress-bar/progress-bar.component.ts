import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [
  ]
})
export class ProgressBarComponent implements OnInit {

  @ViewChild('textProgress') txtProgress: ElementRef;
  @Input() legend = 'Legend';
  @Input() percentage = 50;
  @Output() minutesChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number) {

    console.log(this.txtProgress);
    this.minutesChanged.emit(this.percentage + value);
}

}
