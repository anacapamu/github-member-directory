import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MemberCard from './components/MemberCard';
import Pagination from './components/Pagination';

const PageSize = 10;

function App() {
    const [membersData, setMembersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // const membersData = [
    //     {
    //         username: 'Long Name',
    //         name: 'Long Long Long Long Name',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'No name',
    //         name: null,
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'No pic',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: null,
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'No email',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: null,
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'no public repo',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: null,
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: null,
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'no profile link',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: null,
    //     },
    //     {
    //         username: 'no location',
    //         name: 'monalisa octocat',
    //         location: null,
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'octocat',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'octocat',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    //     {
    //         username: 'anacapamu',
    //         name: 'Nina',
    //         location: 'LA',
    //         email: 'hello@itsme.com',
    //         publicRepos: '25',
    //         avatarUrl:
    //             'https://images.goodsmile.info/cgm/images/product/20220829/13166/104063/large/dc6725aa03a612d0e591ffd456a874f5.jpg',
    //         profileUrl: 'https://github.com/anacapamu',
    //     },
    //     {
    //         username: 'octocat',
    //         name: 'monalisa octocat',
    //         location: 'San Francisco',
    //         email: 'octocat@github.com',
    //         publicRepos: '2',
    //         avatarUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
    //         profileUrl: 'https://github.com/octocat',
    //     },
    // ];

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
                    setMembersData(membersInfo);
                });
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

    const MainContainer = styled.div`
        display: flex;
        flex-direction: column;
        place-content: center;
        text-align: center;
    `;

    const CardsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    `;

    const currentMembersData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return membersData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);


    return (
        <MainContainer>
            <Header />
            <CardsContainer>
                {currentMembersData.map((memberData, index) => {
                    return <MemberCard member={memberData} key={index} />;
                })}
            </CardsContainer>
            <Pagination
                currentPage={currentPage}
                totalItems={membersData.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </MainContainer>
    );
}

export default App;
