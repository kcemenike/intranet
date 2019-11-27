import { UserContract } from './user.contract'
import { AddressContract } from '../webgets/card.contract'
import { ModelBaseContract } from './model-base.contract'

export type ContactType = string | 'app' | 'user'

export interface ContactContract extends ModelBaseContract {
  title?: string
  userId?: string
  summary?: string
  address?: AddressContract[]
  telephone: string
  email: string
  avatar?: string[]
  type?: ContactType
  user?: UserContract
}
