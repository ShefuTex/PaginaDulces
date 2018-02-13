import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CatalogoComponent } from './catalogos/templateCatalogo/catalogo.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {}
