import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
// posts = [
//   {title: 'FirstPost', content: 'Post Content'},
//   {title: 'FsirstPost', content: 'Post Content'},
//   {title: 'FtirstPost', content: 'Post Content'}
// ]
@Input() posts:Post[] = []


}
