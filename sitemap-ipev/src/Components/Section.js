import { Accordion, Button,  Card} from 'react-bootstrap';
import '../styles/section.css'

function Section(props) {

    return (
        <Accordion>
            <Card>
                <Card.Header className="card-title">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <span className="title-text">{props.title}</span>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {props.servicios.map( (servicio, index) => {
                            if(servicio.subsections){
                                return(
                                    <Section key={index} title={servicio.section} servicios={servicio.subsections} />
                                )
                            }
                            else {
                                return(
                                    <p key={index}><a className="text" key={index} target="blank" href={servicio.url}>{servicio.section}</a></p>
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