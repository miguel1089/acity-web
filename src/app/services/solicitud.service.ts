import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISolicitud } from '../interfaces/solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private _api: string = `${environment.api}`;
  private _http = inject(HttpClient);

  constructor() { }

  postRegistrarSolicitudPrestamo(solicitud: ISolicitud): Observable<any> {
    return this._http.post<any>(
      `${this._api}/prestamo/registrar`,
      solicitud
    );
  }
}
