import React, { useRef } from "react"
import styled from "styled-components"

const Base = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const RangeLabel = styled.label`
  color: #cfcfcf;
  margin: 2px;
  flex: 1;
`

const Range = styled.input`
  height: 4px;
  appearance: none;
  margin: 10px 0;
  width: 60%;
  background: transparent;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #ffdeeb;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #f06595;
    cursor: pointer;
  }
`

const FilterInput = ({ filter, filters, setFilters }) => {
  const filterRef = useRef(null)

  const updateFilter = () => {
    setFilters((prev) => {
      return { ...prev, [filter]: filterRef.current.value }
    })
  }
  return (
    <Base>
      <RangeLabel htmlFor={filter}>{filter}</RangeLabel>
      <Range
        ref={filterRef}
        onInput={updateFilter}
        id={filter}
        type="range"
        min="0"
        max="200"
        value={filters[filter]}
      />
    </Base>
  )
}

export default FilterInput
