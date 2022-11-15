import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {

  @Input() appHighlighter?: string = 'red';
  @Input() fontSize?: number = 20;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {

  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.appHighlighter
    this.element.nativeElement.style.fontSize = this.fontSize ? this.fontSize + 'px' : '20px'

    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.appHighlighter)

    this.element.nativeElement.addEventListener('click', () => {
      alert('clicked')
    })
  }


}
