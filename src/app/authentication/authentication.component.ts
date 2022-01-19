import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { customMaxLength } from '../custom-validators/custom-max-length-validator';
import { customMinLength } from '../custom-validators/custom-min-length-validator';
import { customPatternForEmail } from '../custom-validators/custom-pattern-email-validator ';
import { customPatternForPassword } from '../custom-validators/custom-pattern-password-validator ';
import { customRequiredValidator } from '../custom-validators/custom-required.validator';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  autForm!: FormGroup;
  userName!: FormControl;
  userPassword!: FormControl;

  ngOnInit(): void {
    this.autForm = new FormGroup({
      userName: new FormControl('', [
        customRequiredValidator(),
        customMinLength(4),
        customMaxLength(18),
        customPatternForEmail('gmail.com'),
      ]),
      userPassword: new FormControl('', [
        customRequiredValidator(),
        customMinLength(8),
        customMaxLength(12),
        customPatternForPassword(),
      ]),
    });

    this.autForm.controls['userName'].statusChanges.subscribe(
      (status: string) => {
        console.log(status);
      }
    );
  }

  getErrorMsg(formControlName: string, error: string) {
    const fc = this.autForm.get(formControlName);
    if (fc!.hasError(error)) {
      return fc!.errors![error].errMsg;
    }
  }
}
