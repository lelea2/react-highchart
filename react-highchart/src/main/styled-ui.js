import styled from 'styled-components';

// export const StMainContainer = styled.div`
//   display: grid;
//   grid-template-columns: 80px auto 80px;
//   grid-template-rows: 200px 120px auto;
//   width: 100%;
//   max-width: 1600px;
//   justify-items: center;
//   grid-row-gap: 10px;
//   align-items: center;
//   grid-template-areas: 
//   ". header . "
//   "meta meta meta "
//   ". main-content . ";
// `;

export const StMainContainer = styled.div`
  width: 100%;
`;

// export const StLogo = styled.img`
//   grid-area: header;
// `;

export const StProjectMeta = styled.div`
  grid-area: meta;
  background-color: #555555;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1, h2 {
    font-weight: 100;
  }
`;

// export const StGeneratedInfo = styled.span`
//   color: #49fb35;
// `;

export const StFullScreen = styled.div`
  width: 100%;
  border: 2px solid blue;
`;