export interface INewsSubscriber {
    receiveNewsUpdate(news :string):void;
}

export class UserSubscriber implements INewsSubscriber {
    private subscriberName : string;
    constructor(subscriberName : string){
        this.subscriberName = subscriberName;
    }

    receiveNewsUpdate(news: string): void {
        console.log(`${this.subscriberName} received news update :: ${news}`);
        
    }
}