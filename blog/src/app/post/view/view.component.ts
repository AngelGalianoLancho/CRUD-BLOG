import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  postVisualizado!: Post
  postVisualizadoId!: number

  constructor(private rutaActiva: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {

    this.postService.find(this.postVisualizadoId).subscribe((data: Post) => {
      this.postVisualizado = data;
    })
  }
}

