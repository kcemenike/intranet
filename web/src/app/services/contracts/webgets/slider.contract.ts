import { LinkContract } from '../common/link.contract'
import { ContentContract } from './content.contract'
import { FrameContract } from './frame.contract'

export interface SlideContract extends ContentContract {
  link?: LinkContract
}

export interface SliderContract extends FrameContract {
  slides: SlideContract[]
  direction?: string | 'horizontal' | 'vertical'
  config?: any
}
