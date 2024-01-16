import { useState } from 'react'
import './App.css'
import Myicones from './Myicones'
import Mybutton from './Button'
import Aboutinput from './Myinput'
import Myimage from './Image'
import All_icones from './Allicones'
import Paraph from './assets/Paraph'
import Myicoment from './assets/Myicoment'
import Allimage from './Allimage'
import Search from './Search'
import OneTweet from './Onetweet'
import Setting from './Setting'
import Onsitting from './Onsitting'
import Followers from './Followers'
import Private from './Private'

function App() {
  const [count, setCount] = useState(0)
  const tabs = [

    {

      "author_avatar": "https://picsum.photos/200?random=1604299903000",

      "source": "Twitter",

      "date": 1604299903000,

      "favorites": "92746",

      "id": "1323155810910982145",

      "isVerified": true,

      "replies": "24785",

      "retweets": "16287",

      "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1609942590000",

      "source": "Apple",

      "date": 1609942590000,

      "favorites": "396603",

      "id": "1346822958006886400",

      "isVerified": false,

      "replies": "896",

      "retweets": "54694",

      "text": "Even Mexico uses Voter I.D.",

      "image": "https://picsum.photos/1024/200?random=1346822958006886400"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1604231375000,

      "favorites": "124689",

      "id": "1322868385361891328",

      "isVerified": true,

      "replies": "8",

      "retweets": "22972",

      "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",

      "image": "https://picsum.photos/200/800?random=1322868385361891328"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604084613000",

      "source": "CNN",

      "date": 1604084613000,

      "favorites": "44842",

      "id": "1322252819299135488",

      "isVerified": false,

      "replies": "1024",

      "retweets": "9563",

      "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

      "image": "https://picsum.photos/200?random=1322252819299135488"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1603037689000",

      "source": "Trump D.",

      "date": 1603037689000,

      "favorites": 62414,

      "id": "1317861704819118080",

      "isVerified": false,

      "replies": "258",

      "retweets": 16811,

      "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1602377246000",

      "source": "Lauraine L.",

      "date": 1602377246000,

      "favorites": 34952,

      "id": "1315091604496158720",

      "isVerified": true,

      "replies": "85",

      "retweets": 10008,

      "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",

      "image": "https://picsum.photos/200?random=1315091604496158720"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1601996447000",

      "source": "Mexico City",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1554075712000",

      "source": "New York Times",

      "date": 1554075712000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1548956601000",

      "source": "Samsung",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",
      "retweets": 14359,
      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",

      "image": "https://picsum.photos/2048/1024?random=1313494418314457090"

    }

  ]

  return (
    <div className='flex justify-center m-auto'>
      <div className='text-white pt-5 w-1/3'>
        <div id='Container_navbar' className='fixed '>
          <Myicones name="Font" src="src/assets/Twitter.svg" />
          <Myicones name="Home" src="src/assets/Home-Fill.svg" />
          <Myicones name="Notifications" src="src/assets/Explore.svg" />
          <Myicones name="Messages" src="src/assets/Notifications-Fill.svg" />
          <Myicones name="Bookmarks" src="src/assets/Bookmarks-Fill.svg" />
          <Myicones name="Lists" src="/src/assets/Lists-Fill.svg" />
          <Myicones name="Profil" src="src/assets/Profile-Fill.svg" />
          <Myicones name="More" src="src/assets/More-2.svg" />
          <Mybutton />
          <Private classes="pt-24" clase="w-10 rounded-3xl" src="src/assets/dan.jpeg" name="The News York Times" srce="src/assets/Private.svg" set="src/assets/More-2.svg" />
        </div>
      </div>
      <div className='border-x w-1/3 border-slate-800'>
        <div>
          <div>
            <div className='text-white flex w-full p-3 justify-between'>
              <h2 className='font-bold'>Home</h2>
              <Allimage src="src/assets/Timeline-Prop.svg" alt="Image" />
            </div>
          </div>
          <div className='pt-5 p-2 border-y border-slate-800  text-white '>
            <div className='flex'>
              <Allimage src="src/assets/Profile-Fill.svg" alt="Images du jour" />
              <textarea className='bg-black text-silver resize-none' placeholder='Whats happening' name="" id="" cols="50" rows="1"></textarea>
            </div>
            <div className=' flex justify-between'>
              <div className='flex gap-3 pt-8'>
                <All_icones src="src/assets/Media.svg" />
                <All_icones src="src/assets/Gif.svg" />
                <All_icones src="src/assets/Poll.svg" />
                <All_icones src="src/assets/Emoji.svg" />
                <All_icones src="src/assets/Schedule.svg" />
              </div>
              <div className='pt-8'>
                <button className=' rounded-full w-20 bg-blue-500'>Tweet</button>
              </div>
            </div>
          </div>
        </div>
        {
          tabs.map((tab) => <OneTweet MyTweet={tab} />)
        }

      </div>

      <div className='w-1/3 text-white p-3'>
        <div className='fixed'>
          <div className='border-boundell max-w-xs'>
            <Search />
          </div>
          <div className='bg-gray-900 max-w-xs rounded-3xl mt-8 p-5'>
            <div className='flex justify-between'>
              <p><strong>TRENDS FOR YOU</strong></p>
              <img src="src/assets/Settings.svg" alt="" />
            </div>
            <Myicones name="" src="" />
            <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
            <Onsitting name="#SQUID" names="2,066 twetts" />
            <Myicones name="" src="" />
            <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
            <Onsitting name="#SQUID" names="2,066 twetts" /><Myicones name="" src="" />
            <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
            <Onsitting name="#SQUID" names="2,066 twetts" /><Myicones name="" src="" />
            <Setting name="Trinding in Terky" src="src/assets/More-2.svg" />
            <Onsitting name="#SQUID" names="2,066 twetts" />
            <button><strong className='text-blue-400'>Show more</strong></button>
          </div>
          <div className='bg-gray-900 pt-10 rounded-3xl mt-8 p-3'>
            <div>
              <Followers src="src/assets/Profile-Photo(2).svg" name="The News York Times" srce="src/assets/Verified.svg" names="@nytimes" nam="Follow" />
            </div>
            <div className='mt-3'>
              <Followers src="src/assets/Profile-Photo.svg" name="The News York Times" srce="src/assets/Verified.svg" names="@nytimes" nam="Follow" />
            </div>
            <div className='mt-3'>
              <Followers src="src/assets/Profile-Photo(1).svg" name="The News York Times" srce="src/assets/Verified.svg" names="@nytimes" nam="Follow" />
              <button className='mt-3'><strong className='text-blue-400'>Show more</strong></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
