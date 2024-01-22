const People = ({ people, searchStatus }) => {
  return (
    <>
      {people && people.length ? (
        <div className="text-center mt-5 text-4xl font-mono text-color">
          {people.map((person, i) => (
            <ul key={i}>
              <li>{person.name}</li>
            </ul>
          ))}
        </div>
      ) : (
        <div className="text-center text-4xl mt-5 font-mono text-color">
          {searchStatus}
        </div>
      )}
    </>
  );
};

export default People;
