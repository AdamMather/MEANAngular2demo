import { UserService } from './../shared/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss', '../shared/css/page.scss']
})
export class Page2Component implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getErrorExample()
      .subscribe(() => console.log('Finished error service'));
  }

}
