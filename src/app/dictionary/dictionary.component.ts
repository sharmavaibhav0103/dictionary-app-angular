import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  word;
  loader: number = 0;
  response;
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  addToDoItem(a: string){
    this.loader = 1;

    this._http.getDefinition(a).subscribe((data: []) => {
      this.response = data;
      this.loader = 0;
      console.log(this.response);
    });
  }

}