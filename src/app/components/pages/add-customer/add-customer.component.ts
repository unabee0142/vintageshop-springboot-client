import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  CustomerForm!: FormGroup;
  drink : any;
  constructor(private service: CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.CustomerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      tel: new FormControl(),
      address: new FormControl()
    });
  }

  addCustomer(){
    let customer = {
      name:this.CustomerForm.value.name,
      email: this.CustomerForm.value.email,
      tel: this.CustomerForm.value.tel,
      address: this.CustomerForm.value.address
    }
    this.service.addCustomer(customer).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a customer complete."){
        window.alert("Add Complete");
        this.router.navigate(["/customer"]);
      }else{
        window.alert("Add Not Complete !");
        this.router.navigate(["/customer/addcustomer"]);
      }
      
    });
  }
}
