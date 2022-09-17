import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { getAllProducts } from "../../services/routta";
import Footer from "../Footer/Footer";
import NewArrivalProducts from "./NewArrivalProducts";
import {
  Wrapper,
  PortraitContainer,
  ImagePortrait,
  PortraitButton,
  PortraitInfoContainer,
  PortraitText,
  ArrivalsContainer,
  ArrivalsHeader,
  ArrivalsHeaderSubtile,
  ArrivalsHeaderTitle,
  ArrivalsHeaderTitleText,
  ArrivalsHeaderTitleTextButton,
  CarouselPhotosContainer,
  SpinnerWrapper,
} from "./styles";

export default function HomePage() {
  const [clothesInfo, setClothesInfo] = useState([]);
  function getRandomProduct() {
    return Math.floor(Math.random() * 47);
  }

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        const data = response.data;
        for (let i = 0; i < 6; i++) {
          setClothesInfo((clothes) => [...clothes, data[getRandomProduct()]]);
        }
      })
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
          {clothesInfo ? (
            <NewArrivalProducts clothesInfo={clothesInfo} />
          ) : (
            <SpinnerWrapper>
              <InfinitySpin width="200" color="#db3022" />
            </SpinnerWrapper>
          )}
        </CarouselPhotosContainer>
      </ArrivalsContainer>
      <Footer home={true} />
    </Wrapper>
  );
}
