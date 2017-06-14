export class Championships {
  year: number[];
  champion: string;
  champion_url: string;
  best_players: string[];

  constructor(year: number[], champion: string, champion_url: string, best_players: string[]) {
    this.year = year;
    this.champion = champion;
    this.champion_url = champion_url;
    this.best_players = best_players;
  }
}
