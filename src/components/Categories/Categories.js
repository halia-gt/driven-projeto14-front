import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import {
  Wrapper,
  CategorieContainer,
  CategorieImage,
  CategorieTitle,
  CategorieTitleContainer,
  CategoriesContainer,
  LandPageContainer,
  LandPageImage,
  LandPageText,
  LandPageTextContainer,
} from "./styles";

export default function Categories() {
  const navigate = useNavigate()
  const categoriesData = [
    { name: "Summer Collection", img: "../assets/img/summer_collection.png" },
    { name: "Winter Collection", img: "../assets/img/winter_collection.png" },
    { name: "Shoes", img: "../assets/img/shoes.png" },
    { name: "Accesories", img: "../assets/img/accesories.png" },
  ];

  return (
    <Wrapper>
      <LandPageContainer>
        <LandPageImage alt="" src="../assets/img/landpage_categories.png" />
        <LandPageTextContainer>
          <LandPageText>Explore. Fashion. Life Style</LandPageText>
        </LandPageTextContainer>
      </LandPageContainer>
      <CategoriesContainer>
        {categoriesData.map((category, index) => {
          return (
            <CategorieContainer onClick={()=> navigate(`/categories/${category.name}`)} key={index}>
              <CategorieTitleContainer>
                <CategorieTitle>{category.name}</CategorieTitle>
              </CategorieTitleContainer>
              <CategorieImage alt="" src={category.img} />
            </CategorieContainer>
          );
        })}
      </CategoriesContainer>
      <Footer shop={true} />
    </Wrapper>
  );
}
