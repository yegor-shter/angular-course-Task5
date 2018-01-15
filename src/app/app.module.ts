import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from './containers/login-container/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { TodoItemService } from './task-view-container/services/todo-item.service';
import { TodoItemsService } from './task-view-container/services/todo-items.service';
import { TagsService } from './task-view-container/services/tags.service';
import { StatusCodesService } from './task-view-container/services/status-codes.service';
import { AuthguardService } from './containers/login-container/authguard.service';
import { ConfirmGuardService } from './task-view-container/services/confirm-guard.service';

import { AppComponent } from './app.component';
import { statusCodeToken } from './task-view-container/tokens/app-tokens';
import { LoginComponent } from './containers/login-container/login/login.component';
import { SliderComponent } from './task-view-container/components/slider/slider.component';
import { TodoComponent } from './task-view-container/components/todo/todo.component';
import { TodoEditComponent } from './task-view-container/components/todo-edit/todo-edit.component';
import { TaskViewComponent } from './task-view-container/components/task-view/task-view.component';
import { TaskListComponent } from './containers/task-list-container/task-list/task-list.component';
import { TokenInterceptorsService } from './task-view-container/services/token-interceptors.service';
import { LayoutComponent } from './task-view-container/components/layout/layout.component';
import { LatinOnlyDirective } from './containers/login-container/latin-only.directive';
import { FilterPipe } from './containers/filters/filter-pipe.pipe';
import { TagsControlComponent } from './containers/task-list-container/tags-control/tags-control.component';
import { AutocopleteTagComponent } from './containers/task-list-container/autocoplete-tag/autocoplete-tag.component';

export const routes: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: 'lazy', loadChildren: './feature-module/feature-module.module#FeatureModuleModule'},
  {
    path: '',
    canActivate: [AuthguardService],
    component: LayoutComponent,
    children:[
      {path: 'edit/:todoId', component: TaskViewComponent, canDeactivate: [ConfirmGuardService]},
      {path: 'home', component: TaskListComponent},
      {path: 'newtask/:todoId', component: TaskViewComponent}
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SliderComponent,
    TodoComponent,
    TodoEditComponent,
    TaskViewComponent,
    TaskListComponent,
    LayoutComponent,
    LatinOnlyDirective,
    FilterPipe,
    TagsControlComponent,
    AutocopleteTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, TodoItemService, TodoItemsService, TagsService,AuthguardService, ConfirmGuardService,
  {provide: statusCodeToken, useClass: StatusCodesService}, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorsService, multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
