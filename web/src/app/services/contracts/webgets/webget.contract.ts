import { ActionsContract } from './actions.contract'
import { ImageContract } from '../common/image.contract'
import { LinkContract } from '../common/link.contract'
import { StatusType, ThemeType } from '../types.contract'

export interface WebgetContract {
  theme?: ThemeType
  color?: string
  id?: string
  actions?: ActionsContract[]
  action?: ActionsContract
  title?: string
  description?: string
  detail?: string
  icon?: string
  avatar?: ImageContract
  status?: StatusType
  image?: ImageContract
  link?: LinkContract
}
