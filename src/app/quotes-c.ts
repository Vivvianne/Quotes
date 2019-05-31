export class QuotesC {
    public Quotes: string;
    public author: string;
    public showDescription:boolean;
    constructor(Quotes:string, author:string,public description:string,public completeDate:Date){
        this.Quotes= Quotes;
        this.author=author;
    }
}
