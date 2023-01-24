/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FilterTrack = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 24px;
  display: block;
  width: 152px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #ffffff;
  flex: none;
  order: 4;
  flex-grow: 0;
`;
export const FilterTrackHover = styled.p`
  &:hover ${FilterTrack} {
    text-decoration-line: underline;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #b672ff;
  }
`;
