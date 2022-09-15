import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCategoryComponent } from './menu/menu-category/menu-category.component';
import { MenuCategoryItemComponent } from './menu/menu-category-item/menu-category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuCategoryComponent,
    MenuCategoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
