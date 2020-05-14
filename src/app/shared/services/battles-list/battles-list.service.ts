import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBattle } from './battle-interface';

@Injectable({
  providedIn: 'root'
})
export class BattlesListService {

  constructor(private http: HttpClient) { }

  battleId;

  urlBattleRequest =  'https://api.witpoc.com/battles';
  urlOneBattle = 'https://api.witpoc.com/algos/battle';

  getAllBattles(): Observable <IBattle[]>{
    return this.http.get<IBattle[]>(this.urlBattleRequest);
  }

  getBattleById(id: number): Observable <IBattle>{
    return this.http.get<IBattle>(this.urlBattleRequest + '/' + id);
  }


  generateNewBattle(battle: any){
    return this.http.post(this.urlBattleRequest, battle);
  }

  editBattle(battle: any){
    return this.http.put(this.urlBattleRequest + `/${battle.id}`, battle);
  }

  deleteBattle(battle: any){
    return this.http.delete(this.urlBattleRequest + `/${battle.id}`, battle);
  }

  getOneBattle(id){
    return this.http.get(this.urlOneBattle + `/${id}`);
  }
  getBattleId(battleId) {
    return this.battleId = battleId;
  }
  distributeBattleId() {
    return this.battleId;
  }
}
