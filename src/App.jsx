// import { useEffect, useState } from 'react'
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
import Profil from './Profil'
import Timeline from './Timeline'
import Siderbar from './Siderbar'
import Trendline from './Trendline'
import Homeline from './Homeline'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import logIn_Auth from './LogInAuth'


function App() {

  const [post, setPost] = useState([])
  useEffect(() => {
    axios.all([
      axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts"),
      axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
    ])
      .then(
        axios.spread((posts, users) => {
          // fist link
          console.log(posts.data);
          setPost(posts.data);
          //last link
          console.log(users.data);
        }))
        .catch((err) => console.log(err));
  }, [])

  return (
    // <div>
    //   <logIn_Auth />
    // </div>

    <div className='border-x w-1/3 border-slate-800'>
      <div>
        <div>
          <Homeline />
        </div>
        <Timeline />
      </div>
      {
        post.map((tab) => <OneTweet props={tab}  />)
      }
    </div>

  )
}

export default App
