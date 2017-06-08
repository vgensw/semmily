import { Component, OnInit,ViewEncapsulation }      from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import {fadeInAnimation} from "../../core/route-animation/route.animation";

@Component({
	selector: 'ms-list',
  	templateUrl:'./list-material.html',
  	styleUrls: ['./list-material.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        "[@fadeInAnimation]": 'true'
    },
    animations: [ fadeInAnimation ]
})
export class ListOverviewComponent implements OnInit{

	constructor(private pageTitleService: PageTitleService) {}

   	ngOnInit() {
    	this.pageTitleService.setTitle("List");
   	}

	items: string[] = ['Pepper', 'Salt', 'Paprika'];

	messages: any[] = [{
	   from: 'Nancy',
	   subject: 'Brunch?',
	   message: 'Did you want to go on Sunday? I was thinking that might work.',
	   image: 'https://angular.io/resources/images/bios/julie-ralph.jpg'
	}, {
	   from: 'Mary',
	   subject: 'Summer BBQ',
	   message: 'Wish I could come, but I have some prior obligations.',
	   image: 'https://angular.io/resources/images/bios/juleskremer.jpg'
	}, {
	   from: 'Bobby',
	   subject: 'Oui oui',
	   message: 'Do you have Paris reservations for the 15th? I just booked!',
	   image: 'https://angular.io/resources/images/bios/jelbourn.jpg'
	}];

}


