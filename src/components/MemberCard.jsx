import './MemberCard.css';

const MemberCard = (props) => {
    const { avatarUrl, email, location, name, profileUrl, publicRepos, username } = props.member

    return (
    <div id="card">
        <div><img id="avatar" src={avatarUrl} alt="avatar"></img></div>
        <div>
            <h1><a href={profileUrl}>{username}</a></h1>
            <p>Name: {name}</p> 
            <p>Location: {location}</p>
            <p>Email: {email}</p>
            <p>Public repos: {publicRepos}</p></div>
    </div>)
};

export default MemberCard;
