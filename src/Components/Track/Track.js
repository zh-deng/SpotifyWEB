import React from "react";
import "./Track.css";

class Track extends React.Component {
    renderAction() {
        return (
            <button className="Track-action">{this.props.isRemoval===true ? "+" : "-"}</button>
        );
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction}
            </div>
        );
    }
}

export default Track;