import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private client_id = 'e29d5a22b311bec00e9a';
    private client_secret = 'a020153795e6932338f6a5c611d81c16c3b0336a';
    private username : string;
    constructor(private http:Http){
        console.log('Github Service Ready...');
        this.username = '';
    }
    getuser(){
        return this.http.get('http://api.github.com/users/'+ this.username+'?client_id='+this.client_id+
                                                                            '&client_secret='+this.client_secret)
                   .map(res => res.json());
    }

    getrepos(){
        return this.http.get('http://api.github.com/users/'+ this.username+'/repos'+'?client_id='+this.client_id+
                                                                            '&client_secret='+this.client_secret)
                   .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
} 