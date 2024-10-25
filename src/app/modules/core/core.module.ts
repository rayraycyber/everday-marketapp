import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponentComponent } from './register-page-component/register-page-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './register-page/validators/email-validator.directive';
import { CountryValidator } from './register-page/validators/country-validator.directive';
import { CheckboxValidator } from './register-page/validators/checkbox-validator.directive';


const routes: Routes = [{path: 'register', component: RegisterPageComponentComponent}];

@NgModule({
  declarations: [
    RegisterPageComponentComponent,
    EmailValidatorDirective,
    CountryValidator,
    CheckboxValidator
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CoreModule { }
