import React from "react";
import ReactWizard from "react-bootstrap-wizard";
import {
    Container,
    Row,
    Col,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from './../../components';
import { HeaderDemo } from "../componets/HeaderDemo";
import PersonalParticulars from './../../components/Admission/PersonalParticulars';
import Declaration from './../../components/Admission/Declaration';

class SecondStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondStep: "second step here"
        };
    }
    isValidated() {
        // do some validations
        // decide if you will
        return true;
        // or you will
        // return false;
    }
    render() {
        return <div>Hey from Second</div>;
    }
}
class ThirdStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thirdStep: "third step here"
        };
    }
    render() {
        return <div>Hey from Third</div>;
    }
}

var steps = [
    // this step hasn't got a isValidated() function, so it will be considered to be true
    { stepName: "Personal Particulars", component: PersonalParticulars },
    // this step will be validated to false
    { stepName: "Family Particulars", component: SecondStep },
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
                    { /* START Header 1 */}
                    {/* <Row>
                        <Col lg={12}>
                            <HeaderDemo
                                title="Admission Form"
                            />
                        </Col>
                    </Row> */}
                    { /* END Header 1 */}
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
