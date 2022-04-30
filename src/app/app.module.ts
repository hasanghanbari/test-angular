import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

import {FormsModule} from "@angular/forms";
import {HighchartsChartModule} from "highcharts-angular";
import { TextComponent } from './text/text.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TextComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
