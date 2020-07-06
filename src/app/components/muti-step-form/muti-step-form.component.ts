import { 
  Component, 
  OnInit, 
  ContentChildren, 
  QueryList, 
  AfterContentInit, 
  TemplateRef, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';
import { FormStepDirective } from '../../directives/form-step.directive'

@Component({
  selector: 'app-muti-step-form',
  templateUrl: './muti-step-form.component.html',
  styleUrls: ['./muti-step-form.component.css']
})
export class MutiStepFormComponent implements OnInit, AfterContentInit {
  @Input() formData: any;
  @Input() startStep: number;
  @Output() nextAction = new EventEmitter<any>();
  @Output() finishAction = new EventEmitter<any>();
  @ContentChildren(TemplateRef) divs: QueryList<TemplateRef<FormStepDirective>>
  step = 0;
  currentView: TemplateRef<any>

  constructor() {
    this.nextStepHandle = this.nextStepHandle.bind(this)
    this.backStepHandle = this.backStepHandle.bind(this)
  }

  ngOnInit() {
    console.log(this.formData[this.step])
  }
  renderForm() {
    this.currentView = this.divs.toArray()[this.step]
  }
  ngAfterContentInit () {
    this.renderForm()
  }

  nextStepHandle(value){
    this.nextAction.emit(value)
    this.step++;
    this.renderForm()
  }
  backStepHandle() {
    this.step--;
    this.renderForm();
  }

}