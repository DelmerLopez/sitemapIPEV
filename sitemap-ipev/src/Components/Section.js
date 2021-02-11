import { Accordion, Button,  Card} from 'react-bootstrap';
import '../styles/section.css'
import { ChevronDown } from 'react-bootstrap-icons';

function Section(props) {

    return (
        <Accordion>
            <Card>
                <Card.Header className="card-title">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <span className="title-text">{props.title}</span> <ChevronDown color="black"/>
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
                                        <Card className="card-title-link">
                                            <Card.Header>
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