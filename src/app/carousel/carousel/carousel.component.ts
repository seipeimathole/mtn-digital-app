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
    },
  ];

  // Controls
  public controls = {
    currentPosition: 2,
  }

  constructor(
    private _el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {

  }

  prevElement() {
    const cardsContainer = this._el.nativeElement.querySelector('.carousel-card .row')
    const cards = this._el.nativeElement.querySelectorAll('.carousel-card .row > div')
    const tmpNode = cards[0];
    cards[0].className = "col-2 box move-out-from-left";
    setTimeout(function() {
      if (cards.length > 5) {
        tmpNode.classList.add("box--hide"); //add class to hide

        cards[5].className = "col-2 box move-to-position5-from-left";
    }
        cards[1].className = "col-2 box move-to-position1-from-left";
        cards[2].className = "col-2 box move-to-position2-from-left";
        cards[3].className = "col-4 box move-to-position3-from-left";
        cards[4].className = "col-2 box move-to-position4-from-left";

      cards[0].remove()
    }, 500);
    cardsContainer.insertAdjacentHTML('beforeend', tmpNode.outerHTML)
  }

  nextElement() {
    const cards = this._el.nativeElement.querySelectorAll('.carousel-card .row > div')
    const cardsContainer = this._el.nativeElement.querySelector('.carousel-card .row')
    const noOfCards = cards.length;
    const tmpNode = cards[noOfCards - 1];
    cards[4].className = "col-2 box move-out-from-right";
    setTimeout(function() {
        if (noOfCards > 4) {
            cards[4].className = "col-2 box box--hide";
        }
        tmpNode.classList.remove("box--hide");
        cards[noOfCards - 1].remove();
        cardsContainer.insertBefore(tmpNode, cardsContainer.firstChild);
        tmpNode.className = "col-2 box move-to-position1-from-right";
        cards[0].className = "col-2 box move-to-position2-from-right";
        cards[1].className = "col-4 box move-to-position3-from-right";
        cards[2].className = "col-2 box move-to-position4-from-right";
        cards[3].className = "col-2 box move-to-position5-from-right";
    }, 500);
  }
}
