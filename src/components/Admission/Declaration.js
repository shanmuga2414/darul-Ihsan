import React from "react";
import DatePicker from 'react-date-picker';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
} from './../../components';
import Others from './OthersDeclaration';
// import _ from 'lodash';

class Declaration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thirdStep: "third step here",
            appDate: new Date(),
            appvalue: new Date()

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (date) => {
        console.log(date)
        this.setState({
            appDate: date,
            appvalue: date
        })
        // console.log(date, dateString);
    }


    render() {
        return (
            <Row>
                <h6 className="wizardTitleBackground">Declaration On Overseas Trip</h6>
                <Col lg={12}>
                    <Form>
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputName" sm={12}>
                                <b> I consent to allow / not allow* my child / ward* to participate in Darul Ihsan Orphanage's annual Overseas Trips.
                                I will be informed on the details when nearer to the date.</b>
                            </Label>

                        </FormGroup>
                        {/* END Input */}

                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputSignature" sm={3}>
                                Signature of Applicant:
                                    </Label>
                            <Col sm={3}>
                                <Input type="file" name="file" id="fileInput" />
                            </Col>
                            <Label for="applicationDate" sm={3}>
                                Signature of Applicant:
                                    </Label>
                            <Col sm={3}>
                                <DatePicker className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.appvalue}
                                    showLeadingZeros={true}
                                />
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        <Row>
                            <h6 className="wizardTitleBackground">Declaration On Assignment of Volunteer</h6>
                        </Row>
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputName" sm={12}>
                                <b> I consent to allow / not allow* my child / ward* to be assigned volunteer(s) where activities / programmes are conducted on a one-to-one. <br />
                                I will be informed on the details of the volunteer / programmes.</b>
                            </Label>

                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputSignature" sm={3}>
                                Signature of Applicant:
                                    </Label>
                            <Col sm={3}>
                                <Input type="file" name="file" id="fileInput" />
                            </Col>
                            <Label for="applicationDate" sm={3}>
                                Signature of Applicant:
                                    </Label>
                            <Col sm={3}>
                                <DatePicker className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.appvalue}
                                    showLeadingZeros={true}
                                />
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        <Row>
                            <h6 className="wizardTitleBackground">Declaration by Applicant</h6>
                            <span>(Where applicable, please attach the following supporting documents with this application form)</span>
                        </Row>
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputBirthCertificate" sm={7}>
                                1. Birth Certificate
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="birthCertificate"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthCertificateValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthCertificateValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthCertificateValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputNricCertificate" sm={7}>
                                2. NRIC of Parent / Guardian / Next of Kin
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="nricCerificate"
                                    id="defaultSelect"
                                >

                                    <option defaultValue="">Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="nricCertificateValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="nricCertificateValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="nricCertificateValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputParentCpfCertificate" sm={7}>
                                3. Parent / Guardian / Next of Kin's latest pay slip, letter from Employer confirming latest pay or latest CPF statement
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="cpfCertificate"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="cpfCertificateValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="cpfCertificateValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="cpfCertificateValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputGuardianLetter" sm={7}>
                                4. Legal Guardian Letter (if applicable)
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="guardianLetter"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="guardianLetter" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="guardianLetter" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="guardianLetter" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputParentUnemployemnt" sm={7}>
                                5. Letter of Declaration of Unemployment by Parent / Guardian / Next of Kin
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="ParentUnemployemnt"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="ParentUnemployemntValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="ParentUnemployemntValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="ParentUnemployemntValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputMarriageCertificate" sm={7}>
                                6. Marraige / Divorce / Death Cetficate /Syariah Court Letter (if applicable)
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="marriageCertificate"
                                    id="defaultSelect"
                                >

                                    <option defaultValue="">Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="marriageCertificateValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="marriageCertificateValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="marriageCertificateValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputPassportCertificate" sm={7}>
                                7. Passport
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="passport"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="passportCertificateValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="passportCertificateValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="passportCertificateValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputHealthBooklet" sm={7}>
                                8. Health Booklet
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="healthBooklet"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="healthBookletValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="healthBookletValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="healthBookletValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputSchoolSmartCard" sm={7}>
                                9. School Smartcard / EZ Link Card
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="schoolSmartCard"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="schoolSmartCardValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="schoolSmartCardValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="schoolSmartCardValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputMedicalCertificate" sm={7}>
                                10. Medical Report & Appointment Card (if applicable)
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="medicalCertificate"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="medicalCertificateValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="medicalCertificateValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="medicalCertificateValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputBankBook" sm={7}>
                                11. Bank Book
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="bankBook"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="bankBook" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="bankBook" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="bankBook" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputfinacialSubsidy" sm={7}>
                                12. Supporting Documents: Other Financial Subsidy
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="finacialSubsidy"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="finacialSubsidyValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="finacialSubsidyValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="finacialSubsidyValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputVisitationCard" sm={7}>
                                13. Visitation card - Prison / DRC / Others (if applicable)
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="select"
                                    name="visitationCard"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="">Select</option>
                                    <option>Original</option>
                                    <option>Copy</option>
                                </Input>
                            </Col>
                            <Col sm={3}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="visitationCardValue" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="visitationCardValue" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="visitationCardValue" />{' '}
                                        N.A
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}


                        <Others />

                        <Row>
                            <h6 className="wizardTitleBackground">Declaration By Applicant</h6>
                        </Row>
                        <FormGroup>
                            <Label> <span>I declare that the particulars in this application are true to the best of my knowledge and i have not wilfully suppressed any materian fact.</span>
                            </Label>
                        </FormGroup>
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputSignature" sm={3}>
                                Signature of Applicant:
                                    </Label>
                            <Col sm={3}>
                                <Input type="file" name="file" id="fileInput" />
                            </Col>
                            <Label for="applicationDate" sm={3}>
                                Signature of Applicant:
                                    </Label>
                            <Col sm={3}>
                                <DatePicker className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.appvalue}
                                    showLeadingZeros={true}
                                />
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                    </Form>
                </Col>
            </Row >
        )
    }
}
export default Declaration;
