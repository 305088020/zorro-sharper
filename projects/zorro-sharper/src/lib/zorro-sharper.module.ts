import { NgModule } from "@angular/core";
import { NsAutoHeightCardDirective } from "./directives/ns-auto-height-card.directive";
import { NsAutoHeightDivDirective } from "./directives/ns-auto-height-div.directive";
import { NsAutoHeightTableDirective } from "./directives/ns-auto-height-table.directive";
import { NsSelectAsyncDsDirective } from "./directives/ns-select-async-ds.directive";
import { NsSelectTextFieldDirective } from "./directives/ns-select-text-field.directive";
import { NsFormErrorTipsComponent } from "./components/ns-form-error-tips.component";
import { NsErrorTipDirective } from "./directives/ns-error-tip.directive";
import { CommonModule } from "@angular/common";

const DIRECTIVES = [
  NsAutoHeightCardDirective,
  NsAutoHeightDivDirective,
  NsAutoHeightTableDirective,
  NsSelectAsyncDsDirective,
  NsSelectTextFieldDirective,
  NsErrorTipDirective
];

@NgModule({
  declarations: [...DIRECTIVES, NsFormErrorTipsComponent],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
  entryComponents: [NsFormErrorTipsComponent]
})
export class ZorroSharperModule {}
