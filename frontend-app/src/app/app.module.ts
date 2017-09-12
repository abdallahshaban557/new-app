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
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { FileUploaderService } from './imageupload/Service/file-uploader.service'


 const appRoutes: Routes = [
   {path:'', component: TopnavComponent},
   {path:'upload', component: ImageuploadComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ImageuploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
