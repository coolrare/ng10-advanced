import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColorComponent } from './utilities/color/color.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
// import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      {
        path: 'utilities',
        children: [
          { path: 'color', component: ColorComponent },
          { path: 'color/:type', component: ColorComponent },
        ]
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
