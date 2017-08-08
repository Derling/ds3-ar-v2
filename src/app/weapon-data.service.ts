import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeaponDataService {
  private weaponsUrl = 'http://localhost:3000/weapons';
  constructor(private http: Http) {}
  getWeapons(): Promise<any> {
    return this.http.get(this.weaponsUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occured',error);
  }
}
