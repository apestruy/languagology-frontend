import React from "react";
import { FilterSelect, FilterDiv, FilterText } from "../styled";

const FilterBar = (props) => {
  return (
    <FilterDiv>
      <FilterText>Filter By Language:</FilterText>
      <FilterSelect
        name="filter"
        value={props.filter}
        onChange={props.handleChange}
      >
        <option value="all">All</option>
        {props.languages.map((language) => {
          return (
            <option key={language} value={language}>
              {language}
            </option>
          );
        })}
      </FilterSelect>
    </FilterDiv>
  );
};

export default FilterBar;
