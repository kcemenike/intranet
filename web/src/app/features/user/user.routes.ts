import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreferenceComponent } from './preference/preference.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

export const USER_ROUTES: Routes = [
    {
      path: '',
      component: UserComponent,
      children: [
        {
          path: 'change-password',
          component: ChangePasswordComponent,
  
        },
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        {
          path: 'preference', 
          component: PreferenceComponent,
        },
        {
          path: 'profile', 
          component: ProfileComponent,
        },
        {
          path: 'settings', 
          component: SettingsComponent,
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'dashboard'
        }
      ]
    }
  ]
  