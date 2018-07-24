import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video; We don't need this if we do an ES 6 argument extraction ({ video })
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        // The onCLick needs to reference an anonymous function vs onVideoSelect itself
        // Otherwise, when the page loads, even though the user hasn't clicked the 'li'
        // yet, the page will try to execute 'onVideoSelect' to know what the onClick function should point to.
        // If you reference an anonymous function, you are telling React that click events will map to an anonymous function
        // It will not try to run onVideoSelect immediately
        <li className="list-group-item" onClick={ () => onVideoSelect(video) }>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } />
                </div>

                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem