import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/routta";
import { useNavigate, useParams } from "react-router-dom";
import "react-dropdown/style.css";

export default function DetailsPage() {
  const [garmetInfo, setGarmetInfo] = useState();
  const id = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductById(id.productId)
      .then((response) => {
        setGarmetInfo(response.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);
  //console.log(garmetInfo);
  return garmetInfo ? (
    <Wrapper>
      <AppBar>
        <IoIosArrowBack
          onClick={() => {
            navigate("/home");
          }}
          size="1.5em"
        />
        <AppBarTitle>{garmetInfo.displayName}</AppBarTitle>
        <Spacer></Spacer>
      </AppBar>
      <CarouselImageContainer>
        {garmetInfo.variants[0].ProductImages.map((image, index) => {
          if (index !== 1) {
            return <Image key={index} src={image}></Image>;
          }
          return "";
        })}
      </CarouselImageContainer>

      <SelectionButtonsContainer>
        <DropDownButtonSizeList>
          <ButtonSize>Size</ButtonSize>;
          {garmetInfo.variants[0].Sizes.map((size, index) => {
            return <ButtonSize key={index}>{size.SizeName}</ButtonSize>;
          })}
        </DropDownButtonSizeList>
        <DropDownButtonSizeList>
          <ButtonSize>Color</ButtonSize>;
          {garmetInfo.variants.map((color, index) => {
            if (index < 3) {
              return <ButtonSize key={index}>{color.ColorName}</ButtonSize>;
            }
            return "";
          })}
        </DropDownButtonSizeList>
      </SelectionButtonsContainer>
      <GarmentInfoContainer>
        <InfoHeaderContainer>
          <InfoTitle>
            <InfoHeaderText>{garmetInfo.displayName}</InfoHeaderText>
          </InfoTitle>
          <InfoHeaderText>${garmetInfo.listPrice}</InfoHeaderText>
        </InfoHeaderContainer>
        <InfoSubtitleText>by Routta</InfoSubtitleText>
        <InfoDescriptionText>
          {garmetInfo.description
            .split("div")[1]
            .replace(/class="d_content">|<|p|>-|>/g, "")
            .replace("/", "")}
        </InfoDescriptionText>
      </GarmentInfoContainer>
      <CartButton>Add to Cart</CartButton>
    </Wrapper>
  ) : (
    ""
  );
}

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 80px;
  width: 100%;
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
