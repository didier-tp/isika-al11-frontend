import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule, } from '@angular/forms';
import { XyComponent } from './basic/xy/xy.component';
import { ZzComponent } from './basic/zz/zz.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RegletteComponent } from './basic/reglette/reglette.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { ProduitComponent } from './produit/produit.component';
import { ConversionComponent } from './conversion/conversion.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { SeuilComponent } from './basic/seuil/seuil.component';
import { ListProdComponent } from './basic/list-prod/list-prod.component';
import { MynumberPipe } from './pipe/mynumber.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAuthInterceptor } from './interceptor/my-auth.interceptor';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  BasicComponent,
  CalculatriceComponent,
  TvaComponent,
  XyComponent,
  ZzComponent,
  LoginComponent,
  WelcomeComponent,
  RegletteComponent,
  ProduitComponent,
  ConversionComponent,
  AdminDeviseComponent,
  SeuilComponent,
  ListProdComponent,
  MynumberPipe
],
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule,
  TabsModule.forRoot(),
  BsUtilModule,
  HttpClientModule
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
