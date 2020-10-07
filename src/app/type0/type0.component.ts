import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../-data.service';

@Component({
  selector: 'app-type0',
  templateUrl: './type0.component.html',
  styleUrls: ['./type0.component.css']
})
export class Type0Component implements OnInit {
  active_type_0 = null
  form_type_0 = {
    type: null,
    depthPlate: 0.5,
    diametr: 500,
    wPlate: 500,
    hPlate: 600,
    lPlate: 6,
    countS: 3,
    outputH: 100,
    isHeater: false,
    isVibration: false,
    directionFixture: 0,
    materialAttachment: 0,
    materialExecution: 0,
  };

  rateControl_wPlate = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_diametr = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_hPlate = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_lPlate = new FormControl('', [Validators.max(5000), Validators.min(1)]);
  rateControl_countS = new FormControl('', [Validators.max(100), Validators.min(1)]);
  rateControl_outputH = new FormControl('', [Validators.max(5000), Validators.min(0)]);
  constructor(public dS:DataService) { }
  setValueIs(v, e){
    if (e.checked){
      v = true;
    }else{
      v = false;
    }
  }
  ngOnInit(): void {
  }

}
