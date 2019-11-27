import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PersonContract, ActionsContract } from 'src/app/services/contracts';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export interface Sidebar{
  person: PersonContract
  actions: {
    primary: ActionsContract[],
    secondary: ActionsContract[],
    tertiary: ActionsContract[],
    person: ActionsContract[],
  },
  sidebarStatus: boolean,
}

@Component({
  selector: 'wg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sidebar: Sidebar;
  
  constructor() { }

  ngOnInit() { }

}
