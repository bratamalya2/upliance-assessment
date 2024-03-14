import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/navbar';
import UserDataForm from '../components/userDataForm';

function UserFormPage({ email, isLogoutClicked, setIsLogoutClicked }: { email: string | null, isLogoutClicked: boolean, setIsLogoutClicked: (x: boolean) => void }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogoutClicked || !email) {
            navigate('/signin');
        }
    }, [isLogoutClicked, email, navigate]);

    return <>
        <Navbar setIsLogoutClicked={setIsLogoutClicked} />
        <UserDataForm />
    </>
}

export default UserFormPage;