import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { TypedFormArrayComponent } from './typed-form-array/typed-form-array.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TypedFormComponent, TypedFormArrayComponent],
  template: `
    <!-- <app-typed-form/> -->
    <app-typed-form-array/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
