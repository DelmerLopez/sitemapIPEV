import { Accordion, Button,  Card} from 'react-bootstrap';
import '../styles/section.css'
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { useState } from 'react';

function Section(props) {

    const [chevron, setChevron] = useState(<ChevronDown color="black"/>);
    const [estadoChevron, setEstadoChevron] = useState(0);

    const cambiarChevron = (e) => {
        if (estadoChevron === 0) {
            setChevron(<ChevronUp color="black" />);
            setEstadoChevron(1)
        } else {
            setChevron(<ChevronDown color="black"/>)
            setEstadoChevron(0)
        }
    }

    return (
        <Accordion>
            <Card>
                <Card.Header className="card-title">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={e => cambiarChevron(e)}>
                        <span className="title-text">{props.title}</span> {chevron}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {props.servicios.map( (servicio, index) => {
                            if(servicio.subsections){
                                return(
                                    <div className="subsection">
                                        <Section key={index} title={servicio.section} servicios={servicio.subsections} />
                                    </div>
                                )
                            }
                            else {
                                return(
                                    <Accordion>
                                        <Card>
                                            <Card.Header className="card-title">
                                                <a className="text header-link" key={index} target="blank" href={servicio.url}>{servicio.section}</a>
                                            </Card.Header>
                                        </Card>
                                    </Accordion>
                                )
                            }
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Section;