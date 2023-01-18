import { Injectable, NotFoundException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class CatService {
  private readonly url = 'https://http.cat/';

  getImage(statusCode: number): Observable<any> {
    const url = `${this.url}${statusCode}`;
    return new Observable((observer) => {
      axios
        .get(url, { responseType: 'arraybuffer' })
        .then((response: AxiosResponse<Buffer>) => {
          observer.next({
            data: response.data.toString('base64'),
          });
          observer.complete();
        })
        .catch(() => {
          return new NotFoundException({
            message: `status code ${statusCode} does not exists`,
          });
        });
    });
  }
}
