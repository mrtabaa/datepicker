import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import moment, { Moment } from 'moment-jalaali';
import { CommonModule } from "@angular/common";
import { JALALI_DATE_PROVIDERS } from './helpers/jalali-providers';

@Component({
  selector: 'app-datepicker',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [
    ...JALALI_DATE_PROVIDERS
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
 /** Optional min/max from parent */
  @Input() minDate?: Moment;
  @Input() maxDate?: Moment;

  value: Moment | null = null;

  // Callbacks registered by Angular forms API
  private onChange: (value: Moment | null) => void = () => {};
  private onTouched: () => void = () => {};

  // ---- ControlValueAccessor implementation ----

  writeValue(value: Moment | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Moment | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // you can disable the input here if needed
  }

  // ---- Event handlers ----

  onDateChange(date: Moment | null): void {
    this.value = date;
    this.onChange(date);
    this.onTouched();
  }
}
