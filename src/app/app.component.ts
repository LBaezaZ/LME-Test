import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular';

  tittle = 'Obtener datos JSON';
  public listOfData:any=[]

  constructor(private GetdataService:GetdataService){

  }

  ngOnInit():void {
    this.loadData();
  }

  public loadData(){
    this.GetdataService.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      console.log(data);
      this.listOfData = data;
    })
  }

}
