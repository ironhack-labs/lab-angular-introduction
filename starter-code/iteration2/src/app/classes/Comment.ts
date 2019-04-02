export default class Comment {
    author: string;
    timestamp: Date;
    text: string;
    
    constructor(author: string, timestamp: Date, text: string) {
      this.author = author;
      this.timestamp = timestamp;
      this.text = text;
    }
  }