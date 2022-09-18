import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
    IoHomeOutline,
    IoHome,
    IoBookOutline,
    IoBook,
    IoCartOutline,
    IoCart,
    IoBagHandleOutline,
    IoBagHandle,
    IoPersonOutline,
    IoPerson
} from "react-icons/io5";

export default function Footer({ home = false, news = false, shop = false, bag = false, profile = false }) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <HomeWrapper home={home} onClick={() => navigate("/home")}>
                {home ? <IoHome /> : <IoHomeOutline />}
                <p>Home</p>
            </HomeWrapper>
            <NewsWrapper news={news}>
                {news ? <IoBook /> : <IoBookOutline />}
                <p>News</p>
            </NewsWrapper>
            <ShopWrapper shop={shop} onClick={() => navigate("/categories")} >
                {shop ? <IoCart /> : <IoCartOutline />}
                <p>Shop</p>
            </ShopWrapper>
            <BagWrapper bag={bag} onClick={() => navigate("/bag")}>
                {bag ? <IoBagHandle /> : <IoBagHandleOutline />}
                <p>Bag</p>
            </BagWrapper>
            <ProfileWrapper login={profile} onClick={() => navigate("/profile")}>
                {profile ? <IoPerson /> : <IoPersonOutline />}
                <p>Profile</p>
            </ProfileWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background-color: #FFFFFF;
    border-radius: 12px 12px 0px 0px;
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;
    filter: drop-shadow(0px -4px 20px rgba(0, 0, 0, 0.06));
`;

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.home ? "#DB3022" : "#9B9B9B"};
    font-size: 10px;
    font-style: italic;

    svg {
        font-size: 30px;
        padding-bottom: 2px;
    }
`;

const NewsWrapper = styled(HomeWrapper)`
    color: ${props => props.news ? "#DB3022" : "#9B9B9B"};
`;

const ShopWrapper = styled(HomeWrapper)`
    color: ${props => props.shop ? "#DB3022" : "#9B9B9B"};
`;

const BagWrapper = styled(HomeWrapper)`
    color: ${props => props.bag ? "#DB3022" : "#9B9B9B"};
`;

const ProfileWrapper = styled(HomeWrapper)`
    color: ${props => props.login ? "#DB3022" : "#9B9B9B"};
`;