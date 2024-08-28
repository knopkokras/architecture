import React, { useState } from "react";

const Filter = ({ originalItems, setItems }) => {
  const [activeTag, setActiveTag] = useState(null);

  const tags = ["All", "Architectural Design", "Residential Interiors", "Commercial Interior"];
  const handleFilter = (tag) => {
    setActiveTag(tag);

    if (tag === "All") {
      setItems(originalItems); 
    } else {
      const filtered = originalItems.filter(
        (item) => item.attributes.tags.includes(tag) 
      );
      setItems(filtered);
    }
  };

  return (
    <div className="catalog__top">
      <div className="catalog__buttons">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleFilter(tag)}
            className={`catalog__buttons-item ${activeTag === tag ? "catalog__buttons-item--action" : ""}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
