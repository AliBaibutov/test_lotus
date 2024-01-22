import React, { useState } from "react";
import axios from "axios";
import SearchQueryForm from "./components/searchQueryForm";

function App() {
  const http = axios.create({
    baseURL: "https://swapi.dev/api",
  });

  const [peopleList, setPeopleList] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchStatus, setSearchStatus] = useState(null);
  const [isLoading, setIsLoading] = useState("");

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  function searchPeople(data) {
    const searchedPeople = searchQuery
      ? data.filter((p) => p.name.toLowerCase() === searchQuery.toLowerCase())
      : null;
    return searchedPeople;
  }

  async function fetchPeople() {
    setIsLoading(true);
    const { data } = await http.get("/people");
    const people = data.results;
    const searchedPeople = searchPeople(people);
    !searchedPeople || !searchedPeople.length
      ? setSearchStatus("Персонаж не найден")
      : setSearchStatus(null);
    setPeopleList(searchedPeople);
    setIsLoading(false);
  }

  function handleClick() {
    fetchPeople();
  }

  return (
    <div>
      <SearchQueryForm
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
        onClick={handleClick}
        people={peopleList}
        searchStatus={searchStatus}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
