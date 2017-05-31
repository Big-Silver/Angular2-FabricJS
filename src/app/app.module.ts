import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CKEditorComponent } from '../../node_modules/ng2-ckeditor/src/ckeditor.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CKEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CKEditorComponent,
  ]
})
export class AppModule { }
