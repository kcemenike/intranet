import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from 'src/app/entities/entity.contract';
import { ExplorerService } from './explorer.service';
import { ActivatedRoute } from '@angular/router';
import { singular } from 'src/app/services/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  loading$: Observable<boolean>;
  entities$: Observable<(Entity)[]>;

  constructor(
    private explorerService: ExplorerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {    
    // this.explorer.initialise()
    this.route.parent.url.subscribe((urlSegment) => {
      if (urlSegment.length > 0) {
        this.explorerService.entity(singular(urlSegment[0].path)).getAll()
      }
    })
  }

}
