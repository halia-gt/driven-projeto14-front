import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const CarouselImageContainer = styled.div`
  margin-top: 55px;
  height: 440px;
  display: grid;
  grid-auto-flow: column;
  flex-direction: row;
  overflow-x: scroll;
  width: 100%;
`;
export const Image = styled.img`
  height: 100%;
  width: 280px;
  border-right: 0.5px solid grey;
`;
export const SelectionButtonsContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px 15px 0 15px;
`;
export const DropDownButtonSizeList = styled.select`
  width: 60px;
  max-height: 160px;
  overflow: auto;
  border-radius: 10px;
`;
export const ButtonSize = styled.option``;
export const GarmentInfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  margin: 28px 0;
`;
export const InfoHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: italic;
`;
export const InfoTitle = styled.div`
  width: 70%;
  margin-bottom: 15px;
`;
export const InfoHeaderText = styled.p`
  font-size: 24px;
  color: #000000;
`;
export const InfoSubtitleText = styled.p`
  font-size: 14px;
  color: #9b9b9b;
  padding-bottom: 15px;
`;
export const InfoDescriptionText = styled.p`
  font-size: 17px;
  font-style: italic;
`;
export const CartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 280px;
  height: 38px;
  margin: 0px 0 20px 0;
  background-color: #db3022;
  color: #ffffff;
`;
export const CarouselPhotosContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  flex-direction: row;
  column-gap: 25px;
  overflow: auto;
  padding-left: 15px;
  margin-bottom: 30px;
`;
export const PhotoDetailsContainer = styled.div`
  height: 300px;
  width: 140px;
  display: flex;
  flex-direction: column;
`;
export const PhotoContainer = styled.div`
  position: relative;
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
export const PhotoStampContainer = styled.div`
  height: 22px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #000000;
  border-radius: 5px;
  font-size: 13.5px;
  font-style: italic;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 8px 8px 0;
`;
export const MoreItemsContainer = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 15px 0;
`;
export const MoreItemsLeading = styled.p`
  font-size: 18px;
  color: #000000;
  font-style: italic;
`;
export const MoreItemsTrailing = styled.p`
  font-size: 11px;
  color: #9b9b9b;
`;
