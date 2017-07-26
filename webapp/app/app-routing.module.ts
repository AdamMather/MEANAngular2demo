import { UserResolve } from './shared/resolve/user-resolve.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FeatureComponent } from './feature/feature.component';

// Routes
const appRoutes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
    resolve: { user: UserResolve }
  },
  { path: 'page2',  component: Page2Component },
  { path: 'feature',  component: FeatureComponent },
  { path: '**',
    redirectTo: '/page1'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
