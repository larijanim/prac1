import React, { useState } from 'react';

const NestedLinks = ({ links }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    setExpandedCategories(prevExpandedCategories => {
      if (prevExpandedCategories.includes(category)) {
        return prevExpandedCategories.filter(cat => cat !== category);
      } else {
        return [...prevExpandedCategories, category];
      }
    });
  };

  return (
    <React.Fragment>
      {Object.entries(links).map(([category, subLinks]) => (
        <React.Fragment key={category}>
          <div><span onClick={() => handleCategoryClick(category)}>{category}</span>:</div>
          {expandedCategories.includes(category) && (
           <div> <ul> 
              <NestedLinks links={subLinks} />
            </ul></div>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default NestedLinks;