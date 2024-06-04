import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface NbUiWebProps {}

const StyledNbUiWeb = styled.div`
  color: pink;
`;

export function NbUiWeb(props: NbUiWebProps) {
  return (
    <StyledNbUiWeb>
      <h1>Welcome to NbUiWeb!</h1>
    </StyledNbUiWeb>
  );
}

export default NbUiWeb;
