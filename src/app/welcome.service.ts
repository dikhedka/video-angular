import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileResource } from './user/FileResource';
import { Observable } from 'rxjs';

@Injectable()
export class WelcomeService{

    uploadUrl = "http://localhost:8081";

    constructor(private http: HttpClient){}

    fetchAll():Observable<FileResource[]>{
        return this.http.get<FileResource[]>(this.uploadUrl+"/save");
    }

    fetchAllById(id: String):Observable<Blob>{
        return this.http.get(this.uploadUrl+"/retrieve/"+id, {responseType: 'blob'});
    }
}