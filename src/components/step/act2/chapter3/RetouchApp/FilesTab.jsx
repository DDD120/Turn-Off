import React from "react";
import styled from "styled-components";

const Base = styled.div`
  color: #ffffff80;
  border-bottom: 1px solid #ffffff80;
  display: flex;
`;

const FileTab = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:nth-of-type(1) {
    background-color: ${({ currentFile }) => currentFile === 0 && "#1864ab"};
  }
  &:nth-of-type(2) {
    background-color: ${({ currentFile }) => currentFile === 1 && "#1864ab"};
  }
  &:nth-of-type(3) {
    background-color: ${({ currentFile }) => currentFile === 2 && "#1864ab"};
  }
`;

const FilesTab = ({ currentFile, FILE_STATE }) => {
  return (
    <Base>
      <FileTab currentFile={currentFile} title={FILE_STATE[0].title}>
        {FILE_STATE[0].title}
      </FileTab>
      <FileTab currentFile={currentFile} title={FILE_STATE[1].title}>
        {FILE_STATE[1].title}
      </FileTab>
      <FileTab currentFile={currentFile} title={FILE_STATE[2].title}>
        {FILE_STATE[2].title}
      </FileTab>
    </Base>
  );
};

export default FilesTab;
