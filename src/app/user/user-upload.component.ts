import { Component, OnInit, Input } from '@angular/core';
import { UserUploadVideo } from './uploadVideo';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: "./user-upload.component.html",
    styleUrls: ["./user-upload.component.css"]
})
export class UploadComponent implements OnInit {
    // url;
    video:UserUploadVideo;
    
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

    constructor(private userService: UserService){}

    onFileSelected(event){
        this.selectedFile = <File>event.target.files[0];
    }

    uploadVideo(){
        const fd = new FormData();
        fd.append('filePath', this.selectedFile, this.selectedFile.name);
        fd.append('userName', JSON.parse(localStorage.getItem("username")));
        alert(this.selectedFile.name);
        this.userService.uploadVideo(fd).subscribe((data)=>{
            console.log(event);
        });
    }
}