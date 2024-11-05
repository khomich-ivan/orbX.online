import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {ScrollSpyDirective} from "./directives/scroll-spy.directive";
import {PartnersComponent} from "./components/partners/partners.component";
import {UseCasesComponent} from "./components/use-cases/use-cases.component";
import {DigitalizationComponent} from "./components/use-cases/sub/digitalization/digitalization.component";
import {MetaverseComponent} from "./components/use-cases/sub/metaverse/metaverse.component";
import {DynamicLearningComponent} from "./components/use-cases/sub/dynamic-learning/dynamic-learning.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactPageComponent,
    ContactFormComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    ScrollSpyDirective,
    PartnersComponent,
    UseCasesComponent,
    DigitalizationComponent,
    MetaverseComponent,
    DynamicLearningComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
