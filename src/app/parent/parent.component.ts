import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  childDestroyed = false;

  children: string[] = []

  changedText: {
    key: string;
    value: string;
  } = {
    key: 'key1',
    value: 'value1'
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  submit(text: string) {

    this.children.push(text)

    // this.changedText = {
    //     key: 'key2',
    //     value: text
    // }

    this.changedText.value = text
    this.cdr.detectChanges()
  }


  destroyChild() {
    this.childDestroyed = true
  }


  changeFirstChild() {
    // this.changedText = {
    //   key: 'key2',
    //   value: 'value2'
    // }

    this.children[0] = 'changed'
  }

  deleteItem(child: string) {
    this.children = this.children.filter((item) => item !== child);
  }
}
