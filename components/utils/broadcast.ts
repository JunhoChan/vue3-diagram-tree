/**
 * @description 广播事件
 */

export default class Broadcast {
  protected _events: Map<string, unknown>
  static on: () => void
  constructor() {
    this._events = new Map()
  }
  // bind listener
  on(type: string, fn: (val: any) => void) {
    let handlers: any = this._events.get(type)
    if (!handlers) {
      handlers = []
      handlers.push(fn)
      this._events.set(type, handlers)
    } else {
      handlers.push(fn)
    }
  }
  // off listener
  off(type: string) {
    let handlers: any = this._events.get(type)
    if (!handlers || !handlers.length) return
    handlers = []
    this._events.delete(type)
  }
  // notice
  emit(type: string, ...args: any[]) {
    const handlers: any = this._events.get(type)
    if (!handlers || handlers.length === 0) return
    for (let i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, args)
    }
  }
}
