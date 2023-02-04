import { useEffect, useState } from 'react';
import './App.css';
import MembersDirectory from './components/MembersDirectory';

function App() {
    const [usernames, setUsernames] = useState([]);
    const [membersData, setMembersData] = useState([]);

    // useEffect(() => {
    //     const listMembers = () => {
    //     fetch("https://api.github.com/users")
    //       .then((res) => res.json())
    //       .then(
    //         (result) => {
    //             console.log(result);
    //             const logins = []
    //             result.map(member => logins.push(member.login))
    //             setUsernames(logins)
    //         },
    //         (error) => {
    //           console.log(error);
    //         }
    //       );
    //     }
    //     listMembers();
    //   }, []);

    // useEffect(() => {
    //     const getMember = () => {
    //     fetch("https://api.github.com/users/octocat")
    //       .then((res) => res.json())
    //       .then(
    //         (result) => {
    //           const memberInfo = {
    //                 "username": result.login,
    //                 "name": result.name,
    //                 "email": result.email,
    //                 "avatarUrl": result.avatar_url,
    //                 "profileUrl": result.html_url,
    //                 "location": result.location,
    //                 "publicRepos": result.public_repos,
    //           }
    //           setMembersData(memberInfo)
    //         },
    //         (error) => {
    //           console.log(error);
    //         }
    //       );
    //     }
    //     getMember();
    //   }, []);
    const mockData = [
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
        {
            username: 'octocat',
            name: 'monalisa octocat',
            location: 'San Francisco',
            email: 'octocat@github.com',
            publicRepos: '2',
            avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
            profileUrl: 'https://github.com/octocat',
        },
    ];

    return <MembersDirectory members={mockData} />;
}

export default App;
