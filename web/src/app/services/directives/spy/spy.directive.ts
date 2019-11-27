import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core'
import { SpyService } from './spy.service'

@Directive({
  selector: '[spy]', // <a [spy]="['click', 'eventName2']">Sample</a>
})
export class SpyDirective implements OnInit, OnDestroy {
  private listerner: () => void

  /**
   * must be standard angular event name
   * spying ativity is restricted to the following events:
   */
  @Input('spy') events: string[]

  private allowedEvents: string[] = [
    'load',
    'online',
    'offline',
    'focus',
    'blur',
    'submit',
    'resize',
    'scroll',
    'select',
    'cut',
    'copy',
    'paste',
    'mousemove',
    'click',
    'dbclick',
    'contextmenu',
    'wheel',
  ]

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private spy: SpyService,
  ) {}

  ngOnInit() {
    this.events.forEach((eventName) => {
      this.listerner = this.renderer.listen(
        this.el.nativeElement,
        eventName,
        (event) => {
          this.spy.onEvent({
            element: this.el.nativeElement.tagName,
            event: eventName,
            value: event,
          })
        }
      )
    })
  }

  ngOnDestroy() {
    this.listerner()
    this.spy.close()
  }
}
