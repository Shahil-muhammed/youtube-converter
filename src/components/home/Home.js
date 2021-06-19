import React, { useEffect } from 'react'
import './Home.css'
import {useState} from 'react'
import DownloadButton from '../DownloadButton/DownloadButton'
function Home() {
    const [url, seturl] = useState('')
    const [id, setid] = useState('')
    useEffect(() => {
        const id = url.replace("https://www.youtube.com/watch?v=","");
        setid(id);
    }, [url])
    return (
            <div>
            <div className='header'>
            <h1 align='center' className='head'>SHA YouTube CONVERTER</h1>
            </div>
            <div className='content'>
                <form onSubmit={e=>e.preventDefault()} className='faras'>
                    <br/><br/>
                    <label className='enter'>ENTER YOUTUBE URL</label>
                    <input className="urlcol" onChange={e => seturl(e.target.value)} placeholder="paste YouTube url here" type='text' name='url' />
                </form>
            </div>
            <div className="button">
               {id && <DownloadButton id={id} type="mp3"/>}
               {id && <DownloadButton id={id} type="videos"/>}
            </div>
            
        </div>
    )
}

export default Home
