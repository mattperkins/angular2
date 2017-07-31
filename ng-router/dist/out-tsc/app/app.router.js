import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
var APP_ROUTES = [
    { path: '', redirectTo: 'about', pathMatch: 'full'
    },
    { path: 'about', component: AboutComponent
    },
    { path: 'contact', component: ContactComponent
    }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../src/app/app.router.js.map