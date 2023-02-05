import { NFACTORIAL_IMG_PATH, KZ_IMG_PATH  } from "../images";
import Tweet from './Tweet';


export default function TweetsList(){

    const tweets = [
            {
                id: 0,
                authorName: 'Free KZ today',
                authorUsername: '@kz',
                img: KZ_IMG_PATH,
                content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                replies:200,
                retweets: 1000,
                likes:500,
                topic: 'politics'
            },
            {
                id: 1,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'Data analytics course starts today!',
                replies: 10000000,
                retweets: 1000000,
                likes: 500,
                topic: 'education'
            },
            {
                id:2,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'Black friday! Успей купить курсы сегодня!',
                replies: 10000000,
                retweets: 1000000,
                likes: 500,
                topic: 'education'
            },
            {
                id:3,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'OUR FIRST POST! Black friday! Успей купить курсы сегодня!Black friday! Успей купить курсы сегодня!Black friday! Успей купить курсы сегодня!Black friday! Успей купить курсы сегодня!Black friday! Успей купить курсы сегодня!Black friday! Успей купить курсы сегодня!Black friday! Успей купить курсы сегодня!',
                replies: 1,
                retweets: 4,
                likes: 4,
                topic: 'education'
            },
    ]
 //   return tweets.map((tweet)=> <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet}/>)
 return (

    tweets.map((tweety, index) => <Tweet {...tweety} key={index} />)
 )

}
