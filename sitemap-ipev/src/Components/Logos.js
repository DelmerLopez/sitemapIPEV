import { Container, Navbar } from 'react-bootstrap';
import Logo from '../img/LOGO-IPE.png';
import LogoVeracruz from '../img/logo-veracruz-1.png';
import LogoOrgullo from '../img/logo-orgullo.png';
import '../styles/logo.css'

function Logos() {
    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <a className="logo" href="http://www.veracruz.gob.mx/">
                            <img src={LogoVeracruz} alt="Página de gobierno" />
                        </a>
                        <a className="logo" href="http://www.veracruz.gob.mx/ipe/">
                            <img src={Logo} alt="Página principal"/>
                        </a>
                        <img className="logo" src={LogoOrgullo} alt="" />
                    </Navbar.Brand>
                </Container>
                <br />
            </Navbar>
            <div className="separador"></div>
        </>
    );
}

export default Logos;