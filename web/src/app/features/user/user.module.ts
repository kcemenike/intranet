import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PreferenceComponent } from './preference/preference.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [UserComponent, DashboardComponent, ProfileComponent, ChangePasswordComponent, PreferenceComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
