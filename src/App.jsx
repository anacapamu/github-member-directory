import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MemberCard from './components/MemberCard';
import Pagination from './components/Pagination';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    text-align: center;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    gap: 20px;
`;

const NoDataContainer = styled.div`
    text-align: center;
`;
function App() {
    const [membersData, setMembersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    if (membersData.length === 0) {
        return <NoDataContainer>No member data to display.</NoDataContainer>;
    }

    const PageSize = 10;
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentMembersData = membersData.slice(firstPageIndex, lastPageIndex);

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
