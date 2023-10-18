import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly httpService = inject(HttpService);

  getAllCustomers(): Observable<any[]> {
    const url = `get-all-customers`;

    return this.httpService.get<any[]>(url);
  }

  getSingleCustomer(id: string): Observable<any[]> {
    const url = `get-single-customer/${id}`;

    return this.httpService.get<any[]>(url);
  }

  createCustomer(name: string, age: number): Observable<any> {
    const url = `create-customer`;

    return this.httpService.post(url, { name, age });
  }

  updateCustomer(id: string): Observable<any> {
    const url = `update-customer/${id}`;

    return this.httpService.put(url, { id });
  }

  deleteCustomer(id: string): Observable<any> {
    const url = `delete-customer/${id}`;

    return this.httpService.delete(url);
  }
}
