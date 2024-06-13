import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglebtn,Addtweet } from '../store/Slice'; // Assuming this is your action creator

function Post() {
    const [tweet, settweet] = useState('');
    const [title, settitle] = useState('');
    const [posi, setposi] = useState('fixed');
    const dispatch = useDispatch();
    const pos = useSelector(state => state.toggle);

    const toggle = () => {

      dispatch(togglebtn(posi))
      
    };

    const handlePost = (e) => {
        e.preventDefault()
        dispatch(Addtweet(tweet))
        dispatch(togglebtn(posi))
        settitle("")
        settweet("")

    };

    return (
        <div className={`border-2 bg-slate-100 p-10 w-[50vw]  h-[60vh] flex justify-center ${pos} items-center flex-col ml-[300px] rounded-lg shadow-lg `}>
            <h1>Post Tweet</h1>
            <form className="w-full  ml-[-100px] ">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Title
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={title} onChange={(e) => settitle(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            Tweet
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Tweet..." value={tweet} onChange={(e) => settweet(e.target.value)} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="w-[50%]">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handlePost}>
                            Post
                        </button>
                    </div>
                    <button className="shadow bg-slate-400 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={toggle}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Post;
