import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.userForm  = this._fb.group({
      name: ['', Validators.required ],
      email: ['',Validators.required],
      address:this._fb.array([this.buildForm()])
    })
  }

  buildForm()
  {
    return this._fb.group({ 
        addressLine1: ['',Validators.required],
        city: ['',Validators.required],
        zip: ['']
      })
  }

  addNewAddress()
  {
    const addressControl = <FormArray>this.userForm.controls['address'];
    console.log(addressControl);
    addressControl.push(this.buildForm());
  }

  removeAddress(i: number)
  {
     const addressControl = <FormArray>this.userForm.controls['address'];
     addressControl.removeAt(i);
  }

}
