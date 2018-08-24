export class Tweet {
  constructor(
    public id?: number,
    public tag?: string,
    public author?: string,
    public timestamp?: Date,
    public content?: string
  ) { }
}
