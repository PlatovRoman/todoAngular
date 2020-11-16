import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksOUTComponent } from './tasks-out/tasks-out.component';
import { TasksINPComponent } from './tasks-inp/tasks-inp.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditTaskNameComponent } from './edit-task-name/edit-task-name.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksOUTComponent,
    TasksINPComponent,
    EditTaskNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
