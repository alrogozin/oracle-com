import {HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const DB_SERVER = 'http://vlswswin10-03:3500';

@Injectable()
export class CommonToolsService {
	constructor(private http: Http) {
	}

	public NextId(sequenceName: string): Promise<any> {
		const headers = new HttpHeaders().set('content-Type', 'application/x-www-form-urlencoded');
		return this.http
			.post(DB_SERVER + '/rpc/seq_nextval', { p_seq_name: 'eco.decl_hdr_id_seq' } )
			.toPromise()
			.then(response => response.json()
			)
			.catch(this.HandleError);
	}

	public callAnyProc(procName: string, pars: any): Promise<any> {
		const headers = new HttpHeaders().set('content-Type', 'application/x-www-form-urlencoded');
		return this.http
			.post(DB_SERVER + '/rpc/' + procName, pars )
			.toPromise()
			.then(response => response.json()
			)
			.catch(this.HandleError);
	}

	private HandleError(error: any): Promise<any> {
		console.error('Error: ' + error);
		return Promise.reject(error.message || error);
	}

}
