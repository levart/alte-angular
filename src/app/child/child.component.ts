import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ContentChild,
  DoCheck, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() text1?: {
    key: string;
    value: string;
  };
  @Input() changedText?: string;
  @Output() deleteItem: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('someText') someText!: ElementRef;
  //
  @ContentChild('conditionContent') conditionContent?: ElementRef;

  constructor() {
    // console.log('ChildComponent constructor');
    // console.log('ChildComponent constructor: ', this.changedText);
  }

  ngOnInit(): void {
    // console.log('ChildComponent ngOnInit');
    // console.log('ChildComponent text: ', this.changedText);
    // console.log('Element ngOnInit: ', this.someText);
    // console.log('ContentChild ngOnInit: ',this.conditionContent)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ChildComponent ngOnChanges', changes);
    // console.log(this.text1);
  }

  ngDoCheck(): void {
    // console.log('ChildComponent ngDoCheck', this.changedText);
  }

  ngAfterContentInit(): void {
    // console.log('ChildComponent ngAfterContentInit');
    // console.log('ContentChild ngAfterContentInit: ', this.conditionContent?.nativeElement.textContent)

  }

  ngAfterContentChecked(): void {
    // console.log('ChildComponent ngAfterContentChecked');
    // console.log('ContentChild ngAfterContentChecked: ', this.conditionContent?.nativeElement.textContent)

  }

  ngAfterViewInit(): void {
    // console.log('ChildComponent ngAfterViewInit', this.changedText);
    // console.log('Element ngAfterViewInit: ', this.someText?.nativeElement.textContent);
    // console.log('ContentChild ngAfterViewInit: ', this.conditionContent?.nativeElement.textContent)

    // this.someText.nativeElement.textContent = 'red';
  }

  ngAfterViewChecked(): void {
    // console.log('ChildComponent ngAfterViewChecked' , this.someText?.nativeElement.textContent);
    // console.log('ContentChild ngAfterViewChecked' , this.conditionContent?.nativeElement.textContent);
  }





  ngOnDestroy(): void {
    // console.log('ChildComponent ngOnDestroy', this.text1);
  }

  delete() {
    this.deleteItem.emit(true);
  }
}
