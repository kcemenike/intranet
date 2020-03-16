import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromReducer from './gate.reducer';
import * as fromActions from './gate.actions';
import * as fromSelectors from './gate.selectors';
import { Observable } from 'rxjs';
import { UserContract } from 'src/app/services/contracts';

@Injectable({
  providedIn: 'root'
})
export class GateService {

  constructor(
    public store: Store<fromReducer.State>,
  ) { }
 
  initialise (): void{
    this.store.dispatch(fromActions.Initialise())
  }
 
  signInStart (user: UserContract): void{
    this.store.dispatch(fromActions.SignInStart(user))
  }
 
  signInSuccess (): void{
    this.store.dispatch(fromActions.SignInSuccess())
  }
 
  signInFailure (reason: string): void{
    this.store.dispatch(fromActions.SignInFailure({ reason }))
  }
 
  signUpStart (user: UserContract): void{
    this.store.dispatch(fromActions.SignUpStart(user))
  }
 
  signUpSuccess (): void{
    this.store.dispatch(fromActions.SignUpSuccess())
  }
 
  signUpFailure (reason: string): void{
    this.store.dispatch(fromActions.SignUpFailure({ reason }))
  }
 
  signOutStart (): void{
    this.store.dispatch(fromActions.SignOutStart())
  }
 
  signOutSuccess (): void{
    this.store.dispatch(fromActions.SignOutSuccess())
  }
 
  signOutFailure (reason: string): void{
    this.store.dispatch(fromActions.SignOutFailure({ reason }))
  }
 
  upsertUser (user: UserContract): void{
    this.store.dispatch(fromActions.UpsertUser(user))
  }
 
  resetUser (): void{
    this.store.dispatch(fromActions.ResetUser())
  }
 
  state (): Observable<fromReducer.State>{
    return this.store.pipe(
      select(fromSelectors.state),
    )
  }
 
  user (): Observable<UserContract>{
    return this.store.pipe(
      select(fromSelectors.user),
    )
  }

}
