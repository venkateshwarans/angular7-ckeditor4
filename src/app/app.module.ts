import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CKEditorModule } from 'ckeditor4-angular';
import { CkeditorToolComponent } from './ckeditor-tool/ckeditor-tool.component';

@NgModule({
  declarations: [AppComponent, CkeditorToolComponent],
  imports: [BrowserModule, AppRoutingModule, CKEditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
