import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient
  ) { }

  obtenerUsuarios() {
    //parametros
    let params = new HttpParams().append('page', "1")
    params = params.append("nombre", "Gabriel")

    //mandar token por los headers
    // let headers = new HttpHeaders({
    //   "x-token": "ABC"
    // })

    //capturar error con los status code personalizados
    return this.http.get("https://reqres.in/api/user", {
      params: params
    })
      .pipe(
        map(resp => resp['data']),
      )
  }

  //manejar error de forma global
  // manejarError(error: HttpErrorResponse) {
  //   return throwError("Error personalizado")

  // }
}
