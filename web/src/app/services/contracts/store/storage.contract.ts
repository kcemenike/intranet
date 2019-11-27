import { Observable } from 'rxjs'

export interface StorageContract<M>{
    get(key?: string): M[];
    set(key: string, value: any): M[];
    set(keyValue: Object): M[];
    set(keyOrKeyValue: string | Object, value?: any): M[];
    remove(key: string): M[];
    remove(keys: string[]): M[];
    remove(keyOrKeys: string | string[]): M[];
    clear(): M[];
}
