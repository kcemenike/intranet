import { Observable } from 'rxjs'
import { QueryContract, QueryActionsContract } from './query.contract'

export interface StoreContract<M>{
    create(newItem: M): Observable<M>;
    retrieveOne(queries: QueryActionsContract[] | string): Observable<M>;
    retrieveMany(queries: QueryActionsContract[]| QueryContract): Observable<M[]>;
    update(id: string, newItem: M): Observable<M>;
    delete(id: string): Observable<M>;
}
