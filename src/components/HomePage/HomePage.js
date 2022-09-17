import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, getProductById } from "../../services/routta";
import Footer from "../Footer/Footer";
import {
  Wrapper,
  PortraitContainer,
  ImagePortrait,
  PhotoDetailsContainer,
  PortraitButton,
  PortraitInfoContainer,
  PortraitText,
  Photo,
  PhotoContainer,
  PhotoInfoBrand,
  PhotoInfoContainer,
  PhotoInfoName,
  PhotoInfoPrice,
  PhotoStampContainer,
  ArrivalsContainer,
  ArrivalsHeader,
  ArrivalsHeaderSubtile,
  ArrivalsHeaderTitle,
  ArrivalsHeaderTitleText,
  ArrivalsHeaderTitleTextButton,
  CarouselPhotosContainer,
} from "./styles";

export default function HomePage() {
  const [clothesInfo, setClothesInfo] = useState([]);
  const navigate = useNavigate();
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
          <PortraitButton
          >
            Check now!
          </PortraitButton>
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
          {clothesInfo
            ? clothesInfo.map((garment, index) => {
                return (
                  <PhotoDetailsContainer
                    onClick={() => {
                      navigate(`/details/${garment._id}`);
                    }}
                    key={index}
                  >
                    <PhotoContainer>
                      <PhotoStampContainer>
                        <p>New</p>
                      </PhotoStampContainer>
                      <Photo alt="model" src={garment.defaultProductImage} />
                    </PhotoContainer>
                    <PhotoInfoContainer>
                      <PhotoInfoBrand>Routta</PhotoInfoBrand>
                      <PhotoInfoName>{garment.displayName}</PhotoInfoName>
                      <PhotoInfoPrice>{garment.listPrice}</PhotoInfoPrice>
                    </PhotoInfoContainer>
                  </PhotoDetailsContainer>
                );
              })
            : ""}
        </CarouselPhotosContainer>
      </ArrivalsContainer>
      <Footer home={true} />
    </Wrapper>
  );
}
