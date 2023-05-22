import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { GlobalConstants } from 'src/app/shared/global-constance';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  displayedColumn: string[] = ['name', 'email', 'contactNumber', 'status'];
  dataSource: any;
  responseMessage: any;

  constructor(
    private userService: UserAuthService,
    private snacbar: SnackbarService,
    private ngxUiLoader: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.ngxUiLoader.start();
    this.tableData();
  }
  tableData() {
    this.userService.getUser().subscribe(
      (response: any) => {
        this.ngxUiLoader.stop();
        this.dataSource = new MatTableDataSource(response);
      },
      (error: any) => {
        this.ngxUiLoader.stop();
        console.log(error);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snacbar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChange(status: any, id: any) {
    this.ngxUiLoader.start();
    var data = {
      status: status.toString(),
      id: id,
    };
    this.userService.update(data).subscribe(
      (respose: any) => {
        this.ngxUiLoader.stop();
        this.responseMessage = respose?.message;
        this.snacbar.openSnackBar(this.responseMessage, 'success');
      },
      (error: any) => {
        this.ngxUiLoader.stop();
        console.log(error);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snacbar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }
}
