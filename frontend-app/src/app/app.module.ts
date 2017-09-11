import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//needed for ngmodule
import { FormsModule }   from '@angular/forms';
//needed for routing
import { RouterModule, Routes }   from '@angular/router';
//needed for HTTP requests
import { HttpModule }    from '@angular/http'
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';


 const appRoutes: Routes = [
   {path:'', component: TopnavComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
