import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
// https://codepen.io/mo7amedk7alid29/pen/dRoMwo?editors=1100 
// https://codepen.io/girlgeek/pen/OgqBgj
// Timeline refer
@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  constructor(private elRef: ElementRef, private renderer : Renderer2) { }
  div: any

  @HostListener('mouseenter')  mouseenter() {
    this.div = this.elRef.nativeElement.querySelector('.tooltip')
    if(this.div !== null){
      this.toShow() 
    }
  }
 
  @HostListener('click', ['$event.target']) Onclick(btn) {
    this.div = btn.nextElementSibling
    if(btn.attributes.name !== undefined){
      switch (btn.attributes.name.value){
        case 'remove':
          this.toShow()
          break;
        case 'contact':
          if(this.div !== null && this.div.classList.contains('display-block')){
            this.toHide()
          } else
            this.toShow()
          break;
        default:
          this.div = this.elRef.nativeElement.querySelector('.popup')
          this.toHide()
      }
    }
  }
  @HostListener('mouseleave')  mouseleave() {
    this.div = this.elRef.nativeElement.querySelector('.tooltip')
    if(this.div !== null){
     this.toHide() 
    }
    // this.div = this.elRef.nativeElement.querySelector('.popup')
    // if(this.div !== null){
    //   this.toHide()
    // }
    // console.log (this.div)
  }

  toShow() {
    if(this.div.classList.contains('display-hidden')){
      this.div.classList.remove('display-hidden')
    }
    
    this.div.classList.add('display-block')  
  }
  toHide() {
    if(this.div.classList.contains('display-block')){
      this.div.classList.remove('display-block')
    }
    this.div.classList.add('display-hidden')
  }

}
