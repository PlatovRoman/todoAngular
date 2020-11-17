import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksOUTComponent } from './tasks-out/tasks-out.component';
import { TasksINPComponent } from './tasks-inp/tasks-inp.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditTaskNameComponent } from './edit-task-name/edit-task-name.component';
import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: TasksOUTComponent},
  { path: 'edit', component: EditTaskNameComponent},
  { path: '**', redirectTo: '/' }
];

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
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
