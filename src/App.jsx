import { useEffect, useState } from 'react';
import './App.css';
import MembersDirectory from './components/MembersDirectory';

function App() {
    const [membersData, setMembersData] = useState([]);

    useEffect(() => {
        const listMembers = async () => {
            return await fetch('https://api.github.com/users')
                .then((res) => res.json())
                .then(
                    (result) => {
                        return result.map((member) => {
                            return member.login;
                        });
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        listMembers().then((usernames) => {
            const fetchMembers = async () => {
                return Promise.all(
                    usernames.map((username) => {
                        return fetchMember(username);
                    })
                ).then((membersInfo) => {
                    console.log(membersInfo)
                    setMembersData(membersInfo)});
            };
            fetchMembers();
        });
    }, []);

    const fetchMember = async (username) => {
        return await fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    return {
                        username: result.login,
                        name: result.name,
                        email: result.email,
                        avatarUrl: result.avatar_url,
                        profileUrl: result.html_url,
                        location: result.location,
                        publicRepos: result.public_repos,
                    };
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    return <MembersDirectory members={membersData} />;
}

export default App;
