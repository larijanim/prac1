import React, { useState } from 'react';
import PropTypes from 'prop-types';
const NestedLinks = ({ links }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  NestedLinks.propTypes = {
    links: PropTypes.object.isRequired, // Required object of links
  };
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
            <div>
            {subLinks ? ( // Check if subLinks exist
              <ul>
                <NestedLinks links={subLinks} />
              </ul>
            ) : (
              <p>No sublinks available</p> // Display a message if no sublinks
            )}
          </div>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default NestedLinks;