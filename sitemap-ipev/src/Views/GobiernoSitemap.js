import { Container, Col, Row } from "react-bootstrap"
import '../styles/sitemap.css';
import '@fontsource/ubuntu';
import Section from '../Components/Section';
import TransparenciaRutas from '../Rutas/TransparenciaRutas';
import ControlRutas from '../Rutas/ControlRutas';
import UnidadGeneroRutas from '../Rutas/UnidadGeneroRutas';


function GobiernoSitemap() {

    const transparenciaRutas = TransparenciaRutas;
    const controlRutas = ControlRutas;
    const unidadGenero = UnidadGeneroRutas;

    return(
        <Container>
            <h3 className="subtitile">Gobierno</h3>
            <Row>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Transparencia" servicios={transparenciaRutas} />
                </Col>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Sistema de control interno" servicios={controlRutas} />    
                </Col>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Unidad de género" servicios={unidadGenero} />    
                </Col>
            </Row>
        </Container>
    )
}

export default GobiernoSitemap