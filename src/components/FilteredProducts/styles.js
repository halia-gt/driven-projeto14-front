import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  font-style: italic;
  top: 0;
  z-index: 1;
  left: 0;
  background-color: #f9f9f9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08),
    0 4px 4px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.08);
`;
export const AppBarTitle = styled.div``;
export const Spacer = styled.p``;
export const ProductsContainer = styled.div`
  width: 100%;
  margin: 80px 0;
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
`;

export const PhotoDetailsContainer = styled.div`
  height: 300px;
  width: 145px;
  display: flex;
  flex-direction: column;
`;
export const PhotoContainer = styled.div`
  position: relative;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.08), 4px 4px 4px rgba(0, 0, 0, 0.08),
    6px 6px 6px rgba(0, 0, 0, 0.01);
`;
export const Photo = styled.img`
  height: 185px;
  width: 100%;
`;
export const PhotoInfoContainer = styled.div`
  height: 100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  row-gap: 8px;
`;
export const PhotoInfoBrand = styled.p`
  color: #9b9b9b;
  font-size: 12px;
  font-style: italic;
`;
export const PhotoInfoName = styled.p`
  font-size: 16px;
  font-style: italic;
`;
export const PhotoInfoPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
export const LandPageContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  position: relative;
  box-shadow: 2px 0 2px 2px rgba(0, 0, 0, 0.08),
    2px 0 4px 4px rgba(0, 0, 0, 0.08), 2px 0 6px 6px rgba(0, 0, 0, 0.01);
`;
export const LandPageImage = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const LandPageTextContainer1 = styled.div`
  position: absolute;
  background-color: #121212;
  top: 0;
  left: 0;
  height: 28px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  margin: 10px 0 0 10px;
`;
export const LandPageTextContainer2 = styled.div`
  position: absolute;
  background-color: #121212;
  bottom: 0;
  right: 0;
  height: 24px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 0 10px 10px 0;
`;
export const LandPageText = styled.p`
  font-size: 12.5px;
  font-style: italic;
  color: #ffffff;
`;
