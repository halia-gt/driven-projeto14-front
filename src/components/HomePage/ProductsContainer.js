import { useNavigate } from "react-router-dom";
import {
    PhotoDetailsContainer,
    Photo,
    PhotoContainer,
    PhotoInfoBrand,
    PhotoInfoContainer,
    PhotoInfoName,
    PhotoInfoPrice,
    PhotoStampContainer,
  } from "./styles";

export default function ProductsContainer({ clothesInfo }) {
    const navigate = useNavigate();
  
    return clothesInfo.map((garment, index) => {
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
            <Photo alt="" src={garment.defaultProductImage} />
          </PhotoContainer>
          <PhotoInfoContainer>
            <PhotoInfoBrand>Routta</PhotoInfoBrand>
            <PhotoInfoName>{garment.displayName}</PhotoInfoName>
            <PhotoInfoPrice>${garment.listPrice}</PhotoInfoPrice>
          </PhotoInfoContainer>
        </PhotoDetailsContainer>
      );
    });
  }
  