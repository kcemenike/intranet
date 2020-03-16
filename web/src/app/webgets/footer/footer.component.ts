import { Component, OnInit, Input } from '@angular/core';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ActionsContract } from 'src/app/services/contracts';

export interface FooterContract {
  links: ActionsContract[]
}

@Component({
  selector: 'wg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook
  faTwitter = faTwitter
  faLinkedin = faLinkedin
  
  @Input() footer: FooterContract;

  constructor() { }

  ngOnInit() {
  }

}
