import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
    // mandar token por los headers
    let headers = new HttpHeaders({
      "x-token": "ABC"
    })

    const reqClone = req.clone({
      headers
    })

    //dejar pasar todo
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    )
    // throw new Error("Method not implemented.");
  }

  // manejar error de forma global
  manejarError(error: HttpErrorResponse) {
    return throwError("Error personalizado")

  }

}
