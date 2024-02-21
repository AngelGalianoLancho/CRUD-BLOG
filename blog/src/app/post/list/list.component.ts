import { Component, OnInit  } from '@angular/core';
import { PostService } from '../post.service';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  posts: Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any) => {
      this.posts = data;
    });
  }

  // verPost(id: string) {
    // return this.postService.getPost(id).subscribe((data) => {
  //     this.postActual = data;
  //   });
  // }
  
}