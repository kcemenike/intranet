import { ActionsContract } from './actions.contract'
import { FrameContract } from './frame.contract'

export interface TableContract extends FrameContract {
  columns: string[]
  rows: Object[]
  checkable?: boolean
  hasIndex?: boolean
}
