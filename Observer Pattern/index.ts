import { NewsAgencyPublisger } from "./Publisher";
import { UserSubscriber } from "./Subscriber";

//News site
const newsSite = new NewsAgencyPublisger();

//subscriber of news site
const user1 = new UserSubscriber("Ashank");
const user2 = new UserSubscriber("Princu");
const user3 = new UserSubscriber("Ashish");

newsSite.addSubscriber(user1);
newsSite.addSubscriber(user2);
newsSite.addSubscriber(user3);

newsSite.broadCastNews("India won the world Cup 2024");


