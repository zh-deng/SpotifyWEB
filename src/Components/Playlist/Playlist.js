import React from "react";
import "./Playlist.css";
import Tracklist from "../TrackList/Tracklist";

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                {/* <Tracklist /> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;