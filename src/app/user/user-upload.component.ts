import { Component, OnInit, Input } from '@angular/core';
import { UserUploadVideo } from './uploadVideo';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FileResource } from './FileResource';

@Component({
    templateUrl: "./user-upload.component.html",
    styleUrls: ["./user-upload.component.css"]
})
export class UploadComponent implements OnInit {
    // url;
    file: FileResource[];
    video:UserUploadVideo;
    url;
    url2: object[] = [];
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
        fd.append('category', this.video.category);
        fd.append('title',this.video.title);
        fd.append('description',this.video.description);
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
            console.log(newBlob);
            const x = window.URL.createObjectURL(newBlob);
            this.url = this.sanitizer.bypassSecurityTrustUrl(x);
            console.log(data);
            console.log(this.url);
            console.log(x);
        });
    }
    
    // fetchAll(){
    //     this.userService.fetchAll().subscribe((data)=>{
    //        // console.log(new Blob([data[i]], { type:"application/json" }));
    //         let size = data.length;
    //         console.log(size);
    //         let myurl;
    //         for(var i=0; i<data.length; i++)
    //         {
    //             var newBlob = new Blob([data[i]], { type:"application/json" });
    //             console.log(newBlob);
    //             const x = window.URL.createObjectURL(newBlob);
    //             myurl = (this.sanitizer.bypassSecurityTrustUrl(x));
    //             this.url2.push(myurl);
    //             //console.log(myurl);
    //         }
    //        // console.log(this.url2[0]);
    //         // console.log(newBlob);
    //     })
    // }

    fetchAll(){
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
}