import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  data: any = {
    firstName: 'Will',
    lastName: 'Huang',
    email: 'doggy.huang@gmail.com',
    password: '',
    repeatPassword: ''
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    // this.form = this.fb.group({
    //   firstName: ['Will', [Validators.required]],
    //   lastName: ['Huang', [Validators.required]],
    //   email: ['doggy.huang@gmail.com', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   repeatPassword: ['', [Validators.required, Validators.minLength(6)]]
    // });

    this.form = this.fb.group({
      firstName: this.fb.control('Will', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      lastName: this.fb.control('Huang', {
        validators: [Validators.required, Validators.email]
      }),
      emails: this.fb.array([
        this.fb.control('doggy.huang@gmail.com', {
          validators: [Validators.required]
        }),
        this.fb.control('abc@example.com', {
          validators: [Validators.required]
        }),
      ]),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      repeatPassword: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doSubmit(): void {
    switch (this.form.status) {
      case 'VALID':
        alert('表單送出成功!');
        console.log(this.form.value);
        // this.http.post('/save', this.form.value).subscribe(result => {
        // });
        break;
      case 'INVALID':
        alert('表單驗證失敗，無法送出表單!');
        break;
      case 'PENDING':
        alert('表單驗證進行中，請稍後再試...');
        break;
      case 'DISABLED':
        break;
    }
  }

  isInvalid(name: string): boolean {
    return (this.fc(name).touched || this.fc(name).dirty)
      && this.fc(name).invalid;
  }

  fc(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  fa(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

}
