import { useEffect } from "react";
import styled from "styled-components";
import { getAllProducts } from "../../services/routta";
import Footer from "../Footer/Footer";

export default function HomePage() {
  useEffect(() => {
    getAllProducts()
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <Wrapper>
      <PortraitContainer>
        <ImagePortrait
          alt="fashion portrait"
          src="../assets/img/fashion_sale_portrait.png"
        />
        <PortraitInfoContainer>
          <PortraitText>Fashion Sale</PortraitText>
          <PortraitButton>Check now!</PortraitButton>
        </PortraitInfoContainer>
      </PortraitContainer>
      <ArrivalsContainer>
        <ArrivalsHeader>
          <ArrivalsHeaderTitle>
            <ArrivalsHeaderTitleText>New</ArrivalsHeaderTitleText>
            <ArrivalsHeaderTitleTextButton>
              View All
            </ArrivalsHeaderTitleTextButton>
          </ArrivalsHeaderTitle>
          <ArrivalsHeaderSubtile>
            You've never seen it before
          </ArrivalsHeaderSubtile>
        </ArrivalsHeader>
        <CarouselPhotosContainer>
          <PhotoContainer>
            <Photo alt="model" src="../assets/img/model.png" />
            <PhotoInfoContainer>
              <PhotoInfoBrand>Dorothy Perkins</PhotoInfoBrand>
              <PhotoInfoName>Evening Dress</PhotoInfoName>
              <PhotoInfoPrice>R$ 120,00</PhotoInfoPrice>
            </PhotoInfoContainer>
          </PhotoContainer>
          <PhotoContainer>
            <Photo alt="model" src="../assets/img/model.png" />
            <PhotoInfoContainer>
              <PhotoInfoBrand>Dorothy Perkins</PhotoInfoBrand>
              <PhotoInfoName>Evening Dress</PhotoInfoName>
              <PhotoInfoPrice>R$ 120,00</PhotoInfoPrice>
            </PhotoInfoContainer>
          </PhotoContainer>
          <PhotoContainer>
            <Photo alt="model" src="../assets/img/model.png" />
            <PhotoInfoContainer>
              <PhotoInfoBrand>Dorothy Perkins</PhotoInfoBrand>
              <PhotoInfoName>Evening Dress</PhotoInfoName>
              <PhotoInfoPrice>R$ 120,00</PhotoInfoPrice>
            </PhotoInfoContainer>
          </PhotoContainer>
          <PhotoContainer>
            <Photo alt="model" src="../assets/img/model.png" />
            <PhotoInfoContainer>
              <PhotoInfoBrand>Dorothy Perkins</PhotoInfoBrand>
              <PhotoInfoName>Evening Dress</PhotoInfoName>
              <PhotoInfoPrice>R$ 120,00</PhotoInfoPrice>
            </PhotoInfoContainer>
          </PhotoContainer>
        </CarouselPhotosContainer>
      </ArrivalsContainer>
      <Footer home={true} />
    </Wrapper>
  );
}
// New // viewall
// You've never seen it before"
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const PortraitContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  z-index: -1;
`;
const ImagePortrait = styled.img`
  width: 100%;
  height: 100%;
`;
const PortraitInfoContainer = styled.div`
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
const PortraitText = styled.p`
  font-size: 46px;
  color: #ffffff;
  font-weight: bold;
`;
const PortraitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 160px;
  height: 36px;
  background-color: #db3022;
  color: #ffffff;
`;
const ArrivalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px 15px 0px 20px;
  margin-bottom: 60px;
`;
const ArrivalsHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const ArrivalsHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
`;
const ArrivalsHeaderTitleText = styled.p`
  font-size: 34px;
`;
const ArrivalsHeaderTitleTextButton = styled.div`
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrivalsHeaderSubtile = styled.div`
  font-size: 14px;
  color: #9b9b9b;
`;
const CarouselPhotosContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  flex-direction: row;
  column-gap: 25px;
  overflow: auto;
  margin-bottom: 30px;
`;
const PhotoContainer = styled.div`
  height: 260px;
  width: 150px;
`;
const Photo = styled.img`
  height: 184px;
  width: 100%;
`;
const PhotoInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  row-gap: 8px;
`;
const PhotoInfoBrand = styled.p`
  color: #9b9b9b;
  font-size: 12px;
  font-style: italic;
`;
const PhotoInfoName = styled.p`
  font-size: 16px;
  font-style: italic;
`;
const PhotoInfoPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
