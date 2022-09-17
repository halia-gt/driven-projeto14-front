import { useNavigate } from "react-router-dom";
import {
    CarouselPhotosContainer,
    MoreItemsHeader,
    MoreItemsLeading,
    MoreItemsTrailing,
    Photo,
    PhotoContainer,
    PhotoDetailsContainer,
    PhotoInfoBrand,
    PhotoInfoContainer,
    PhotoInfoName,
    PhotoInfoPrice,
    PhotoStampContainer,
    MoreItemsContainer,
  } from "./styles";

export default  function YouCanAlsoLike({
    clothesInfo,
    setClothesInfo,
    setImageColor,
    setSize,
    setColor,
  }) {
    const navigate = useNavigate();
    return (
      <MoreItemsContainer>
        <MoreItemsHeader>
          <MoreItemsLeading>You can also like this</MoreItemsLeading>
          <MoreItemsTrailing>7 items</MoreItemsTrailing>
        </MoreItemsHeader>
        <CarouselPhotosContainer>
          {clothesInfo.map((garment, index) => {
            return (
              <PhotoDetailsContainer
                onClick={() => {
                  setClothesInfo([]);
                  setImageColor(0);
                  setSize("---");
                  setColor("---");
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
                  <PhotoInfoPrice>${garment.listPrice}</PhotoInfoPrice>
                </PhotoInfoContainer>
              </PhotoDetailsContainer>
            );
          })}
        </CarouselPhotosContainer>
      </MoreItemsContainer>
    );
  }
  
  