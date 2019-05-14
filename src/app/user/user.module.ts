import { NgModule } from '@angular/core';
import { LoginComponent } from './user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { SignupComponent } from './user-signup.component';
import { SubscriptionComponent } from './user-subscription.component';
import { UploadComponent } from './user-upload.component';
import { LikedVideosComponent } from './user-liked-videos.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './user-logout.component';
import { FileResource } from './FileResource';
import { AdminModule } from '../admin/admin.module';


@NgModule({
   declarations: [LoginComponent,LogoutComponent,SignupComponent, UploadComponent, LikedVideosComponent, 
      SubscriptionComponent],
   imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forChild(userRoutes),AdminModule],
   exports: [LoginComponent, LogoutComponent,SignupComponent, LikedVideosComponent, SubscriptionComponent,UploadComponent, RouterModule],
   providers: [UserService]
})
export class UserModule { }