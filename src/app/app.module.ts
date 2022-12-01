import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';
import { SidebarCategoriesComponent } from './sidebar-categories/sidebar-categories.component';
import { ContentComponent } from './content/content.component';
import { CategoryComponent } from './category/category.component';
import { MarkdownViewComponent } from './markdown-view/markdown-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarSearchComponent,
    SidebarCategoriesComponent,
    ContentComponent,
    CategoryComponent,
    MarkdownViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
