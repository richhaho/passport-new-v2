import {NgModule} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {
  Routes, 
  RouterModule,
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AuthguardService} from "./services/auth-guard.service"; 

const routes: Routes = [
  { path: '', component: DashboardComponent },

  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module')
      .then(mod => mod.GroupsModule)
  },

  {
    path: 'suppliers',
    loadChildren: () => import('./pages/suppliers/suppliers.module')
      .then(mod => mod.SuppliersModule)
  },

  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module')
      .then(mod => mod.ContactsModule)
  },

  {
  path: 'bookings',
  loadChildren: () => import('./pages/bookings/bookings.module')
    .then(mod => mod.BookingsModule)
  },

  {
  path: 'enquiries',
  loadChildren: () => import('./pages/enquiries/enquiries.module')
    .then(mod => mod.EnquiriesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule],

  providers: []
})
export class AppRoutingModule {
  constructor(private loadingBar: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}
