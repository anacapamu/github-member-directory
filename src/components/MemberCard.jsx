import './MemberCard.css';

const MemberCard = () => {
    return (
    <div id="card">
        <div><img id="avatar" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="avatar"></img></div>
        <div>
            <h1><a href="https://github.com/octocat">octocat</a></h1>
            <p>Name: monalisa octocat</p> 
            <p>Location: San Francisco</p>
            <p>Email: octocat@github.com</p>
            <p>Public repos: 2</p></div>
    </div>)
};

export default MemberCard;
