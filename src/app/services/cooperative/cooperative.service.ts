import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CooperativeService {

  constructor(private httpClient: HttpClient) { }

  getAllDrivers():Observable<any> {
    return this.httpClient.get("assets/drivers_info.json");
  }
}
