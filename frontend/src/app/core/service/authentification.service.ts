import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url : string = environment.url;
  constructor(private http: HttpClient) {}
  sendData(api:string,data:any) : Observable<any>{
    return this.http.post(this.url+api,data)

  }
  getUsers(api:string) : Observable<any>{
    return this.http.get(this.url+api)
  }
}
