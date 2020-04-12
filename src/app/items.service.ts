import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Sample} from '../app/sample';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  private arr = [[200142, " 30 lining"],
  [1911157, " blouse pcs"],
  [200241, " blouse pcs"],
  [1911172, " poly blouse"],
  [2001258, " dupta"],
  [2001257, " leggings"],
  [1911207, " patiyala"],
  [2001283, " poplin"],
  [200242, " madi lungi"],
  [191275, " madi lungi"],
  [1912121, " kerchief"],
  [2003150, " arthi (75 - 90)"],
  [2001256, " sareefall"],
  [200267, " black berry"],
  [191274, " kerchief"],
  [1912227, " metty towel"],
  [200127, " kunjam"],
  [2003151, " bra slips"],
  [200243, " readymade shirt half"],
  [200244, " readymade shirt full"],
  [200266, " kumki towel 30*60"],
  [191117, " svt inskirt 7 part"],
  [191118, " svt inskirt 8 part"],
  [191119, " svt inskirt 7 overlock"],
  [1911267, " svt inskirt 8 overlock"],
  [2003153, " baby slips"],
  [2003152, " abi slips"]
];

public sampleData: Sample[] = [{name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
{name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
{name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6}];


  getItems(): Observable<any> {
    return of(this.arr);
  }
}
