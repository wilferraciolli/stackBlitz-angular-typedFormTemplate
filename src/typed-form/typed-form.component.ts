import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./typed-form.component.css'],
})
export class TypedFormComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get colors(): FormArray {
    return this.myForm.get('colors') as FormArray;
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: this.formBuilder.control('Name'),
      colors: this.formBuilder.array([
        this.formBuilder.group({ name: 'red' }),
        this.formBuilder.group({ name: 'green' }),
        this.formBuilder.group({ name: 'blue' }),
      ]),
    });
  }

  public removeColor(index: number): void {
    this.colors.removeAt(index);
  }

  public add(): void {
    this.colors.push(this.formBuilder.group({ name: '' }));
  }

  public setValueForm(): void {
    // set value must change everything on the form

    this.myForm.setValue({
      name: 'New name',
      colors: [{ name: 'red' }, { name: 'blue' }, { name: 'pink' }],
    });
  }

  public patchForm(): void {
    // patch value will just change whatever was initially declared on ngOninti

    this.myForm.patchValue({
      name: 'New name',
      // colors: [
      //   { name: 'red' },
      //   { name: 'blue' }
      // ],
    });

    this._addColorsFields(Array.of('brown', 'grey'));
  }

  private _addColorsFields(names: string[]) {
    this.colors.reset(); // This need to remove the ones left

    names.forEach((color) =>
      this.colors.push(this.formBuilder.group({ name: color }))
    );
  }
}
