import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly httpService = inject(HttpClient);

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
