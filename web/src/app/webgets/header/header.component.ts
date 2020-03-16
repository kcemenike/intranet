import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BrandContract, PersonContract, ActionsContract } from 'src/app/services/contracts';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export interface HeaderContract{
  brand: BrandContract
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
  selector: 'wg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  faBars = faBars
  faSearch = faSearch
  
  @Input() header: HeaderContract;
  @Output() search = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() { }

  onSearch(query: HTMLInputElement){
    this.search.emit(query.value)
  }

  onToggle(sidebarStatus){
    this.toggle.emit(!sidebarStatus)
  }

}
