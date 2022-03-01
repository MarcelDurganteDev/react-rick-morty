import React, { Component } from "react";

import Layout from "../../components/Layout";
import CharacterCard from "../../components/CharacterCard";

class Episode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episode: null,
      characters: [],
      hasLoaded: false,
      hasError: false,
      errorMessage: null,
    };
  }

  async componentDidMount() {
     this.loadEpisode();
 }

  async loadEpisode() {

    fetch('https://rickandmortyapi.com/api/episode/1')
      .then((response) => response.json()) 
        .then((data) => {
        console.log(data)
        this.setState({
          episode: data.id,
          characters: [],
          hasLoaded: true,
          hasError: false,
          errorMessage: null,
        });
      });
  }

  render() {
    const { characters } = this.state;

    return (
      console.log(characters),
      (
        <Layout>
          <section className="row">
            <div className="col col-12">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  species={character.species}
                  status={character.status}
                  origin={character.origin}
                  location={character.location}
                />
              ))}
            </div>
          </section>
        </Layout>
      )
    );
  }
}

export default Episode;
