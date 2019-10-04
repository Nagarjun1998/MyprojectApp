import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
mp=[];
  constructor(private serv:SearchService) { 
  this.mp=this.serv.emp;
  console.log(this.mp);}
  ngOnInit() {
  }

}
