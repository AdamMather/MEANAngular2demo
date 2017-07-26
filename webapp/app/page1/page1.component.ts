import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { User } from '../core/user.model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss', '../shared/css/page.scss']
})
export class Page1Component implements OnInit {

  public user: User;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

}
