import { Col, Container, Row } from 'react-bootstrap';
import Section from '../Components/Section';
import '../styles/sitemap.css';
import ServiciosRutas from '../Rutas/ServiciosRutas';
import CitasRutas from '../Rutas/CitasRutas';
import InfoInstitutoRutas from '../Rutas/InfoInstitutoRutas';
import TransparenciaRutas from '../Rutas/TransparenciaRutas';
import '@fontsource/ubuntu';

function Sitemap() {
    const servicios = ServiciosRutas;
    const citas = CitasRutas;
    const infoInstituto = InfoInstitutoRutas;
    const transparenciaRutas = TransparenciaRutas;

    return (
        <Container>
            <h2 className="title">Mapa de sitio del Instituto de Pensiones del Estado de Veracruz</h2>
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
                    <Section title="Transparencia" servicios={transparenciaRutas} />
                </Col>                
            </Row>
        </Container>
    );
}

export default Sitemap;