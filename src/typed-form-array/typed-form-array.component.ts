import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserForm } from './user-form';

@Component({
  selector: 'app-typed-form-array',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './typed-form-array.component.html',
  styleUrls: ['./typed-form-array.component.css'],
})
export class TypedFormArrayComponent implements OnInit {
  myForm!: FormGroup<UserForm>;
  // myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get roleIds(): FormArray {
    return this.myForm.get('roleIds') as FormArray;
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group<UserForm>({
      username: this.formBuilder.nonNullable.control('Name'),
      roleIds: this.formBuilder.array([
        this.formBuilder.group({ id: 'id1' }),
        this.formBuilder.group({ id: 'id2' }),
        this.formBuilder.group({ id: 'id3' }),
      ]),
    });
  }

  public removeColor(index: number): void {
    this.roleIds.removeAt(index);
  }

  public add(): void {
    this.roleIds.push(this.formBuilder.group({ id: '' }));
  }

  public setValueForm(): void {
    // set value must change everything on the form, but the lenght of the array must match
    this.myForm.setValue({
      username: 'New name',
      roleIds: [{ id: 'red' }, { id: 'blue' }, { id: 'pink' }],
    });
  }

  public patchForm(): void {
    // patch value will just change whatever was initially declared on ngOninti
    this.myForm.patchValue({
      username: 'New name',
    });

    this._addColorsFields(Array.of('brown', 'grey'));
  }

  private _addColorsFields(ids: string[]) {
    // This need to remove the ones left
    while (this.roleIds.length !== 0) {
      this.roleIds.removeAt(0);
    }

    ids.forEach((id) => this.roleIds.push(this.formBuilder.group({ id: id })));
  }
}
