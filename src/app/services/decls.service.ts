import { IDeclHdr, DeclHdr } from './../model/decls';
import {HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const DB_SERVER = 'http://vlswswin10-03:3500';

@Injectable()
export class DeclHdrService {

	constructor(private http: Http) {
	}

	public getAllDeclHdr(is_current: string, vyp_id: number): Promise<IDeclHdr[]> {
		let appStr = '?sinp_id=eq.' + vyp_id + '&order=id.desc';
		if (is_current === 'Y') {
			appStr = '?sinp_id=eq.' + vyp_id + '&is_current=eq.Y&order=id.desc';
		}
		return this.http
			.get(DB_SERVER + '/decl_hdr' + appStr)
			.toPromise()
			.then( response => response.json() as IDeclHdr[] )
			.catch(this.HandleError)
		;
	}

	private HandleError(error: any): Promise<any> {
		console.error('Error: ' + error);
		return Promise.reject(error.message || error);
	}

	// createSup(instance: ISupInp) {
	// 	const headers = new HttpHeaders().set('content-Type', 'multipart/form-data');
    //     return this.http.post(DB_SERVER + '/sup_inp', instance)
	// 	.catch(this.HandleError);
	// }

	// deleteSup(id: number) {
	// 	const headers = new HttpHeaders().set('content-Type', 'multipart/form-data');
    //     return this.http.delete(DB_SERVER + '/sup_inp?id=eq.' + id.toString())
    //         .map((response: Response) => response.json());
	// }

	// updateSup(instance: ISupInp) {
	// 	const headers = new HttpHeaders().set('content-Type', 'multipart/form-data');
	// 	console.log(instance);
	// 	return this.http.patch(DB_SERVER + '/sup_inp?id=eq.' + instance.id, instance)
	// 		.map((response: Response) => response.json());
	// }

}
