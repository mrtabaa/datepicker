import {Component, inject} from '@angular/core';
import {DatepickerComponent} from "./datepicker/datepicker.component";
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import moment from 'moment-jalaali';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DatepickerComponent, ReactiveFormsModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fb = inject(FormBuilder);

  dateCtrl = this.fb.control(moment(), [Validators.required]);

  min = moment().jYear(1390).startOf('jYear');
  max = moment().jYear(1410).endOf('jYear');

  printDate() {
    console.log(this.dateCtrl.value?.format('jYYYY/jMM/jDD'));
  }
}
