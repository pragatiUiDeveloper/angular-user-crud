import { Component, OnInit } from '@angular/core';
import { FormUser } from "src/app/form-user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  topics=["Angular", "Ember", "Vue"];
  topicHasError = false; //initially submit btn disable is dependent on this
  submitted = false;

  formUserModel = new FormUser("Scott","scott@gmail.com" ,9876546821, "Ember","male", false ,true , "This is a template driven form");

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    console.log(this.formUserModel);
  }
}
