import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { customMaxLengthValidator } from '../custom-validators/custom-max-length-validator';
import { customMinLengthValidator } from '../custom-validators/custom-min-length-validator';
import { customPatternValidatorForEmail } from '../custom-validators/custom-pattern-email-validator ';
import { customPatternValidatorForPassword } from '../custom-validators/custom-pattern-password-validator ';
import { customRequiredValidator } from '../custom-validators/custom-required.validator';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  authForm!: FormGroup;

  ngOnInit(): void {
    this.authForm = new FormGroup({
      userName: new FormControl('', [
        customRequiredValidator(),
        customMinLengthValidator(4),
        customMaxLengthValidator(18),
        customPatternValidatorForEmail(),
      ]),
      userPassword: new FormControl('', [
        customRequiredValidator(),
        customMinLengthValidator(8),
        customMaxLengthValidator(12),
        customPatternValidatorForPassword(),
      ]),
    });
  }

  getErrorMsg(formControlName: string, error: string) {
    const fc = this.authForm.get(formControlName);
    if (fc!.hasError(error)) {
      return fc!.errors![error].errMsg;
    }
  }
}
