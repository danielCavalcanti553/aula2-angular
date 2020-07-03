import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteVisualizaComponent } from './cliente-visualiza/cliente-visualiza.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientesComponent,
    ClienteVisualizaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'clientes', component: ClientesComponent },
      { path: 'cliente/:id', component: ClienteVisualizaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
