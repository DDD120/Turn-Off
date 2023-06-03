import React from "react"
import styled from "styled-components"
import FilterInput from "./FilterInput"

const Base = styled.div`
  padding: 10px;
`

const FilterContainer = ({ filters, setFilters }) => {
  return (
    <Base>
      {Object.keys(filters).map((filter) => (
        <FilterInput
          filter={filter}
          filters={filters}
          setFilters={setFilters}
          key={filter}
        />
      ))}
    </Base>
  )
}

export default FilterContainer
