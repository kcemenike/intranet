import { Injectable } from "@angular/core";
import { EmailRequestPayload, EmailResponsePayload } from "../contracts";
import { RemoteStore } from "../store";
import { Observable ,  forkJoin, empty } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Config } from "./config.service";

@Injectable({
    providedIn: 'root'
})
export class EmailService{

    constructor(
        private remote: RemoteStore,
        private config: Config,
    ){}
    
    send(payload: EmailRequestPayload, callback: Function = () => {}){
        return forkJoin(
            this.config.select<string>('store.remote.urls.APIbase')
        ).pipe(
            mergeMap((APIbase) => {
                return this.remote.aPost(
                    `${APIbase}/email`,
                    payload
                )
            }),
            catchError((e) => {
                callback(e)
                return empty()
            })
        ).subscribe((response: EmailResponsePayload) => {
            callback(response)
        })
    }
}