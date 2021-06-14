import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input()
  placeholder: String = '';

  @Input()
  disabled: boolean = false;

  _value: any = '';
  onChange: any = () => {};
  onTouch: any = () => {};

	get value(): any {
		return this._value;
	}

	set value(val: any) {
		this._value = val;
		this.onChange(val);
		this.onTouch();
		this.cd.detectChanges();
	}

	constructor(
		private cd: ChangeDetectorRef
	) {
	}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string) {
    this.value = value;
  }


}
