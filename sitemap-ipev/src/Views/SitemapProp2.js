import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import Section from '../Components/Section';
import ServiciosRutas from '../Rutas/ServiciosRutas';
import CitasRutas from '../Rutas/CitasRutas';
import InfoInstitutoRutas from '../Rutas/InfoInstitutoRutas';
import TransparenciaRutas from '../Rutas/TransparenciaRutas';
import BienesRutas from '../Rutas/BienesRutas';
import ControlRutas from '../Rutas/ControlRutas';
import '../styles/sitemap.css'

function SitemapProp2() {
    const servicios = ServiciosRutas;
    const citas = CitasRutas;
    const infoInstituto = InfoInstitutoRutas;
    const transparenciaRutas = TransparenciaRutas;
    const bienesRutas = BienesRutas;
    const controlRutas = ControlRutas;

    let contenidoTab = (contenido, section_name) => {
        return(
            <Tab eventKey={section_name} title={section_name}>
                <Row>
                    {contenido.map( (item, index) => {
                        if (item.subsections){
                            return(
                                <Col className="section" md={6} sm={12} key={index}>
                                    <Section title={item.section} servicios={item.subsections} />
                                </Col>
                            );
                        }
                        else {
                            return (
                                <Col className="section" md={6} sm={12} key={index}>
                                    <p key={index}>
                                        <a className="text" key={index} target="blank" href={item.url}>{item.section}</a>
                                    </p>
                                </Col>
                            );
                        }
                        
                    })}
                </Row>
            </Tab>
        );
    }

    return (
        <Container>
            <h2 className="title">Mapa de sitio del Instituto de Pensiones del Estado de Veracruz</h2>
            <Row className="section">
                <Col lg={12}>
                    <Tabs defaultActiveKey="Servicios">
                        {contenidoTab(servicios, "Servicios")}
                        {contenidoTab(citas, "Citas")}
                        {contenidoTab(infoInstituto, "Sobre el instituto")}
                        {contenidoTab(transparenciaRutas, "Transparencia")}
                        {contenidoTab(bienesRutas, "Bienes inmuebles")}
                        {contenidoTab(controlRutas, "Sistema de control interno")}
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default SitemapProp2;