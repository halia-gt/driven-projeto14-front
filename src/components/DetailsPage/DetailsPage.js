import { IoIosArrowBack } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { addCart, getAllProducts, getProductById } from "../../services/routta";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import {
  Wrapper,
  AppBar,
  AppBarTitle,
  CarouselImageContainer,
  CarouselPhotosContainer,
  CartButton,
  GarmentInfoContainer,
  Image,
  InfoDescriptionText,
  InfoHeaderContainer,
  InfoHeaderText,
  InfoSubtitleText,
  InfoTitle,
  MoreItemsContainer,
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
  SelectionButtonsContainer,
  Spacer,
} from "./styles";
import UserContext from "../../contexts/UserContext";

export default function DetailsPage() {
    const { user, setUser } = useContext(UserContext);
    const [garmetInfo, setGarmetInfo] = useState();
    const [size, setSize] = useState("---");
    const [color, setColor] = useState("--");
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
    //console.log(garmetInfo);

    function handleDropDownSize(event) {
        const choosenSize = event.replace("#", "");
        setSize(choosenSize);
    }
    function handleDropDownColor(event) {
        const choosenColor = event.replace("#", "");
        setColor(choosenColor);
    }

    function addToCart() {
        const data = {
            productId: id,
            name: garmetInfo.displayName,
            size,
            color,
            price: garmetInfo.listPrice
        }
        
        addCart(data)
            .then((answer) => {
                const userWithCart = {
                    ...user,
                    cart: [
                        ...user.cart,
                        answer.data
                    ]
                }

                setUser(userWithCart);
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
        {garmetInfo.variants[0].ProductImages.map((image, index) => {
          if (index !== 1) {
            return <Image key={index} src={image}></Image>;
          }
          return "";
        })}
      </CarouselImageContainer>
      <SelectionButtonsContainer>
        <Dropdown
          style={{ height: "35px", minWidth: "100px" }}
          size="sm"
          onSelect={handleDropDownSize}
          as={ButtonGroup}
        >
          <Dropdown.Toggle
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "30px",
            }}
            variant="danger"
            id="dropdown-basic-1"
          >
            {`Size: ${size}`}
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              height: "80px",
              mminWidth: "120px",

              overflowY: "auto",
            }}
          >
            {garmetInfo.variants[0].Sizes.map((size, index) => {
              return (
                <Dropdown.Item key={index} href={`#${size.SizeName}`}>
                  {size.SizeName}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          style={{ height: "35px", minWidth: "120px" }}
          size="sm"
          onSelect={handleDropDownColor}
          as={ButtonGroup}
        >
          <Dropdown.Toggle
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "30px",
            }}
            variant="danger"
            id="dropdown-basic-2"
          >
            {`Color: ${color}`}
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ height: "80px", minWidth: "120px", overflowY: "auto" }}
          >
            {garmetInfo.variants.map((color, index) => {
              if (index < 3) {
                return (
                  <Dropdown.Item key={index} href={`#${color.ColorName}`}>
                    {color.ColorName}
                  </Dropdown.Item>
                );
              }
              return "";
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Spacer></Spacer>
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
      <CartButton onClick={addToCart}>Add to Cart</CartButton>
      <MoreItemsContainer>
        <MoreItemsLeading>You can also like this</MoreItemsLeading>
        <MoreItemsTrailing>7 items</MoreItemsTrailing>
      </MoreItemsContainer>
      <CarouselPhotosContainer>
        {clothesInfo
          ? clothesInfo.map((garment, index) => {
              return (
                <PhotoDetailsContainer
                  onClick={() => {
                    setClothesInfo([]);
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
                    <PhotoInfoPrice>{garment.listPrice}</PhotoInfoPrice>
                  </PhotoInfoContainer>
                </PhotoDetailsContainer>
              );
            })
          : ""}
      </CarouselPhotosContainer>
    </Wrapper>
  ) : (
    ""
  );
}
