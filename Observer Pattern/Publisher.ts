import { INewsSubscriber } from "./Subscriber";

export interface INewsPublisher{
    addSubscriber(subscriber:INewsSubscriber):void;
    removeSubscriber(subscriber:INewsSubscriber):void;
    notifySubscribers():void;
}

export class NewsAgencyPublisger implements INewsPublisher {
    private subscriber: INewsSubscriber[] = [];
    private news : string;

    addSubscriber(subscriber: INewsSubscriber): void {
        const isAlreadySubscribed = this.subscriber.includes(subscriber);
        if(!isAlreadySubscribed){
            this.subscriber.push(subscriber);
        }
    }

    removeSubscriber(subscriber: INewsSubscriber): void {
        const subscriberIndex  = this.subscriber.indexOf(subscriber);
        if(subscriberIndex != -1){
            this.subscriber.splice(subscriberIndex,1);
        }
    }
    notifySubscribers(): void {
        for(const subscriber of this.subscriber){
            subscriber.receiveNewsUpdate(this.news);
        }
    }
    broadCastNews(news:string):void {
        this.news = news;
        this.notifySubscribers();
    }
}