import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  constructor(private elRef: ElementRef, private renderer : Renderer2) { }
  div: any
  @HostListener('mouseenter')  mouseenter() {
    this.div = this.elRef.nativeElement.querySelector('.tooltip')
    if(this.div !== null){
      this.toShow(this.div) 
    }
  }
  @HostListener('mouseleave')  mouseleave() {
    this.div = this.elRef.nativeElement.querySelector('.tooltip')
    if(this.div !== null){
     this.toHide(this.div) 
    }
  }
  @HostListener('click', ['$event.target']) Onclick(btn) {
    this.div = this.elRef.nativeElement.querySelectorAll('.popup')
      if(this.div !== null && btn.attributes.name.value === 'remove') {
        this.toShow(this.div[0])
      }
      else{
        // this.toHide()
      }
  }


  toShow(div:any ) {
    if(div.classList.contains('display-hidden')){
      div.classList.remove('display-hidden')
    }
    
    div.classList.add('display-block')  
  }
  toHide(div: any) {
    if(div.classList.contains('display-block')){
      div.classList.remove('display-block')
    }

    div.classList.add('display-hidden')
  }

}
