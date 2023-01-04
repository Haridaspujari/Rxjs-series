import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild("startBtn") startBtn: ElementRef | any;


  constructor() { 
    let result2 : any= document.getElementById("result2")
    result2.innerHTML='Hari'
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let result1 = document.getElementById("result1")
    fromEvent(this.startBtn.nativeElement, 'click').subscribe(res => {

    })

  }

  print(){}
}
