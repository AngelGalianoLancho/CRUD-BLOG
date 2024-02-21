import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Importar aquí las interfaces necesarias
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private apiURL = 'https://jsonplaceholder.typicode.com/';

  // Http Header Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
   
  // Constructor
  constructor(private httpClient: HttpClient) { }
    
  // Metodos

  // GET
  public getAll(): Observable<any> {  
    return this.httpClient.get(this.apiURL + 'posts/');
  }

  public getPost(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/posts/${id}`);
  }
    
  // CREATE
  create(post: Post): Observable<any> {
    return this.httpClient.post(this.apiURL + 'posts/', JSON.stringify(post), this.httpOptions);
  }
    
  // BUSCAR
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + 'posts/' + id);
  }
    
  // ACTUALIZAR
  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.apiURL + 'posts/' + id, JSON.stringify(post), this.httpOptions);
  }
       
  // BORRAR
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + 'posts/' + id, this.httpOptions);
  }  
}