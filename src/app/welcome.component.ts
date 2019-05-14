import { Component, OnInit } from '@angular/core';
import { FileResource } from './user/FileResource';
import { UserService } from './user/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: "./welcome.component.html",
    styleUrls:['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
    url2: object[] = [];
    file: FileResource[];

    constructor(private userService: UserService, private sanitizer: DomSanitizer){}

    ngOnInit(){
        this.userService.fetchAll().subscribe((data)=>{
            this.file=data;
            let myurl;
            for(var i=0; i<this.file.length; i++){
                this.userService.fetchAllById(this.file[i].id).subscribe((result)=>{
                    var newBlob = new Blob([result], { type:"application/json" });
                    const x = window.URL.createObjectURL(newBlob);
                    myurl = this.sanitizer.bypassSecurityTrustUrl(x);
                    this.url2.push(myurl);
                    console.log(myurl);
                });
            }
        });
    }

    //fetchAll(){
    //     this.userService.fetchAll().subscribe((data)=>{
    //         this.file=data;
    //         let myurl;
    //         for(var i=0; i<this.file.length; i++){
    //             this.userService.fetchAllById(this.file[i].id).subscribe((result)=>{
    //                 var newBlob = new Blob([result], { type:"application/json" });
    //                 const x = window.URL.createObjectURL(newBlob);
    //                 myurl = this.sanitizer.bypassSecurityTrustUrl(x);
    //                 this.url2.push(myurl);
    //                 console.log(myurl);
    //             });
    //         }
    //     });
    // }
}