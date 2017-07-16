import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post/post.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: Post[];
  post: Post = new Post();
  postResult: Post;
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe((data) => this.posts = data);
  }

  addPost() {
    this._postService.addPost(this.post).subscribe((data) => this.postResult = data);
  }

}
