import { NgModule } from '@angular/core';
import { ReportComponent } from './report.component';
import { TotalUserComponent } from './totaluser.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';





@NgModule({
    declarations:[
        ReportComponent,
        TotalUserComponent,
        AdminComponent
    ],
    imports:[
        BrowserModule,RouterModule.forChild(adminRoutes)
    ],
    exports:[
        ReportComponent,
        TotalUserComponent,
        RouterModule,
        AdminComponent
    ]
})
export class AdminModule{

}