import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Header } from './webgets/header/header.component';
import { AppService } from './app.service';
import { Sidebar } from './webgets/sidebar/sidebar.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  header$: Observable<Header>
  sidebar$: Observable<Sidebar>
  sidebarStatus$: Observable<boolean>
  
  constructor (
    public appService: AppService,
  ) {
    this.appService.initialise()
    this.header$ = this.appService.header()
    this.sidebar$ = this.appService.sidebar()
  }
  
  onSearch(query: string){
    console.log({query})
  }

  onToggle(status: boolean){
    this.appService.UIToggle('sidebar', status)
  }
}
