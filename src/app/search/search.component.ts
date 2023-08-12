import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  id=""
  result:any = ""
  age=""
  usename=""
  constructor(private api : ApiService)
  {

  }
  
  readValues = ()=>
  {
    let data:any = Number(this.id)
    
    this.api.search(data).subscribe(
      (response:any)=>
      {
 console.log(response[0].canme)
 this.result=response
      }
    )
  }


  

}
