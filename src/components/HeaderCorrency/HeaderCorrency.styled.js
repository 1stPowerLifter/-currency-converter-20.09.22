import styled from "styled-components";

export const HeaderCorrencyList = styled.ul`
/* display="flex" gridGap="16px" background={bg} */
display: flex;
gap: ${p => p.theme.space[4]}px;
background:linear-gradient(90deg, rgba(255,252,0,1) 0%, rgba(41,4,255,1) 100%);
padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.lg};
`