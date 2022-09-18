import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductByCategory } from "../../services/api";
import {
  Wrapper,
  AppBar,
  AppBarTitle,
  LandPageContainer,
  LandPageImage,
  LandPageText,
  LandPageTextContainer1,
  LandPageTextContainer2,
  Photo,
  PhotoContainer,
  PhotoDetailsContainer,
  PhotoInfoBrand,
  PhotoInfoContainer,
  PhotoInfoName,
  PhotoInfoPrice,
  ProductsContainer,
  Spacer,
} from "./styles";

export default function FilteredProducts() {
  const navigate = useNavigate();
  const categoryName = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  function getRandomProduct() {
    return Math.floor(Math.random() * 2);
  }
  const landScapePictures = [
    "../assets/img/footer_1.png",
    "../assets/img/footer_2.png",
  ];
  useEffect(() => {
    getProductByCategory(categoryName.categoryId)
      .then((response) => setFilteredProducts(response.data))
      .catch((err) => console.log(err));
  }, [categoryName]);
  return (
    <Wrapper>
      <AppBar>
        <IoIosArrowBack
          onClick={() => {
            navigate("/categories");
          }}
          size="1.5em"
        />
        <AppBarTitle>{categoryName.categoryId}</AppBarTitle>
        <Spacer></Spacer>
      </AppBar>

      <ProductsContainer>
        {filteredProducts.map((product, index) => {
          return (
            <PhotoDetailsContainer
              onClick={() => {
                navigate(`/details/${product._id}`);
              }}
              key={index}
            >
              <PhotoContainer>
                <Photo alt="" src={product.defaultProductImage} />
              </PhotoContainer>
              <PhotoInfoContainer>
                <PhotoInfoBrand>Routta</PhotoInfoBrand>
                <PhotoInfoName>{product.displayName}</PhotoInfoName>
                <PhotoInfoPrice>${product.listPrice}</PhotoInfoPrice>
              </PhotoInfoContainer>
            </PhotoDetailsContainer>
          );
        })}
      </ProductsContainer>
      <LandPageContainer>
        <LandPageImage alt="" src={landScapePictures[getRandomProduct()]} />
        <LandPageTextContainer1>
          <LandPageText>Enhace your</LandPageText>
        </LandPageTextContainer1>
        <LandPageTextContainer2>
          <LandPageText>Beauty</LandPageText>
        </LandPageTextContainer2>
      </LandPageContainer>
    </Wrapper>
  );
}
