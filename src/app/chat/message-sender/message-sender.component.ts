import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { CommonsService } from '../../services/commons.service';
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

  constructor(private formBuilder: FormBuilder, private commonsService: CommonsService) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      text: ['', Validators.required],

    });

    this.formSubmitSubject
      .filter(() => this.form.valid)
      .map(() => this.form.value)
      .map(element => {
        if (this.commonsService.checkIfURL(element.text) == true) {
          element.isURL = true;
          return element;
        } else {
          return element;
        }
      }
      )
      .subscribe(this.formSubmit);
  }
}
