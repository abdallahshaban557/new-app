import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//needed for ngmodule
import { FormsModule }   from '@angular/forms';

//needed for HTTP requests
import { HttpModule }    from '@angular/http'
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ImageUploadService } from './imageupload/Service/imageupload.service';
import { routing, routedComponents } from './routes/routes';
import { Routes, RouterModule} from '@angular/router';

//  const appRoutes: Routes = [
//    {path:'', component: TopnavComponent},
//    {path:'upload', component: ImageuploadComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ImageuploadComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ImageUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
