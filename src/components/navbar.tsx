import { NavLink } from 'react-router-dom';

function Navbar({ setIsLogoutClicked }: { setIsLogoutClicked: (x: boolean) => void }) {
    return <nav className='flex flex-nowrap items-center px-4 py-6 gap-x-3.5'>
        <NavLink to='/' className='text-lg'>Home</NavLink>
        <NavLink to='/counter' className='text-lg'>Counter</NavLink>
        <NavLink to='/editor' className='text-lg'>Editor</NavLink>
        <NavLink to='/userForm' className='text-lg'>User Data Form</NavLink>
        <span className='text-lg cursor-pointer' onClick={() => setIsLogoutClicked(true)}>Logout</span>
    </nav>

}

export default Navbar;