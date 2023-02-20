import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    private enemies: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  private _battles(enemy: SimpleFighter) {
    let a = 0;
    while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
      console.log(a += 1);
      this.player.attack(enemy);
      enemy.attack(this.player);
    }
  }

  private _BattlesInFight() {
    for (let i = 0; i < this.enemies.length; i += 1) {
      this._battles(this.enemies[i]);
    }
  }

  override fight(): number {
    this._BattlesInFight();
    return super.fight();
  }
}