import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'ClientApp/app/core/services/user.service';
import { Users, User } from 'ClientApp/app/core/models/user.model';
import { log, error } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from 'ClientApp/app/core/services/global.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    users: User[] = []; 
    viewLoading: boolean = false;
    pagesNumber: number = 0;
    currentPage: number = 1;
    totalPages: number = 0;
    searchedUser: User;

    constructor(
        private cd: ChangeDetectorRef,
        private _userService: UserService,
        private _router: Router,
        private _globalService: GlobalService,
    ) { }

    ngOnInit() {
         
        this.cd.markForCheck();
        this.getData(this.currentPage);
        
    }

    getData(pageNumber) {
        this._userService.getUsersList(pageNumber).subscribe(
            resp => {

                this.users = resp.data;
                this.pagesNumber = resp.total_pages;
                this.currentPage = resp.page;
                this.totalPages = resp.total_pages;
                this.cd.markForCheck();
            }
        );
    }
    showDetails(id): void { 
        this._router.navigate(
            ['/user_details'],
            {
                queryParams: { id: id }
            }
        );
         
    }
    nextPage() { 
        if (this.currentPage == this.totalPages) return; 
        this.getData(this.currentPage + 1);
    }
    previousPage() {
        if (this.currentPage == 1) return;
        this.getData(this.currentPage - 1);
    }

    searchUserById(event: any) {
        log(event.target.value);
        let userId = event.target.value;

        this._userService.getUserDetailss(userId).subscribe(
            resp => {

                this.searchedUser = resp.data

                let newUsers: User[] = [
                    this.searchedUser
                ];
                
                this.users = newUsers;

                this.cd.markForCheck();
            },
            error => {
                this._globalService.toastrError("This user doesn't exist, ");
            }
        );
    }

    refresPage() {
        this.getData(this.currentPage);
    }
     
}
