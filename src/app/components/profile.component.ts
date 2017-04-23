import { Component } from '@angular/core';
import { GithubService } from '../services/github.service'
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',

})

export class ProfileComponent{
    user=[];
    repos=[];
    username:string;
    constructor( private githubService: GithubService){
        this.githubService.getuser().subscribe(user =>{
           this.user = user; 
        })
        this.githubService.getrepos().subscribe(repos =>{
           this.repos = repos; 
        })
    }
    searchUser(){
       this.githubService.updateUser(this.username); 
       this.githubService.getuser().subscribe(user =>{
           this.user = user; 
        })
        this.githubService.getrepos().subscribe(repos =>{
           this.repos = repos; 
        })
    }
 }