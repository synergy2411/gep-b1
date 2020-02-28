import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor{

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
    console.log("LOGGER INTERCEPTOR WORKS", req);

    // if(req.method === "GET"){
    //   const clonedReq = req.clone({
    //     headers : new HttpHeaders().set("auth", "token_jwt")
    //   });
    // }


    // return next.handle(clonedReq);
    return next.handle(req);
  }

}
