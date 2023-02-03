import { useEffect, useState } from 'react';
import './App.css';
import MemberCard from './components/MemberCard';

function App() {
    const [membersData, setMembersData] = useState([]);

    useEffect(() => {
        const getMember = () => {
        fetch("https://api.github.com/users/octocat")
          .then((res) => res.json())
          .then(
            (result) => {
              const memberInfo = {
                    "username": result.login,
                    "name": result.name,
                    "email": result.email,
                    "avatarUrl": result.avatar_url,
                    "profileUrl": result.html_url,
                    "location": result.location,
                    "publicRepos": result.public_repos,
              }
              setMembersData(memberInfo)
            },
            (error) => {
              console.log(error);
            }
          );
        }
        getMember();
      }, []);
    
    return <MemberCard member={membersData}/>
}

export default App;
