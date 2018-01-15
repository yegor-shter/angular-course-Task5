import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Route } from '@angular/router';

export const routes: Route[] =[
  {path: 'catalog', component: CatalogComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogComponent]
})
export class FeatureModuleModule { }
