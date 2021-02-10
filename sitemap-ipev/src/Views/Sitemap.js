import { Button, Col, Container, Row } from 'react-bootstrap';
import Section from '../Components/Section';
import '../styles/sitemap.css';
import ServiciosRutas from '../Rutas/ServiciosRutas';
import CitasRutas from '../Rutas/CitasRutas';
import InfoInstitutoRutas from '../Rutas/InfoInstitutoRutas';
import TransparenciaRutas from '../Rutas/TransparenciaRutas';
import '@fontsource/ubuntu';
import BienesRutas from '../Rutas/BienesRutas';
import ControlRutas from '../Rutas/ControlRutas';
import { Link } from 'react-router-dom';
import UnidadGeneroRutas from '../Rutas/UnidadGeneroRutas';
import Clima from '../Components/Clima';
import Logos from '../Components/Logos';

function Sitemap() {
    const servicios = ServiciosRutas;
    const citas = CitasRutas;
    const infoInstituto = InfoInstitutoRutas;
    const transparenciaRutas = TransparenciaRutas;
    const bienesRutas = BienesRutas;
    const controlRutas = ControlRutas;
    const unidadGenero = UnidadGeneroRutas;

    return (
        <div>
            <Clima />
            <Logos />
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
                    <Col className="section" lg={4} md={6} sm={12}>
                        <Section title="Bienes inmuebles" servicios={bienesRutas} />    
                    </Col>
                    <Col className="section" lg={4} md={6} sm={12}>
                        <Section title="Sistema de control interno" servicios={controlRutas} />    
                    </Col>
                    <Col className="section" lg={4} md={6} sm={12}>
                        <Section title="Unidad de género" servicios={unidadGenero} />    
                    </Col>                 
                </Row>

                <br />
                <Button variant="link">
                    <Link to="/SitemapPropuesta2">Ver propuesta 2</Link>
                </Button>
            </Container>
        </div>
    );
}

export default Sitemap;