import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/slices/UserSlice';

const Profile: FC = () => {
    const user = useAppSelector(selectUser);

    return (
        <div>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
        </div>
    );
};

export default Profile;
