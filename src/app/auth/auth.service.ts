import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){}

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRXDoE1EwfNYCKIcqejYud_G0EJI1R_Ak', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        )
        .pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRXDoE1EwfNYCKIcqejYud_G0EJI1R_Ak', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error Occurred!';
        if( !errorRes.error || !errorRes.error.error ){
            return throwError(errorMessage)
        }
        switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists'
        }
        return throwError(errorMessage);
    }
}