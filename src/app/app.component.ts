import { Component, inject } from '@angular/core';
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import moment from 'moment-jalaali'; 

@Component({
  selector: 'app-root',
  imports: [CommonModule, DatepickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fb = inject(FormBuilder);

  dateCtrl = this.fb.control(moment(), [Validators.required]);

  min = moment().jYear(1390).startOf('jYear');
  max = moment().jYear(1410).endOf('jYear');
}
