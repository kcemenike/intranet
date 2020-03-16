import { Component, OnInit } from '@angular/core';
import { GateService } from '../gate.service';
import { Observable, range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {
  
  value: number = 100
  start = 100;

  constructor(
    private gateService: GateService,
  ) {
    range(0, this.start + 1).pipe(
      map(i => this.start - i)
    )
    .subscribe(i => {
      console.log(i)
      this.value += 1
    });

  }

  ngOnInit() { 
    this.gateService.signOutStart()
  }

}
