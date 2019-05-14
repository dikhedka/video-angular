import { Routes } from '@angular/router';
import { LoginComponent } from './user-login.component';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';
import { UploadComponent } from './user-upload.component';
import { LikedVideosComponent } from './user-liked-videos.component';
import { LogoutComponent } from './user-logout.component';
import { AdminComponent } from '../admin/admin.component';

export const userRoutes: Routes = [
    { path: "login", component: LoginComponent },
    {path: "signup", component: SignupComponent},
    {path:"logout", component :LogoutComponent},
    {path:"subscriptions", component: SubscriptionComponent},
    {path: "upload",component: UploadComponent},
    {path: "likedvideos", component: LikedVideosComponent},
    {path: "admin", component: AdminComponent}
]