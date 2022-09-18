import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
`;
export const LandPageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08), 0 4px 4px rgba(0, 0, 0, 0.08),
    0 6px 6px rgba(0, 0, 0, 0.01);
`;
export const LandPageImage = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const LandPageTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  margin: 0 0 15px 10px;
`;
export const LandPageText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;
export const CategoriesContainer = styled.div`
  margin-top: 210px;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-bottom: 70px;
`;
export const CategorieContainer = styled.div`
  height: 130px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08),
    0 4px 4px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.08);
`;
export const CategorieTitleContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CategorieTitle = styled.p`
  font-size: 18px;
  font-style: italic;
`;
export const CategorieImage = styled.img`
  height: 100%;
  width: 50%;
`;
