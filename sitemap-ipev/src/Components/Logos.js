import { Container, Navbar } from 'react-bootstrap';
import Logo from '../img/LOGO-IPE.png';
import '../styles/logo.css'

function Logos() {
    return(
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <a className="logo" href="http://www.veracruz.gob.mx/ipe/">
                            <img src={Logo} alt="Página principal"/>
                        </a>
                    </Navbar.Brand>
                </Container>
                <br />
            </Navbar>
            <div className="separador"></div>
        </>
    );
}

export default Logos;