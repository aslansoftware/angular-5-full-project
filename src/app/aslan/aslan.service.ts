import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IAslan, IFood} from './aslan';

@Injectable()
export class AslanService {
  private _aslanUrl = './api/aslan/aslan.json';
  private _foodUrl = './api/aslan/foods.json';

  constructor(private _http: HttpClient) { }

  getFoods(): Observable<IFood[]> {
    return this._http.get<IFood[]>(this._foodUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getFood(id: string): Observable<IFood> {
    return this.getFoods()
      .map((foods: IFood[]) => foods.find(p => p.foodName === id));
  }
  getAslans(): Observable<IAslan[]> {
    return this._http.get<IAslan[]>(this._aslanUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getAslan(id: number): Observable<IAslan> {
    return this.getAslans()
      .map((products: IAslan[]) => products.find(p => p.aslanId === id));
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
