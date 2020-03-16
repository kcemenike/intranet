import { Component, OnInit } from '@angular/core';
import { ArticleContract } from 'src/app/webgets/article/article.contract';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  faChevronRight = faChevronRight

  articles: ArticleContract[] = [
    {
      title: 'Trans Amadi Power Plant',
      description: 'Sited in a land area of about 4 Hectares, Trans-Amadi plant has a total installed capacity of 136MW. The plant was commissioned in 2 phases. Phase I consists of a 3 x 12MW solar mars gas turbines commissioned in 2002, while Phase II consists of 4 x 25 MW Nuovo Pignone frame gas turbines commissioned in 2009.',
      avatar: { url: 'assets/imgs/trans-amadi.jpg'},
      tags: ['Trans Amadi'],
      link: { url: '/about' }
    },
    {
      title: 'Elem Power Plante',
      description: 'Eleme is perhaps the first of the FIPL plant to be constructed. It was a previously dilapidated and non-functioning power station. In 2001, the 20MW GE LM2500 Gas turbine at Eleme was refurbished and commissioned by FIPL. However, due to operational difficulties, FIPL took a pragmatic step to trade-in the old 20MW GE LM2500 and expand the capacity at this station through the procurement of 3x25MW Frame 5 Nuovo Pignone Gas turbines.',
      avatar: { url: 'assets/imgs/eleme.jpg' },
      tags: ['Eleme'],
      link: { url: '/about' }
    },
    {
      title: 'Omoku Power Plant',
      description: 'The Omoku plant has six units of 25MW GE Nuovo Pignone heavy duty gas turbines, making a total of 150MW installed capacity. The plant generates power and transmits to the national grid via its on-Site 132KV switching facility through Rumuosi Transmission Substation.',
      avatar: { url: 'assets/imgs/omoku-plant.jpg' },
      tags: ['Omoku'],
      link: { url: '/about' }
    },
    {
      title: 'Afam Power Plant',
      description: 'The Afam Power Plant is the newest and biggest of the FIPL’s projects. It is made up of 2 phases. The contract for Engineering, Procurement and Construction (EPC) of the first and second phases were awarded in 2010 and 2011 respectively to Saipem, a subsidiary of the Italian Oil giant, Eni. At present, Phase 1 is operational with an installed GE (formerly Alstom) GT13E2 gas turbine of 180MW capacity, exporting an average of 3500MWH per day into the national grid.',
      avatar: { url: 'assets/imgs/afam-plant.jpg' },
      tags: ['Afam'],
      link: { url: '/about' }
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
