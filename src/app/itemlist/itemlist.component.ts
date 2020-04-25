import { Component, OnInit, ViewChild } from '@angular/core';
import {ItemsService} from '../items.service';
import { Sample } from '../sample';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface ItemElement {
  code_num: number;
  name: string;
}

const ITEMLIST: ItemElement[] = [
  {code_num:200142, name: "30 lining"},
{code_num:1911157,name: " blouse pcs"},
{code_num:200241, name: "blouse pcs"},
{code_num:1911172,name: " poly blouse"},
{code_num:2001258,name: " dupta"},
{code_num:2001257,name: " leggings"},
{code_num:1911207,name: " patiyala"},
{code_num:2001283,name: " poplin"},
{code_num:200242, name: "madi lungi"},
{code_num:191275, name: "madi lungi"},
{code_num:1912121,name: " kerchief"},
{code_num:2003150,name: " arthi (75 - 90)"},
{code_num:2001256,name: " sareefall"},
{code_num:200267, name: "black berry"},
{code_num:191274, name: "kerchief"},
{code_num:1912227,name: " metty towel"},
{code_num:200127, name: "kunjam"},
{code_num:2003151,name: " bra slips"},
{code_num:200243, name: "readymade shirt half"},
{code_num:200244, name: "readymade shirt full"},
{code_num:200266, name: "kumki towel 30*60"},
{code_num:191117, name: "svt inskirt 7 part"},
{code_num:191118, name: "svt inskirt 8 part"},
{code_num:191119, name: "svt inskirt 7 overlock"},
{code_num:1911267,name: " svt inskirt 8 overlock"},
{code_num:2003153,name: " baby slips"},
{code_num:2003152,name: " abi slips"}
]

@Component({ 
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  displayedColumns: string[] = ['code_num', 'name'];
  dataSource = new MatTableDataSource<ItemElement>(ITEMLIST);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getItemsList();
  }
  val: any;
  values: [];

  getItemsList(): void {
    var self = this;
    this.itemsService.getItems().subscribe(function(values){
      self.values = values;
      console.log(values);
      // $('#itemsTable').DataTable({
      //   columns: [{title: "Barcode number"}, {title: "Variety"}],
      //   data: values
      //   });
    } ); 
  }

}
