import React from "react";
import People from "./people";
import Loader from "./loader";

const SearchQueryForm = ({
  searchQuery,
  handleSearchQuery,
  onClick,
  people,
  searchStatus,
  isLoading,
}) => {
  return (
    <>
      <div className="flex justify-center items-center w-screen">
        <form className="w-2/5 me-3 shadow-2xl rounded-full">
          <input
            className="w-full px-4 py-3 rounded-full"
            name="searchQuery"
            placeholder="Введите имя персонажа..."
            type="text"
            aria-describedby="basic-addon1"
            value={searchQuery}
            onChange={handleSearchQuery}
          />
        </form>
        <button
          className="px-3 py-3 rounded-full btn-color text-white shadow-2xl"
          onClick={onClick}
        >
          Найти
        </button>
      </div>
      {!isLoading ? (
        <People people={people} searchStatus={searchStatus} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SearchQueryForm;
