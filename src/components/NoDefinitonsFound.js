import React from 'react';


const NoDefinitionsFound = () => {
  return (
    <div className="no-definitions-found">
      <span role="img" aria-label="sad face" className="emoji mb-1">😟</span>
      <h2 className="text-black mb-1">No Definitions Found</h2>
      <p className="text-medium-gray">
        Sorry pal, we couldn't find definitions for the word you were looking for. 
        You can try the search again at a later time or head to the web instead.
      </p>
    </div>
  );
};

export default NoDefinitionsFound;