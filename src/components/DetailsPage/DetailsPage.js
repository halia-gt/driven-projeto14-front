import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { addCart, getAllProducts, getProductById } from "../../services/routta";
import { useNavigate, useParams } from "react-router-dom";

import {
  Wrapper,
  AppBar,
  AppBarTitle,
  CarouselImageContainer,
  CartButton,
  GarmentInfoContainer,
  Image,
  InfoDescriptionText,
  InfoHeaderContainer,
  InfoHeaderText,
  InfoSubtitleText,
  InfoTitle,
  Spacer,
  SpinnerWrapper,
} from "./styles";
import { InfinitySpin } from "react-loader-spinner";
import YouCanAlsoLike from "./YouCanAlsoLike";
import DropdownButtons from "./DropDownButtons";

export default function DetailsPage() {
  const [garmetInfo, setGarmetInfo] = useState();
  const [size, setSize] = useState("---");
  const [color, setColor] = useState("--");
  const [imageColorIndex, setImageColor] = useState(0);
  const [clothesInfo, setClothesInfo] = useState([]);
  function getRandomProduct() {
    return Math.floor(Math.random() * 47);
  }

  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        const data = response.data;
        console.log(data)
        for (let i = 0; i < 6; i++) {
          setClothesInfo((clothes) => [...clothes, data[getRandomProduct()]]);
        }
      })
      .catch((err) => console.log(err));
    getProductById(id.productId)
      .then((response) => {
        setGarmetInfo(response.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

    function addToCart() {
        const data = {
            productId: id.productId,
            name: garmetInfo.displayName,
            size,
            color,
            price: garmetInfo.listPrice,
            image: garmetInfo.defaultProductImage
        }
        
        addCart(data)
            .then(() => {
                navigate("/bag");
            })
            .catch((error) => {
                console.log(error);
            });
    }


  return garmetInfo ? (
    <Wrapper>
      <AppBar>
        <IoIosArrowBack
          onClick={() => {
            navigate("/");
          }}
          size="1.5em"
        />
        <AppBarTitle>{garmetInfo.displayName}</AppBarTitle>
        <Spacer></Spacer>
      </AppBar>
      <CarouselImageContainer>
        {garmetInfo.variants[imageColorIndex].ProductImages.map(
          (image, index) => {
            if (index !== 1) {
              return (
                <Image
                  key={index}
                  alt=""
                  src={image}
                  onError={(event) => (event.target.style.display = "none")}
                />
              );
            }
            return "";
          }
        )}
      </CarouselImageContainer>
      <DropdownButtons
        garmetInfo={garmetInfo}
        size={size}
        setSize={setSize}
        setClothesInfo={setClothesInfo}
        color={color}
        setColor={setColor}
        setImageColor={setImageColor}
      />

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
            .split(".")[0]
            .replace(/class="d_content">|<|p|>-|>/g,"")
            .replace("/", "")}.
        </InfoDescriptionText>
      </GarmentInfoContainer>
      <CartButton onClick={addToCart}>Add to Cart</CartButton>
      <YouCanAlsoLike
        clothesInfo={clothesInfo}
        setClothesInfo={setClothesInfo}
        setImageColor={setImageColor}
        setSize={setSize}
        setColor={setColor}
      />
    </Wrapper>
  ) : (
    <SpinnerWrapper>
      <InfinitySpin width="200" color="#db3022" />
    </SpinnerWrapper>
  );
}
