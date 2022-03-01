import React, { Component } from "react";
import "./NavigationButtons.scss";
// import { Link } from "react-router-dom";


// import * as routes from "../../constants/routes";



class NavigationButtons extends Component {

  
  

  render() {

    return (
      <div className="">
        <button 
          className="m-2 btn btn-outline-primary btn-lg"
          role="button"
        
        >
          Previous Page
        </button>
        <button
          className="m-2 btn btn-outline-primary btn-lg"
          role="button"
        >
          Next Page
        </button>
      </div>
    );
  }
}

export default NavigationButtons;


// function EpisodeCard({ id, name, airDate, episode }) {
//   return (
//     <div className="col col-12 col-sm-6 col-xl-4 EpisodeCard">
//       <Link to={`${routes.EPISODE}/${id}`}>
//         <h3 className="Episode__name h5">{name}</h3>
//       </Link>
//       <div className="Episode__meta">
//         <p className="Episode__meta-item">{airDate}</p>
//         <p className="Episode__meta-item">|</p>
//         <p className="Episode__meta-item">{episode}</p>
//       </div>
//     </div>
//   );
// }

// export default EpisodeCard;