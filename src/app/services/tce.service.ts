import { TceUnit } from './../model/tce_unit';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const DB_SERVER = 'http://localhost:3500';

@Injectable()
export class TceService {

	constructor(private http: Http) {
	}

	getAllTce(): Promise<TceUnit[]> {
		return this.http
			.get(DB_SERVER + '/eco_vtce_unit')
			.toPromise()
			.then( response => response.json().data as TceUnit[])
			.catch(this.HandleError)
			;
	}

	private HandleError(error: any): Promise<any> {
		console.error('Error: ' + error);
		return Promise.reject(error.message || error);
	}

}
