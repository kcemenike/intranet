import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Sidebar } from 'src/app/webgets/sidebar/sidebar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebar$: Observable<Sidebar>

  constructor(
    public appService: AppService,
  ) { 
    this.sidebar$ = this.appService.sidebar()
  }

  ngOnInit() {
  }

}
