import {Component, InjectionToken, OnInit} from '@angular/core';
import {FormControl, Validators, FormsModule} from '@angular/forms';
// declare var THREE: any;
import * as THREE from 'three';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  MAT_INPUT_VALUE_ACCESSOR: InjectionToken<{ value: any; }>;
  title = 'kalkulator';
  active_type = null;

  active_type_3 = null;


  constructor() {

  }
  ngOnInit() {

  }


}
