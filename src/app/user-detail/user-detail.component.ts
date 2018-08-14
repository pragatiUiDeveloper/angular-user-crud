import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userId;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //let userId = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let userId = parseInt(params.get('id'));
       this.userId = userId;
    });

   
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
