import { Component, OnInit } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Entity } from 'src/app/entities/entity.contract';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  
  loading$: Observable<boolean>;
  collection$: Observable<Entity[]>;

  constructor(
    private explorerService: ExplorerService,
  ) {
    console.log('kjhvjk')
    this.collection$ = this.explorerService.entity().pipe(
      mergeMap((entity) => {
        return entity.entities$
      })
    )
    this.loading$ = this.explorerService.entity().pipe(
      mergeMap((entity) => {
        console.log({entity})
        return entity.loaded$
      })
    )
  }

  ngOnInit() { }

}
