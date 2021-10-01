import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //agregamos la direccion de api auna variable

  private url: string = " https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  getPokemon(name: string ){
    //retornamos la respuesta de la api dada por el nombre de pokemon a buscar
    return this.http.get(`${this.url}/${name}`)

  }
}
