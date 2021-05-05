import { Container, Col, Row } from "react-bootstrap";
import Section from '../Components/Section';
import ServiciosRutas from '../Rutas/ServiciosRutas';
import CitasRutas from '../Rutas/CitasRutas';
import InfoInstitutoRutas from '../Rutas/InfoInstitutoRutas';
import BienesRutas from '../Rutas/BienesRutas';
import SitiosInteresRutas from '../Rutas/SitiosInteresRutas';
import '../styles/sitemap.css';
import '@fontsource/ubuntu';

function DerechohabienteSitemap() {

    const servicios = ServiciosRutas;
    const citas = CitasRutas;
    const infoInstituto = InfoInstitutoRutas;
    const bienesRutas = BienesRutas;
    const sitiosRutas = SitiosInteresRutas;

    return(
        <Container>
            <h3 className="subtitle">Derechohabiente</h3>
            <Row>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Servicios" servicios={servicios} />
                </Col>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Citas en linea" servicios={citas} />
                </Col>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Sobre el instituto" servicios={infoInstituto} />
                </Col>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Bienes inmuebles" servicios={bienesRutas} />    
                </Col>
                <Col className="section" lg={4} md={6} sm={12}>
                    <Section title="Sitios de interés" servicios={sitiosRutas} />    
                </Col>
            </Row>
        </Container>
    )
}

export default DerechohabienteSitemap;