import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  ngOnInit(): void {
  }
    
    // @Input() data!: any[];
    // @Input() headerRow!: HeaderRowItem[];
  
    // public sortDirection$!: Observable<string>;
    // public sortKey$!: Observable<string>;
    // public tableData$!: Observable<any>;
  
    // constructor(private store: Store<DataTableState>) {}
  
    // ngOnInit(): void {
    //   // DISPATCH
    //   this.store.dispatch(dataTableActions.setData({ data: this.data }));
  
    //   // SELECTORS
    //   this.tableData$ = this.store.select(dataTableSelectors.selectData);
    //   this.sortKey$ = this.store.select(dataTableSelectors.selectSortKey);
    //   this.sortDirection$ = this.store.select(dataTableSelectors.selectSortDirection);
    // }
  
    // ngOnDestroy(): void {
    //   this.store.dispatch(dataTableActions.resetDataTableStore());
    // }
  
    // public onSort(headerItem: HeaderRowItem): void {
    //   if (!headerItem.hasSort) {
    //     return;
    //   }
    //   const sortKey = headerItem.key;
    //   this.store.dispatch(dataTableActions.setSortKey({ sortKey: sortKey }));
    // }
  }

