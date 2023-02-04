import MemberCard from './MemberCard';

const MembersDirectory = (props) => {
    return (
        <div>
            {props.members.map((memberInfo, index) => {
                return <MemberCard key={index} member={memberInfo} />;
            })}
        </div>
    );
};

export default MembersDirectory;
