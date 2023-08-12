import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {

  cname=""
  age=""
  username=""
  password=""

  constructor(private api :ApiService)
  {

  }


  readValues = ()=>
  {
    let data:any = {"canme":this.cname,"age":this.age,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addCustomer(data).subscribe(
      (response:any)=>
      {
         console.log(response.message)
         if(response.message == "added sucessfully")
         {
          alert("added")
         }
         else
         {
          alert("not added")
         }
      }
    )
  }

}
