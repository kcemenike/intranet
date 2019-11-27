import { CardContract } from '../webgets/card.contract'

export interface XformToCardContract {
  toCard(data: any): CardContract
}
