export default class TeamsNBA {
    year: number;
    name: string;
    imgUrl: string;
    bestPlayers: Array<string>;
    
    constructor(year: number, name: string, imgUrl: string, bestPlayers: Array<string>) {
        this.year = year;
        this.name = name;
        this.imgUrl = imgUrl;
        this.bestPlayers = bestPlayers;
    }
}