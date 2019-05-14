import { Routes } from '@angular/router';
import { PremiumComponent } from './premium.component';
import { LoginComponent } from '../user/user-login.component';

export const premiumRoutes: Routes=[
    {path:"premium", component:PremiumComponent},
    {path:"login",component:LoginComponent}
]
