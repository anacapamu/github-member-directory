import styled from 'styled-components';

const MemberCard = (props) => {
    const {
        avatarUrl,
        email,
        location,
        name,
        profileUrl,
        publicRepos,
        username,
    } = props.member;

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
        white-space: pre-wrap;
    `;

    const CardHeader = styled.span`
        font-weight: bold;
        color: #f2c4ce;
    `

    const Avatar = styled.img`
        max-width: 200px;
        max-height: 200px;
        `

    const ProfileLink = styled.a`
        color: #f58f7c;
        font-size: xx-large;
        font-weight: bold;
    `

    return (
        <CardContainer>
            <Avatar src={avatarUrl} alt="avatar" />
            <ProfileLink href={profileUrl}>{username}</ProfileLink>
            <CardText>
                <CardHeader>Name:</CardHeader> {name}
                {'\n'}
                <CardHeader>Location:</CardHeader> {location}
                {'\n'}
                <CardHeader>Email:</CardHeader> {email}
                {'\n'}
                <CardHeader>Public repos:</CardHeader> {publicRepos}
            </CardText>
        </CardContainer>
    );
};

export default MemberCard;
