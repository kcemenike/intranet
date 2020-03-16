import { Injectable } from '@angular/core'

export type NigerianStateType = string | ''

// - Flat rate (K) D
// - K + f(state distance) B
// - K + f(state) C
// K + f(api actual distance) A

@Injectable({
  providedIn: 'root'
})
export class ShippingPricerService {
  //get config from app preference
  flatRate() {}
  distanceRate(distance: number) {}
  stateRate(state: NigerianStateType) {}
  dhlRate(state: NigerianStateType) {}
  fidexRate(state: NigerianStateType) {}
}
