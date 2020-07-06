import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MutiStepFormComponent } from './components/muti-step-form/muti-step-form.component';
import { FormStepDirective } from './directives/form-step.directive';
import { StepFormSelectorComponent } from './components/step-form-selector/step-form-selector.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MutiStepFormComponent, FormStepDirective, StepFormSelectorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
