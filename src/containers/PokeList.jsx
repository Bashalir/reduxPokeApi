import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

import PokeListComponent from "../components/PokeListComponent";

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  getData
};

const ROOT_URL_POKEAPI = "https://pokeapi.co/api/v2";

function PokeList({ getData, loading, data, error }) {
  React.useEffect(() => {
    console.info("Fire UE from PokeListContainer");
    getData(`${ROOT_URL_POKEAPI}/pokemon`);
  }, []);

  return (
    <div>
      <h1>PokeListContainer</h1>
      {loading && <p>Miaouss ça charge...</p>}
      {data && <PokeListComponent pokemonList={data} />}
      {error && <p>Oooups...</p>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
