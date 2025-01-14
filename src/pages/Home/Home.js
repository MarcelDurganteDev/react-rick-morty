import React, { Component } from "react";

import Layout from "../../components/Layout";
import EpisodeCard from "../../components/EpisodeCard";
import NavigationButtons from "../../components/NavigationButtons";


class Home extends Component {
               
  constructor(props) {
    super(props);
    
    this.state = {
      page: 0,
      paginationInfo: null,
      episodes: [],
      hasLoaded: false,
      hasError: false,
      errorMessage: null,
    };
  }

  async componentDidMount() {
    this.loadEpisodes();
  }

  async loadEpisodes() {
    fetch(`https://rickandmortyapi.com/api/episode?${this.state.page}`)
      .then((response) => response.json())
      .then((data) => {
        const pageNum = !data.info.prev ? 1 : this.page + 1;
        console.log(pageNum);
        this.setState({
          page: pageNum,
          episodes: data.results,
          paginationInfo: data.info,
          hasLoaded: true,
          hasError: false,
          errorMessage: null,
        });
      })
  }

  render() {
    
    const { episodes, hasLoaded, hasError } = this.state;

    return (

      <Layout>
        <section className="row">
          {hasLoaded && !hasError && (
            <div className="col col-12">
              <h1>Hi Marcel Dev!</h1>
              <h2>Episodes loaded!</h2>
            </div>
          )}
          <div className="col col-12">
            <hr />
          </div>
          {episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                id={episode.id}
                name={episode.name}
                airDate={episode.air_date}
                episode={episode.episode}
              />
            ))}
          <div className="col col-12">
            <hr />
          </div>
          
          <NavigationButtons onClick={this.loadEpisodes()}/>
        </section>
      </Layout>
    );
  }
}

export default Home;
