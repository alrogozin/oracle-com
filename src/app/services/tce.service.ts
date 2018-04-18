import { TceUnit, ITceZVKoef, ITceZapr, ITceZV } from './../model/tce_unit';
import {HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ISupInp } from '../model/sup_inps';

const DB_SERVER = 'http://vlswswin10-03:3500';

@Injectable()
export class TceService {

	public TceList: TceUnit[] = null;

	constructor(private http: Http) {
	}

	getAllSupInps(): Promise<ISupInp[]> {
		return this.http
			.get(DB_SERVER + '/sup_inp?order=id.desc')
			.toPromise()
			.then( response => response.json() as ISupInp[] )
			.catch(this.HandleError)
			;
	}

	getAllTce(): Promise<TceUnit[]> {
		return this.http
			.get(DB_SERVER + '/eco_vtce_unit?order=num_order.asc')
			.toPromise()
			.then( response => response.json() as TceUnit[] )
			.catch(this.HandleError)
			;
	}

	getAllTceZapr(): Promise<ITceZapr[]> {
		return this.http
			.get(DB_SERVER + '/enpp_vtype_zapr?order=num_order.asc')
			.toPromise()
			.then( response => response.json() as ITceZapr[] )
			.catch(this.HandleError)
			;
	}

	getTceZV(tce_id: number): Promise<ITceZV[]> {
		return this.http
			.get(DB_SERVER + '/enpp_vtype_zv?tce_id=eq.'+tce_id+'&order=beg_date.desc')
			.toPromise()
			.then( response => response.json() as ITceZV[] )
			.catch(this.HandleError)
			;
	}

	getTceZVKoef(tce_id: number): Promise<ITceZV[]> {
		return this.http
			.get(DB_SERVER + '/enpp_vtype_zv_koef?tce_id=eq.' + tce_id + '&order=beg_date.desc,pdk_beg.desc')
			.toPromise()
			.then( response => response.json() as ITceZVKoef[] )
			.catch(this.HandleError)
			;
	}

	private HandleError(error: any): Promise<any> {
		console.error('Error: ' + error);
		return Promise.reject(error.message || error);
	}

	createSup(instance: ISupInp) {
		const headers = new HttpHeaders().set('content-Type', 'multipart/form-data');
        return this.http.post(DB_SERVER + '/sup_inp', instance)
		.catch(this.HandleError);
	}

	deleteSup(id: number) {
		const headers = new HttpHeaders().set('content-Type', 'multipart/form-data');
        return this.http.delete(DB_SERVER + '/sup_inp?id=eq.' + id.toString())
            .map((response: Response) => response.json());
	}

	updateSup(instance: ISupInp) {
		const headers = new HttpHeaders().set('content-Type', 'multipart/form-data');
		console.log(instance);
		return this.http.patch(DB_SERVER + '/sup_inp?id=eq.' + instance.id, instance)
			.map((response: Response) => response.json());
	}

}
