import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  result:any=[]
  id:any=""
  age=""
  username=""
  canme=""

  constructor(private api : ApiService)
  {
        this.id =   Number(localStorage.getItem("id"));
        
        api.search(this.id).subscribe(
          (response:any)=>
          {
              console.log(response[0].age)
              this.age=response[0].age
              this.username= response[0].username
              this.canme=response[0].canme
              this.result = response
          }
        )
    
  }


  update=()=>
  {
    console.log(this.age)
    console.log(this.username)
    console.log(this.id)
    console.log(this.result[0].canme)
    console.log(this.result[0].password)

    let data :any = {"id":this.id,"canme":this.canme,"age":this.age,"username":this.username,"password":this.result[0].password}
    this.api.update(data).subscribe(
     (response:any)=>
     {
       console.log(response)
     }
    )
  }

}
