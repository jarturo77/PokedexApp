import { PokemonService } from './../servives/pokemon.service';
import { Component, OnInit } from '@angular/core';
//import { ok } from 'assert';
//import { error } from 'console';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  acord: string
  name: string
  urlImage: string
  namePoke: string
  experience: string
  attack: string
  specialAtacck: string
  defense: string
  specialDefense: string
  velocity: string
  type: string
  hp: string
  alert: string
  position : string

  constructor(private PokemonService : PokemonService) { }

  ngOnInit(): void {
  }
  search(){
    this.PokemonService.getPokemon(this.name).subscribe((data:any) => {
      
      
       
      this.urlImage = data.sprites.front_default
      this.namePoke = data.species.name
      this.experience = data.base_experience
      this.attack= data.stats[1].base_stat
      this.specialAtacck= data.stats[3].base_stat
      this.defense= data.stats[2].base_stat
      this.specialDefense= data.stats[4].base_stat
      this.velocity= data.stats[5].base_stat
      this.hp= data.stats[0].base_stat
      this.type= data.types[0].type.name
      this.position= data.game_indices[4].game_index
      this.acord= 'si'
    

   
    
    
    },err => {
   
      // Entra aquí si el servicio entrega un código http de error EJ: 404, 
      404
      console.log(err.status)
      this.alert= err.status
      //console.log(this.alert)
      
    return this.alert
    }
    )

  }

}
