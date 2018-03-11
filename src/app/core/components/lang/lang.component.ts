import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'sga-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  @Input() selected: string;
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
