import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

//  name: deve ser recebido como parâmetro no 
//  construtor e deve ser usado para dar nome 
//  à sua personagem.