import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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
    let headers = new HttpHeaders({
      "x-token": "ABC"
    })

    return this.http.get("https://reqres.in/api/user", { params: params, headers: headers })
  }
}
