import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../-data.service';

@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.css']
})
export class Type1Component implements OnInit {
  form_type = {
    lengthPipeline: 10,
    materialExecution: null,
    typePipeline: null,
    countS:null,
    outputH:null

  };
  constructor(public dS:DataService) { }

  rateControl_lengthPipeline = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_countS = new FormControl('', [Validators.max(100), Validators.min(1)]);
  rateControl_outputH = new FormControl('', [Validators.max(5000), Validators.min(0)]);
  ngOnInit(): void {
  }

}
