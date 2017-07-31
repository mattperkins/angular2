// import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent
    },
    { path: 'contact', component: ContactComponent
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);












// export const router: Routes = [
//   {
//     path: '', redirectTo: 'about', pathMatch: 'full'
//   },
//   {
//     path: 'about', component: AboutComponent
//   },
//   {
//     path: 'contact', component: ContactComponent
//   }
// ];
//
// export const routes: ModuleWithProviders = RouterModule.forRoot(router);
