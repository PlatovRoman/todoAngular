import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksOUTComponent } from './tasks-out/tasks-out.component';
import { TasksINPComponent } from './tasks-inp/tasks-inp.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksOUTComponent,
    TasksINPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
