import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, tap } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceName = "";
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }
  constructor(private http: HttpClient) { }

  getServiceName(name:string){
    const title = "CrudService";
    this.serviceName = name;
    return title;
  }
  getAll(){
    return this.http.get(`${API_URL}/tutorials`);
  }
  saveNew(tutorial: any){
    return this.http.post(`${API_URL}/tutorials`, tutorial).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    );
  }
}
