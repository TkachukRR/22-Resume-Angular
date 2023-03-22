import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-langButtons',
  templateUrl: './langButtons.component.html',
})
export class LangButtonsComponent {
  newLang: string = 'en';

  @Output() langBtnValue = new EventEmitter();

  @Input() langList: any;
  @Input() color: string;
  src: string;
  bgUrl: string

  constructor() {}

  ngOnInit(): void {
  }

  onLangBtn(btnLangValue: string) {
    this.newLang = btnLangValue;
    this.langBtnValue.emit(this.newLang);
  }
}
