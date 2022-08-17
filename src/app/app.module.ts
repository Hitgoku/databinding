import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgClass1Component } from './ng-class1/ng-class1.component';
import { PB1Component } from './pb1/pb1.component';
import { TwbComponent } from './twb/twb.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    NgClassComponent,
    TwoWayBindingComponent,
    NgClass1Component,
    PB1Component,
    TwbComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
