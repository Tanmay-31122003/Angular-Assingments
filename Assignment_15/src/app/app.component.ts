import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})

export class AppComponent 
{
  constructor(public fbobj : FormBuilder)
  {
  }

  TanmayForm = this.fbobj.group(
    {
      // Add Multiple validations
      firstname :['Tanmay', [Validators.required, Validators.minLength(5)] ],
      lastname :['Bagal', [Validators.required, Validators.minLength(5)] ],
      Email : ['',Validators.required],
      Phone : ['',Validators.required],
      Comments : ['',Validators.required],
      Address : this.fbobj.group(
        {
          City :['', [Validators.required, Validators.minLength(4)] ],
          State : [''], 
          ZIP_code :['']
        }
      )
    }
  );

}