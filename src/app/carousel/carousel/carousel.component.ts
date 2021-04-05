import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // carousel object
    public carousel = [
      {
        img:'small-card.png',
        title: 'Mobile internet',
        subtitle: false,
        subtitleText: 'start here',
        current: false
      },
      {
        img:'small-card.png',
        title: 'Home internet',
        subtitle: false,
        subtitleText: 'start here',
        current: false,

      },
      {
        img:'big-card.png',
        title: 'Get a device',
        subtitle: false,
        subtitleText: 'start here',
        current: true,

      },
      {
        img:'small-card.png',
        title: 'Add a phone-line',
        subtitle: false,
        subtitleText: 'start here',
        current: false,

      },
      {
        img:'small-card.png',
        title: 'Upgrade',
        subtitle: false,
        subtitleText: 'start here',
        current: false,
      }

    ];

    // Controls

    public controls = {
      totalItems: 5,
      currentPosition: 2,
    }


    constructor(private _el: ElementRef,
                private render: Renderer2) { }

    ngOnInit() {

    }

    prevElement() {
      // const elements = this._el.nativeElement.querySelectorAll('.carousel-card .row > div')
      // this.render.setStylthe(elements[0], 'width', '0px');
      // is.carousel[2].current = false;
      // this.carousel[3].current = true;
      this.moveCarouselArray(this.carousel, 0, 4);
      this.controls.currentPosition--;
      this.carousel.forEach(element => {
        element.current = false;
      });
      this.carousel[2].current = true;
    }

    nextElement() {
      this.moveCarouselArray(this.carousel, 4, 0);
      this.controls.currentPosition++;
      this.carousel.forEach(element => {
        element.current = false;
      });
      this.carousel[2].current = true;
    }

    moveCarouselArray(arr: any, from: any, to: any) {
      // Delete the item from it's current position
      const item = arr.splice(from, 1);

      // Move the item to its new position
       arr.splice(to, 0, item[0]);
    }

}
