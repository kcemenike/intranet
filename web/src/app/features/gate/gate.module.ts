import { NgModule } from '@angular/core';
import { GateComponent } from './gate.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GateEffects } from './gate.effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './gate.reducer';
import { GATE_ROUTES } from './gate.routes';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    GateComponent, 
    SignInComponent, 
    SignOutComponent, 
    SignUpComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(GATE_ROUTES),
    StoreModule.forFeature(fromReducer.gateFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([GateEffects]),
  ]
})
export class GateModule { }
