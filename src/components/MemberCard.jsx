import styled from 'styled-components';
import { isNull } from '../helpers/isNull';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    border: 2px solid #d6d6d6;
    border-radius: 5px;
    padding: 10px;
    background-color: #4f4f51;
`;

const CardText = styled.p`
    white-space: nowrap;
    max-width: 200px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const CardHeader = styled.span`
    font-weight: bold;
    color: #f2c4ce;
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
`;

const ProfileLink = styled.a`
    color: #f58f7c;
    font-size: xx-large;
    font-weight: bold;
`;

const MemberCard = (props) => {
    const memberInfo = isNull(props.member);

    const {
        avatarUrl,
        email,
        location,
        name,
        profileUrl,
        publicRepos,
        username,
    } = memberInfo;

    return (
        <CardContainer>
            <Avatar src={avatarUrl} alt="avatar" />
            <ProfileLink href={profileUrl}>{username}</ProfileLink>
            <CardText>
                <CardHeader>Name:</CardHeader> {name}
                <br />
                <CardHeader>Location:</CardHeader> {location}
                <br />
                <CardHeader>Email:</CardHeader> {email}
                <br />
                <CardHeader>Public repos:</CardHeader> {publicRepos}
            </CardText>
        </CardContainer>
    );
};

export default MemberCard;
