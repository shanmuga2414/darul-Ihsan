import React from "react";
import ReactWizard from "react-bootstrap-wizard";
import {
    Container,
    Row,
    Col,
    CardBody,

} from './../../components';
import PersonalParticulars from './../../components/Admission/PersonalParticulars';
import Declaration from './../../components/Admission/Declaration';
import FamilyParticulars from './../../components/Admission/FamilyParticulars';

var steps = [
    // this step hasn't got a isValidated() function, so it will be considered to be true
    { stepName: "Personal Particulars", component: PersonalParticulars },
    // this step will be validated to false
    { stepName: "Family Particulars", component: FamilyParticulars },
    // this step will never be reachable because of the seconds isValidated() steps function that will always return false
    { stepName: "Declaration", component: Declaration }
];

class WizardExample extends React.Component {
    finishButtonClick(allStates) {
        console.log(allStates);
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col lg={12}>
                            {/* <Card className="mb-3"> */}
                            <CardBody className="card">
                                <ReactWizard
                                    steps={steps}
                                    navSteps
                                    title="Admission Form"
                                    headerTextCenter
                                    // validate
                                    color="green"
                                    finishButtonClick={this.finishButtonClick}
                                />
                            </CardBody>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default WizardExample;
