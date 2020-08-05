import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  res;

   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token a626bdce30be6867866de63b86513fb26ee950cd'
  });

  constructor(private http: HttpClient) { }

  getDefinition(word: string){
    return this.http.get(`https://owlbot.info/api/v4/dictionary/${word}`,
     { headers: this.headers });
  }
}