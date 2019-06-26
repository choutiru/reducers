import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetterService {


constructor(private httpClient: HttpClient ) { }

getAuthor(): Observable<any> {
  return this.httpClient.get(environment.api_url + 'authors');
}

}
