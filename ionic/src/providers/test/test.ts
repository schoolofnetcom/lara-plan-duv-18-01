import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ENV} from '@app/env';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {

    constructor(public http: HttpClient) {
        console.log('Hello TestProvider Provider');
    }

    retrieve() {
        return this.http.get('http://localhost:8000/api/test')
            .map(cep => {

            })
    }

}
