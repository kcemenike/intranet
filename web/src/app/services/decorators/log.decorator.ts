// import { environment } from "../../environments/environment";

// usage @Log()
export function Log (exceptions: string[] = [], isProduction: boolean = false): ClassDecorator {
  return function (constructor: any) {
    if (!isProduction) {
      for (let prop in this) {
        const member = this[prop]
        if (!exceptions.includes(prop)) {
          this[prop] = function (...args) {
            console.log(`%c ${constructor.name} - ${prop}`, `color: #4CAF50; font-weight: bold`, ...args)
            member && member.apply(this, args)
          }
        }
      }
    }
  }
}
