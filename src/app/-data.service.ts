import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  depthPlate = [0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1, 1.1, 1.2, 1.5, 2, 2.5];
  materialExecution = [{name:'Оцинкованная сталь',val:0},{name:'Нержавеющая сталь 304',val:1},{name:'Нержавеющая сталь 316',val:2},{name:'Горячее цинкование',val:3}];
  typePipeline = [
    {name:'Труба ГОСТ 1060-83, DIN 2448',val:0},
    {name:'Труба ГОСТ 3262-83, DIN 2440',val:1},
    {name:'Сточная труба, чугун, SML',val:2},
    {name:'Труба ПВХ, DIN 8062',val:3},
    {name:'Труба PE/PP',val:4},
    {name:'Сточная труба, GA, DIN 19500',val:4},
    ];
  constructor() { }
}
