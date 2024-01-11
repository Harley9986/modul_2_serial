import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  filter,
  onChangeFilter,
  valueProperty,
  contentProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            "list-group-item list-group-item-action" +
            (item[valueProperty] === filter ? " active" : "")
          }
          key={item[contentProperty]}
          onClick={() => onChangeFilter(item[valueProperty])}
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: "id",
  contentProperty: "text",
};

GroupList.propsTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
};

export default GroupList;
