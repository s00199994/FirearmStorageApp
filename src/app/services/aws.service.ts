import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gun } from '../interface/gun';

@Injectable({
  providedIn: 'root'
})

export class AwsService {

  private locker_1_Endpoint = "https://nccj0wlvk3.execute-api.eu-west-1.amazonaws.com/prod"
  private locker_2_Endpoint = "https://6m9c8kzmv9.execute-api.eu-west-1.amazonaws.com/prod"

  constructor(private http: HttpClient) { }

  addLocker1(gun: Gun): Observable<any> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    return this.http.post<any>(this.locker_1_Endpoint + '/post', gun, { headers });
  }

  addLocker2(gun: Gun): Observable<any> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    return this.http.post<any>(this.locker_2_Endpoint + '/post', gun, { headers });
  }

  getLocker1(): Observable<Gun[]> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    return this.http
      .get<any[]>(this.locker_1_Endpoint + '/get', { headers })
      .pipe(
        map((data) =>
        data.map((item) => ({
          id: item.id,
          make: item.make,
          serialNumber: item.serialNumber,
          type: item.type,
          logNumber: item.logNumber
        })
        ))
      );
  }

  getLocker2(): Observable<Gun[]> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    return this.http
      .get<any[]>(this.locker_1_Endpoint + '/get', { headers })
      .pipe(
        map((data) =>
        data.map((item) => ({
          id: item.id,
          make: item.make,
          serialNumber: item.serialNumber,
          type: item.type,
          logNumber: item.logNumber
        })
        ))
      );
  }
}
