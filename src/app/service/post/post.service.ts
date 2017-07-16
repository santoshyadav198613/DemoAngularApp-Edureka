
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from '../../post/post';

@Injectable()
export class PostService {

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get('http://jsonplaceholder.typicode.com/posts').
      map((res: Response) => res.json()).catch((res: Response) => res.json());
  }

  addPost(post: Post) {
    let header = new Headers({ 'token': 'test Token' });
    let options = new RequestOptions({ headers: header });
    return this._http.post('http://jsonplaceholder.typicode.com/posts', post, options).
      map((res: Response) => res.json()).catch((res: Response) => res.json());
  }
}
