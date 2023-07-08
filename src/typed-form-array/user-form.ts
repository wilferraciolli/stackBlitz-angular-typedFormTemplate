import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UserRole } from './user-role';

export interface UserForm {
  username: FormControl<string>;
  roleIds: FormArray<FormGroup<UserRole>>;
}
