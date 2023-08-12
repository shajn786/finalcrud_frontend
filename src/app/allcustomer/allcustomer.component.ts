import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.css']
})
export class AllcustomerComponent {

  result:any = []

constructor(private api : ApiService)
{
  api.allcustomer().subscribe(
    (response:any)=>
    {
       console.log (response)
       this.result = response
    }
  )
}

}
