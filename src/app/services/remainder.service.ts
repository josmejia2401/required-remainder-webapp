import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RemainderRequest } from '../models/remainder.model';

@Injectable({
    providedIn: 'root'
})
export class RemainderService {
    private apiUrl = 'http://localhost:8080/api/required-remainder/batch';

    constructor(private http: HttpClient) { }

    calcularRemainder(batch: RemainderRequest[]): Observable<number[]> {
        return this.http.post<number[]>(this.apiUrl, batch);
    }
}
