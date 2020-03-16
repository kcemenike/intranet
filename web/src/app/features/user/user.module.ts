import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PreferenceComponent } from './preference/preference.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { USER_ROUTES } from './user.routes';
import { UserEffects } from './user.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './user.reducer';
import { SidebarModule } from 'src/app/webgets/sidebar/sidebar.module';

@NgModule({
  declarations: [
    UserComponent, 
    DashboardComponent, 
    ProfileComponent, 
    ChangePasswordComponent, 
    PreferenceComponent, 
    SettingsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(USER_ROUTES),
    StoreModule.forFeature(fromReducer.userFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([UserEffects]),
    SidebarModule,
  ]
})
export class UserModule { }
