import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  form!: FormGroup;

  constructor (public postService:PostService, public router:Router){

  }
  // Método onInit que incorpora la creación de un objeto form de la clase FromGroup
  ngOnInit(): void {
    this.form = new FormGroup(
      {
        title: new FormControl('', [Validators.required]),
        body: new FormControl('', [Validators.required]),
      }
    )
  }
  // Método que recupere campos del formulario
  
  public get f() : any {
    return this.form.controls;
  }
  // Método submit (llamar al método correspondiente del servicio de conexión con la API)
  submit (){
    this.postService.create(this.form.value).subscribe( 
      (data:any) => {
        alert("se ha creado el POST con exito");
        this.router.navigateByUrl('post');
    }
    );
  }
  
}
