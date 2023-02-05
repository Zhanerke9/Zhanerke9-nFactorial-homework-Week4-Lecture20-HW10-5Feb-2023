// import { useState } from 'react';
import {
  COMMENTS,
  LIKES,
  RETWEETS,
  SHARE,
} from "../images";

export default function Tweet(tweety) {
//   const [title, setTitle] = useState(tweety.content);
//     setTitle();
  console.log(tweety);
  //console.log(tweety.content.length);
  return (
    <div className="mt-3 px-3" style={{borderBottom: '2px solid whitesmoke'}}>
      <p className="mx-5 " style={{ fontSize: 13, fontWeight: "600" }}>
        You might like!
        <span style={{ color: "#1D9BF0" }}>See more </span>
      </p>
      <div className="d-flex">
        <img src={tweety.img} style={{ width: 50, height: 50, borderRadius: 50 }} alt="img"/>
        <div className="mx-3">
          <p style={{ fontWeight: 600 }}> {tweety.authorName}<span style={{ color: "grey" }}>{tweety.authorUsername}</span>{" "}</p>
          <p>{tweety.content.length>200 ? tweety.content.slice(0, 232) + '...' : tweety.content}</p>
        </div>
      </div>

      <div
        className="d-flex m-auto justify-content-between"
        style={{ width: "77.5%" }}
      >
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{COMMENTS}</div>
          <p className="px-1">{tweety.replies}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{RETWEETS}</div>
          <p className="px-1">{tweety.retweets}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{LIKES}</div>
          <p className="px-1">{tweety.likes}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{SHARE}</div>
        </div>
      </div>
    </div>

    // <div className='mt-3 px-3'  style={{borderBottom: '2px solid whitesmoke'}}>
    //     <p className='mx-5 d-flex' style={{fontSize:12, fontWeight:'600'}}>
    //         You might like!
    //         <span style={{color:'#1D9BF0'}}>See more  </span>
    //         <p>{tweet.minutes ? tweet.minutes: 'Long time ago'}</p>
    //     </p>

    //     <div className='d-flex justify-content-between'>
    //         <div className='d-flex'>
    //             <img src={tweet.img} style={{width:50, height:50, borderRadius:50}}/>
    //             <div className='mx-3'>
    //                 <p style={{fontWeight:600}}>{tweet.authorName} <span style={{color:'grey'}}>{tweet.authorUsername}</span> </p>
    //                 <p>{title.length>200 ? title.slice(0, 200) + '...' : title}</p>
    //             </div>
    //         </div>
    //         <button onClick={()=>deleteTweet(tweet.id)} style={{width: 35, height: 35, border:'none', backgroundColor:'transparent'}}>
    //             {DELETE}
    //         </button>
    //     </div>

    //     <div className='d-flex m-auto justify-content-between' style={{width:'80%'}}>
    //             <div className='d-flex'>
    //                 <div style={{width:20, height:20}}>{COMMENTS}</div>
    //                 <p className='px-1'>{tweet.replies}</p>
    //             </div>
    //             <div className='d-flex'>
    //                 <div style={{width:20, height:20}}>{RETWEETS}</div>
    //                 <p className='px-1'>{tweet.retweets}</p>
    //             </div>
    //             <div className='d-flex'>
    //                 <div style={{width:20, height:20}}>{LIKES}</div>
    //                 <p className='px-1'>{tweet.likes}</p>
    //             </div>
    //             <div className='d-flex'>
    //                 <div style={{width:20, height:20}}>{SHARE}</div>
    //             </div>
    //         </div>
    // </div>
  );
}
