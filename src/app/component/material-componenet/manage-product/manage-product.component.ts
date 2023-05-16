import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constance';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { ProductComponent } from '../dialog/product/product.component';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
})
export class ManageProductComponent implements OnInit {
  displayedColumn: string[] = [
    'name',
    'categoryName',
    'price',
    'description',
    'edit',
  ];
  dataSource: any;
  // length: any;
  responseMessage: any;
  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private snabar: SnackbarService,
    private router: Router,
    private ngxUiLoader: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.ngxUiLoader.start();
    this.tableData();
  }
  tableData() {
    this.productService.getProduct().subscribe(
      (response: any) => {
        this.ngxUiLoader.stop();
        console.log(response);

        this.dataSource = new MatTableDataSource(response);
      },
      (error: any) => {
        this.ngxUiLoader.stop();
        console.log(error.error?.message);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snabar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  handleAddAction() {
    const dialoConfig = new MatDialogConfig();
    dialoConfig.data = {
      action: 'Add',
    };
    dialoConfig.width = 'auto';
    const dialogRef = this.dialog.open(ProductComponent, dialoConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onAddProduct.subscribe(
      (response) => {
        this.tableData();
      }
    );
  }

  handleEditAction(value: any) {
    const dialoConfig = new MatDialogConfig();
    dialoConfig.data = {
      action: 'Edit',
      data: value,
    };
    dialoConfig.width = 'auto';
    const dialogRef = this.dialog.open(ProductComponent, dialoConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });
    const sub = dialogRef.componentInstance.onEditProduct.subscribe(
      (response) => {
        this.tableData();
      }
    );
  }

  handleDeleteAction(value: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete ' + value.name + ' product',
      confirmation: true,
    };
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onImitStatusChange.subscribe(
      (response: any) => {
        this.ngxUiLoader.start();
        this.deleteProduct(value.id);
        dialogRef.close();
      }
    );
  }
  deleteProduct(id: any) {
    this.productService.delete(id).subscribe(
      (response: any) => {
        this.ngxUiLoader.stop();
        this.tableData();
        this.responseMessage = response?.message;
        this.snabar.openSnackBar(this.responseMessage, 'suceess');
      },
      (error: any) => {
        this.ngxUiLoader.stop();
        console.log(error);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snabar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

  onChange(status: any, id: any) {
    this.ngxUiLoader.start();
    var data = {
      status: status.toString(),
      id: id,
    };
    this.productService.updateStatus(data).subscribe(
      (response: any) => {
        this.ngxUiLoader.stop();
        this.tableData();
        this.responseMessage = response?.message;
        this.snabar.openSnackBar(this.responseMessage, 'suceess');
      },
      (error: any) => {
        this.ngxUiLoader.stop();
        console.log(error);
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snabar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }
}
