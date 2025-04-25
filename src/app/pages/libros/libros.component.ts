import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/modules/table/models/table-column.model';
import { TableConfig } from 'src/app/modules/table/models/table-config.model';

const LIBROS_DATA_MOCK = [
  {
    id: 1,
    titulo: 'La fiesta del chivo',
    autor: 'Mario Vargas LLosa',
    categoria: { id: 1, descripcion: 'Literatura' },
  },

];

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent implements OnInit {
  productsList = LIBROS_DATA_MOCK;
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isSelectable: true,
    isPaginable: true,
    showActions: true,
    showFilter: false,
  };

  constructor() {}

  ngOnInit(): void {
    this.setTableColumns();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Name', def: 'name', dataKey: 'name' },
      {
        label: 'Category',
        def: 'category',
        dataKey: 'category.name',
        dataType: 'object',
      },
      { label: 'Description', def: 'description', dataKey: 'description' },
    ];
  }
}
