import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent {
  @Input() public submitButtonText = 'Submit';
  public form: FormGroup;

  @Output() formSubmit = new EventEmitter();
  formSubmitSubject = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      text: ['', Validators.required],

    });

    this.formSubmitSubject
      .filter(() => this.form.valid)
      .map(() => this.form.value)
      .map(element => {
        if (this.checkIfURL(element.text)) {
          element.isURL = true;
          return element;
        } else {
          return element;
        }
      }
      )
      .subscribe(this.formSubmit);
  }


  checkIfURL(element: string): boolean {
    let isURL: boolean = false
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (element.match(regex)) {
      isURL = true;
    }
    return isURL;
  }
}
