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
		let rpcName = '';
		if (sequenceName === 'decl_hdr_id_seq') {
			rpcName = 'seq_nextval_dh';
		} else {
			const errText = 'Error: ' + 'undefined sequence name: ' + sequenceName;
			console.error(errText);
			return Promise.reject(errText);
		}
		return this.http
			.post(DB_SERVER + '/rpc/' + rpcName, null )
			.toPromise()
			.then(response => response.json()[0].seq_nextval_dh
			)
			.catch(this.HandleError);
	}

	private HandleError(error: any): Promise<any> {
		console.error('Error: ' + error);
		return Promise.reject(error.message || error);
	}

}
