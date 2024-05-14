import React, { useEffect , useState } from 'react'
import { fetchNavUser } from '../../redux/slice/NavUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BtnAltroComponent } from '../Profile/BtnAltroComponent';
import { BtnAggiungiSezioneComponent } from '../Profile/BtnAggiungiSezioneComponent';
import { BtnDisponibileComponent } from '../Profile/BtnDisponibileComponent';

export default function NavbarScroll() {

    const dispatch = useDispatch();

    const userFetch = useSelector((state) => state.navUser.navUser);
    // console.log(userFetch.bio);

    useEffect(() => {
        dispatch(fetchNavUser());
    }, []);

    const [hideNavbar, setHideNavbar] = useState(false);

    //sarà true quando scende lo scrollY, false quando risale
    //console.log(hideNavbar);

        //https://stackoverflow.com/questions/75775786/how-to-properly-add-window-scroll-event-listener-in-react-for-animating-an-eleme
    useEffect(() => {
        const handleScroll = () => {
        setHideNavbar(window.scrollY > 10);
        //console.log(window.scrollY);
        };
        //console.log(handleScroll());
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>  
            {/* se hideNavbar è true la nav si vede, altrimente none */}
            <Navbar
                style={{ display: hideNavbar ? 'block' : 'none' }}
                bg="white"
                data-bs-theme="light"
                className='py-0 my-0 border border-bottom-secondary slideDown'>
                
                <div className='container my-2'>
                    <div className='d-flex my-auto'>
                        <div>
                        <Image
                            style={{ width: "50px", height: "50px" }} 
                            src={userFetch.image} roundedCircle />
                        </div>
                        <div className='ms-3 profileNavbarScroll mt-2'>
                            <p id='logo'>{userFetch.name} {userFetch.surname}</p>
                            <p>{userFetch.title}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <BtnAltroComponent />
                        <BtnAggiungiSezioneComponent />
                        <BtnDisponibileComponent />
                    </div>
                </div>       
            </Navbar>
        </>
    )
}
