import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TypedFormComponent } from './typed-form/typed-form.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TypedFormComponent],
  template: `
    <app-typed-form></app-typed-form>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
