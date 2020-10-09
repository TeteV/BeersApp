import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Bicycle } from '../models/bicycle';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/bicycles';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  currentBicycleId: number;

  constructor(private http: HttpClient) { }

  setCurrentBicyleId(id: number) {
    this.currentBicycleId = id;
  }

  getCurrentBicycleId(): number {
    return this.currentBicycleId;
  }

  getBicycleById(id): Observable<Bicycle[]> {
    console.log("Estoy en get B ID: " + id)
    return this.http.get<Bicycle[]>(apiUrl + "/" + id);
  }

  getBicycles(): Observable<Bicycle[]> {
    return this.http.get<Bicycle[]>(apiUrl);
  }

  deleteBicycle(id: number): Observable<any> {
    return this.http.delete(apiUrl + "/" + id);
  }

  addBicycle(bicycle: Bicycle): Observable<any> {

    let bodyencoded = new URLSearchParams();
    bodyencoded.append("model", bicycle.model);
    bodyencoded.append("brand", bicycle.brand);
    let body = bodyencoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }
//id, bicycle: Bicycle
  updateBicycle(id:number, bicycle: Bicycle): Observable<any> {
    let bodyencoded = new URLSearchParams();
    bodyencoded.append("model", bicycle.model);
    bodyencoded.append("brand", bicycle.brand);
    let body = bodyencoded.toString();
    console.log("id a update: "+ id)
    return this.http.put(apiUrl + '/' + id,body, httpOptions)
  }
}
