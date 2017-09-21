import { Routes, RouterModule} from '@angular/router';
//my components
import { TopnavComponent } from '../topnav/topnav.component';
import { ImageuploadComponent } from '../imageupload/imageupload.component';

const appRoutes: Routes = [
    {
        path:'', 
        component: TopnavComponent
    },
    {
        path:'upload', 
        component: ImageuploadComponent
    }
 ];

 // Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);

// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [TopnavComponent, ImageuploadComponent];