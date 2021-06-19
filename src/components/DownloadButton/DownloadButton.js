import React from 'react'
import './DownloadButton.css'


function DownloadButton({id , type}) {
    return (
        <div className="Button">
           <iframe class="button-api-frame"
            src={`https://www.yt-download.org/@api/button/${type}/${id}`}
             width="100%"
              height="100%"
               allowtransparency="true"
                scrolling="no"
                 style={{border:"i px solid black"}}>

           </iframe>
        </div>
    )
}

export default DownloadButton
