import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userId;
  public user: User;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {

    //let userId = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let userId = parseInt(params.get('id'));
      this.userId = userId;
      this.getHero();
    });

   
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  
  goBack(): void {
    this.location.back();
  }

  goPrevious(){
    let previousId =  this.userId - 1;
    this.router.navigate(['/user',previousId]);
  }

  goNext(){
    let nextId =  this.userId + 1;
    this.router.navigate(['/user',nextId]);
  }



}
