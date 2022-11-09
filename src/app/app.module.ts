import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SidebarCategoriesComponent } from './sidebar-categories/sidebar-categories.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarSearchComponent,
    SidebarCategoriesComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
