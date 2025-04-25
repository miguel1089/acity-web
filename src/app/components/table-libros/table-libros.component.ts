import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs';
import { TableConfig } from 'src/app/modules/table/models/table-config.model';
import { SolicitudService } from 'src/app/services/solicitud.service';

const PROVIDERS = [
  SolicitudService
];

@Component({
  selector: 'app-table-libros',
  providers: [PROVIDERS],
  templateUrl: './table-libros.component.html',
  styleUrls: ['./table-libros.component.scss'],
})
export class TableLibrosComponent implements OnInit {
  dataSource: any = [];
  tableDisplayColumns: string[] = ['titulo', 'autor', 'categoria', 'acciones'];
  tableConfig: TableConfig | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  @Input() set data(data: any) {
    this.dataSource = data;
    this.dataSource.paginator = this.paginator;
  }
  readonly #solicitudService = inject(SolicitudService);
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onGenerarPrestamo(item: any) {
    console.log(item);

    const payload = {
      IdLibro: item.id,
      UsuarioCreacion: 'Miguel Atarama'
    };

    this.#solicitudService
    .postRegistrarSolicitudPrestamo(payload)
    .pipe(finalize(() =>{
    }
    ))
    .subscribe({
      next: (data: any) =>{
        if(data.success){
          alert(data.message);
        }else{
          alert(data.message);
        }

      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
