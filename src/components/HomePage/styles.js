import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
export const PortraitContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  z-index: -1;
`;
export const ImagePortrait = styled.img`
  width: 100%;
  height: 100%;
`;
export const PortraitInfoContainer = styled.div`
  height: 111px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0 0 28px 18px;
  border: none;
  z-index: 1;
`;
export const PortraitText = styled.p`
  font-size: 46px;
  color: #ffffff;
  font-weight: bold;
`;
export const PortraitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 160px;
  height: 36px;
  background-color: #db3022;
  color: #ffffff;
`;
export const ArrivalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 15px 0px 20px;
  margin-bottom: 60px;
`;
export const ArrivalsHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const ArrivalsHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
`;
export const ArrivalsHeaderTitleText = styled.p`
  font-size: 34px;
`;
export const ArrivalsHeaderTitleTextButton = styled.div`
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ArrivalsHeaderSubtile = styled.div`
  font-size: 14px;
  color: #9b9b9b;
`;
export const CarouselPhotosContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  flex-direction: row;
  column-gap: 25px;
  overflow: auto;
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
