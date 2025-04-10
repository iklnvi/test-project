import React, { useEffect, useMemo, useState } from "react";
import { ListItem } from "./components";
import useData from "./useData";
import useSort from "./useSort";
import { useActiveItem } from "./ActiveItemContext";

const SubTitle: React.FC<any> = ({ children }) => (
  <h2 className={"list-subtitle"}>Active Item ID: {children}</h2>
);

function ListPage() {
  const { activeItemId, setActiveItemId } = useActiveItem();
  const items = useData();
  const [sortedItems, sortBy, handleSortClick] = useSort(items);

  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");

  const activeItemText = useMemo(
    () => (activeItemId ? activeItemId : "Empty"),
    [activeItemId]
  );

  const handleItemClick = (id: any) => {
    setActiveItemId(id);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setFilteredItems(sortedItems);
  }, [sortedItems]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = sortedItems.filter((item) =>
        `${item.id}`.includes(query.trim())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(sortedItems);
    }
  }, [query, sortedItems]);

  return (
    <div className={"list-wrapper"}>
      <div className="list-header">
        <h1 className={"list-title"}>Items List</h1>
        <SubTitle>{activeItemText}</SubTitle>
        <button onClick={handleSortClick}>
          Sort ({sortBy === "ASC" ? "ASC" : "DESC"})
        </button>
        <input
          type="text"
          placeholder={"Filter by ID"}
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div className="list-container">
        <div className="list">
          {filteredItems.length === 0 && <span>Loading...</span>}
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              isactive={item.id === activeItemId}
              id={item.id}
              name={item.name}
              description={item.description}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
