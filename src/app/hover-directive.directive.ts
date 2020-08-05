import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

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
    if(this.div !== null || btn.attributes.name !== null){
      switch (btn.attributes.name.value){
        case 'remove':
          this.toShow()
          break;
        case 'contact':
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
    this.div = this.elRef.nativeElement.querySelector('.popup')
    if(this.div !== null){
      this.toHide()
    }else if (this.elRef.nativeElement.nextElementSibling.classList.contains('popup')){
      this.div = this.elRef.nativeElement.nextElementSibling
      this.toHide()
    }
    console.log (this.div)
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
