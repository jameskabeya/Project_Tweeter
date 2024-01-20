import Paraph from "./assets/Paraph"
import Myicoment from "./assets/Myicoment"
import Small from "./assets/Small";
import { useState } from "react";
export default function OneTweet({ MyTweet }) {

    const [Click, setclick] = useState(0)
    const handlerLike = () => {
        if (Click % 2 === 0) {
            setclick(Click + 1)
        }else{
            setclick(Click -1)
        }
    }

    const [color, setColor] = useState('red');
    const handlerColor = () => {
        setColor('blue');
    };

    { console.log(); }
    const object = {

        "author_avatar": "https://picsum.photos/200?random=1604299903000",

        "source": "Twitter",

        "date": 1604299903000,

        "favorites": "92746",

        "id": "1323155810910982145",

        "isVerified": true,

        "replies": "24785",

        "retweets": "16287",

        "text": "...As I said at the debate “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    }
    return (
        <div id="container_setting" className='flex border-b border-slate-800 p-4 mt-4 text-white'>
            <div className=''>
                <img className='h-13 w-24  rounded-full' src={MyTweet.author_avatar} alt="image" />
            </div>
            <div className='ml-6'>
                <h2 className="flex">{MyTweet.source} <Small name={MyTweet.date} src="src/assets/Verified.svg" /></h2>
                <Paraph name={MyTweet.text} />
                <img className='pt-2 rounded-3xl w-full object-cover h-60' src={MyTweet.image} alt="Image" />
                <div className='flex pt-5 justify-between'>
                    <Myicoment onClick={handlerColor} style={{ backgroundColor: color }} src="src/assets/Reply.svg" name={MyTweet.replies} ></Myicoment>
                    <p></p>
                    <Myicoment onMouseOver={handlerColor} style={{ backgroundColor: color }} src="src/assets/Retweet.svg" name={MyTweet.retweets} />
                    <Myicoment onClick={handlerLike} style={{ backgroundColor: color }} claces="hover:text-red-500" src="src/assets/React.svg">{Click}</Myicoment>
                    <Myicoment src="src/assets/Share.svg" name="" />
                </div>
            </div>
        </div>
    )
}

