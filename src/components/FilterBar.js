import React from "react";

const FilterBar = (props) => {
  console.log(props.translations);
  return (
    <div>
      {/* <div> FilterBar </div> */}
      {/* <SelectDiv>
              <Select
                name="chosenLanguage"
                value={this.state.chosenLanguage}
                onChange={this.handleChange}
              >
                <option value="">Select Language:</option>
                props.translation.language.language
                {this.props.languages.map((language) => {
                  return (
                    <option key={language.id} value={language.language_code}>
                      {language.language}
                    </option>
                  );
                })}
              </Select>
            </SelectDiv> */}
    </div>
  );
};

export default FilterBar;
