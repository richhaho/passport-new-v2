import {Injectable} from "@angular/core";
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {catchError, tap, finalize} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Injectable()
export class CustomInterceptor implements HttpInterceptor{


    constructor(private loader: NgxUiLoaderService, private router: Router, private toast: ToastrService, private auth: AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        // check if we are skipping x auth
        let skipXAuth = false;
        let contentType = 'application/json';
        let hideLoader: boolean = false;


        if(typeof req.body !== 'undefined' && req.body !== null) {

            // if form data, then we will be uploading here
            if(req.body instanceof FormData){
                contentType = undefined;
            }else {

                if (typeof req.body.skipXAuth !== 'undefined' && req.body.skipXAuth !== null && (req.body.skipXAuth === true || req.body.skipXAuth === 'true')) {
                    skipXAuth = true;
                }

                if(typeof req.body.hideLoader !== 'undefined' && req.body.hideLoader !== null && (req.body.hideLoader === true || req.body.hideLoader === 'true')){

                    hideLoader = true;

                }
            }


        }


        if(!hideLoader)
            this.loader.start();



        if(!hideLoader)
          this.loader.start();


        let httpHeaders ={
            'Authorization' : 'Basic',
            'Accept' : 'application/json'


        };

        if(typeof contentType !== "undefined"){

            httpHeaders['Content-Type'] = contentType;
        }



        if(!skipXAuth){
            httpHeaders['X-AUTH-TOKEN'] = this.auth.getToken();
        }else{
            httpHeaders['X-AUTH-TOKEN'] = 'LOGIN';
        }

        //console.log("NEW HEADERS", httpHeaders);

        /*const cloneReq = req.clone({
            headers: new HttpHeaders(httpHeaders)
        });*/

        const cloneReq = req.clone({
            headers: new HttpHeaders(httpHeaders)
        });

        // console.log('INTERCEPT HTTP CALL', cloneReq);


        return next.handle(cloneReq).pipe(
            tap(event => {
                // console.log("EVENT IS...");
                // console.log(event);
                if(event instanceof HttpResponse){

                    // console.log(event);
                }

            }),
            catchError((error: any) => {
                // console.log('ERROR IS...');
                // console.log(error);

                let self = this;

                if(error instanceof HttpErrorResponse){

                    // console.log(error);

                    if(typeof error.error.message !== 'undefined' && error.error.message !== null) {
                        this.toast.error(error.error.message);
                    }else{

                        if(typeof error.error.error !== 'undefined' && error.error.error !== null) {
                            this.toast.error(error.error.error);
                        }else{
                            this.toast.error(error.statusText);
                        }
                    }

                    if(error.status === 403){

                        // access is forbidden, meaning invalid api key
                        self.auth.logOut();

                        // go to login
                        setTimeout(function() {

                            self.router.navigateByUrl('/login');
                        },1000);
                    }
                }

                return of(error);
            }),
            finalize(() => {
                if(!hideLoader)
                    this.loader.stop();

            })
        );

    }
}
