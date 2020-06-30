import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder

  ) { }
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[null,],
      number:[null,],
      email: [null,],
      password: [null,]
    });
  }




  submit() {
    if (!this.signupForm.valid) {
      return;
    }
    console.log(this.signupForm.value);
  }
}
