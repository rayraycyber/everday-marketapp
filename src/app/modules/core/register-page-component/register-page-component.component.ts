import { Component, } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register-page-component',
  templateUrl: './register-page-component.component.html',
  styleUrl: './register-page-component.component.css'
})
export class RegisterPageComponentComponent {
  formData = {
    flName: 'Raymond',
    eMail: 'roberton@college.com',
    pNumber: '01234456789',
    dateOB: '',
    streetAdrs: '',
    pRovince: '',
    wCountry: '',
    cBox: '',
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      
      this.router.navigate(['/products']); 
    }
  }
}
