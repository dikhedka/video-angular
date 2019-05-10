import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './user';
import { Observable } from 'rxjs';
import { UserUploadVideo } from './uploadVideo';

@Injectable()
export class UserService{

    baseUrl = "http://localhost:8090";
    uploadUrl = "http://localhost:8081";

    constructor(private http: HttpClient){}

    registerNewUser(user: UserProfile):Observable<UserProfile>{
        return this.http.post<UserProfile>(this.baseUrl+"/user",user);
    }

    // userLogin(email: string, password: string){
    //     return this.http.get(this.baseUrl+"/user/"+email+"/"+password);
    // }

    userLogin(email,password){
        return this.http.get(this.baseUrl+"/user/"+email+"/"+password);

    }

    uploadVideo(video:UserUploadVideo):Observable<UserUploadVideo>{
        return this.http.post<UserUploadVideo>(this.uploadUrl+"/upload",video);
    }
}