import { AuthentificationService } from 'src/app/core/service/authentification.service';
import { IUser } from './../../core/models/User.model';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns : string[]=['id','username','email','role']
  public dataSource! : MatTableDataSource<IUser>
  @Input() data!: IUser[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private auth:AuthentificationService) { }

  ngOnInit(): void {
   
    this.dataSource = new MatTableDataSource(this.data)
    this.ngAfterViewInit()
    }
   
  ngAfterViewInit() {
    console.log(this.data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


