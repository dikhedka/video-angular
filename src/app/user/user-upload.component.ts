import { Component, OnInit, Input } from '@angular/core';
import { UserUploadVideo } from './uploadVideo';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: "./user-upload.component.html",
    styleUrls: ["./user-upload.component.css"]
})
export class UploadComponent implements OnInit {
    // url;
    video:UserUploadVideo;
    url;
    url2;
    // constructor(private userService: UserService,
    //     private router: Router){}

    ngOnInit(){
        this.video = new UserUploadVideo();
    }

    // uploadVideo(){
    //     alert("uploading video method");
    //     this.video.userName = JSON.parse(localStorage.getItem("username"));
    //     this.video.fp = this.url;
    //     //this.video.fp = (<HTMLInputElement>document.getElementById("filePath")).files[0].name;
    //     alert((<HTMLInputElement>document.getElementById("filePath")).files[0]);
    //     alert(this.url);
    //     this.userService.uploadVideo(this.video).subscribe((data)=>{
    //         console.log("uploaded success");
    //         if(data!=null){
    //             alert("done");
    //             this.router.navigate(["/home"]);
    //         }
            
    //     });
    // }

    // readUrl(event:any) {
    //     if (event.target.files && event.target.files[0]) {
    //       var reader = new FileReader();
      
    //       reader.onload = (event: ProgressEvent) => {
    //         this.url = (<FileReader>event.target).result;
    //       }
      
    //      reader.readAsDataURL(event.target.files[0]);
    //     }
    //   }

    selectedFile: File = null;

    constructor(private userService: UserService, private sanitizer: DomSanitizer){}

    onFileSelected(event){
        this.selectedFile = <File>event.target.files[0];
    }

    uploadVideo(){
        const fd = new FormData();
        fd.append('filePath', this.selectedFile, this.selectedFile.name);
        fd.append('userName', JSON.parse(JSON.stringify(sessionStorage.getItem("username"))));
        alert(fd.get('userName'));
        alert(this.selectedFile.name);
        this.userService.uploadVideo(fd).subscribe((data)=>{
            console.log(event);
        });
    }

    fetch(){
        let username = JSON.parse(JSON.stringify(sessionStorage.getItem("username")));
        this.userService.fetch(username).subscribe((data)=>{
            var newBlob = new Blob([data], { type:"application/json" }); 
            const x = window.URL.createObjectURL(newBlob);
            this.url = this.sanitizer.bypassSecurityTrustUrl(x);
            console.log(data);
            console.log(x);
        });
    }
    
    fetchAll(){
        this.userService.fetchAll().subscribe((data)=>{
            //console.log(data)
            var newBlob = new Blob([data], { type:"application/json" });
            // const x = window.URL.createObjectURL(newBlob);
            // this.url2 = this.sanitizer.bypassSecurityTrustUrl(x);
            console.log(newBlob);
            // console.log(newBlob);
        })
    }
}