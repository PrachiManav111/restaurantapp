import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {
  name = ""
  email = ""
  mobile = ""
  address = ""
  service = ""
  message:any="" 
  registerFormgroup!: FormGroup;
  submitted: any = false;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormgroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      service: ['', Validators.required],
    });
  }
  

  get f() {
    return this.registerFormgroup.controls;
  } 
  onClick() {
    this.submitted = true;
    this.message='';
    
    
    if(this.registerFormgroup.invalid) {
      return;
    } 

    
  this.message=alert("Login Successfully");
      
  
}
}
