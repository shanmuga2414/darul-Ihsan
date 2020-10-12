import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

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


// import { HeaderMain } from "./../componets/HeaderMain";
import { HeaderDemo } from "./../componets/HeaderDemo";
function PreAdmission() {
    const [value, age] = useState(new Date());
    const [dvalue, referralDate] = useState(new Date());
    const [rvalue, recordedDate] = useState(new Date());
    return (
        <React.Fragment>

            <Container className="content-shadow">

                { /* START Header 1 */}
                <Row>
                    <Col lg={12} className="mt-3">
                        <HeaderDemo
                            title="Pre Admission Form"
                        />
                    </Col>
                </Row>
                { /* END Header 1 */}
                { /* START Section 1 */}
                <Row>
                    <Col lg={12} >
                        {/* <Card className="mb-3"> */}
                        <CardBody className="card">
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputName" sm={3}>
                                        Name of CYP
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            name="nameOfCyp"
                                            id="nameOfCyp"
                                            placeholder="Enter the CYP Name"
                                        />
                                    </Col>
                                    <Label for="inputAge" sm={2} >
                                        D.O.B / Age
                                    </Label>
                                    <Col sm={3}>
                                        <DatePicker className="form-control"
                                            onChange={age}
                                            value={value}
                                            showLeadingZeros={true}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputIndentificationNo" sm={3}>
                                        Identification No.
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            name="identificationNo"
                                            id="identificationNo"
                                            placeholder="Enter the Identification No"
                                        />
                                    </Col>
                                    <Label for="inputSex" sm={2}>
                                        Sex
                                    </Label>
                                    <Col sm={3}>
                                        <FormGroup>
                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="radio" name="sex" />{' '}
                                                    Male
                                                </Label>
                                            </FormGroup>

                                            <FormGroup check inline>
                                                <Label check>
                                                    <Input type="radio" name="sex" />{' '}
                                                    Female
                                                    </Label>
                                            </FormGroup>

                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputRace" sm={3}>
                                        Race / Religion
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="text"
                                            name="race"
                                            id="race"
                                            placeholder="Enter the Race / Religion"
                                        />
                                    </Col>
                                    <Label for="inputNationality" sm={2}>
                                        Nationality
                                    </Label>
                                    <Col sm={3}>
                                        <Input
                                            type="select"
                                            name="nationality"
                                            id="defaultSelect"
                                        >
                                            <option defaultValue="">Singapore</option>
                                            <option>India</option>
                                            <option>Malaysia</option>
                                            <option>Thailand</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputResidential" sm={3}>
                                        Current Residential
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="select"
                                            name="residential"
                                            id="defaultSelect"
                                        >
                                            <option defaultValue="">Singapore</option>
                                            <option>India</option>
                                            <option>Malaysia</option>
                                            <option>Thailand</option>
                                        </Input>
                                    </Col>
                                    <Label for="inputEducation" sm={2}>
                                        Education
                                    </Label>
                                    <Col sm={3}>
                                        <Input
                                            type="text"
                                            name="education"
                                            id="education"
                                            placeholder="Education Level"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Select */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputMedicalCondition" sm={3}>
                                        Medical Condition
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="text"
                                            name="medicalCondition"
                                            id="medicalCondition"
                                            placeholder="Briefly explain the Medical Condition"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="textArea" sm={3}>
                                        CYP has other sibilings in DI/DL ? Indicate the name(s) and relationship to CYP
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="relationships"
                                            id="relationships"
                                            placeholder=""
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputReferral" sm={3}>
                                        Point of Referral:
                                    </Label>
                                    <Col sm={4}>
                                        <Input
                                            type="textarea"
                                            name="referral"
                                            id="referral"
                                            placeholder=""
                                        />
                                    </Col>

                                    <Label for="inputAge" sm={2} >
                                        Date
                                    </Label>
                                    <Col sm={3}>
                                        <DatePicker className="form-control"
                                            onChange={referralDate}
                                            value={dvalue}
                                            showLeadingZeros={true}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}

                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="reasonForReferral" sm={3}>
                                        Reason for referral to DI/ DIL:
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="reasonForReferral"
                                            id="reasonForReferral"
                                            placeholder=""
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputLenghtOfPlacement" sm={3}>
                                        Estimated length of placement
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="text"
                                            name="lengthOfPlacement"
                                            id="lengthOfPlacement"
                                            placeholder="Enter the Estimated length of Placement"
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputBackground" sm={3}>
                                        Background of CYP
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="cypBackground"
                                            id="cypBackground"
                                            placeholder=""
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputConcerns" sm={3}>
                                        Concerns/ Issues
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="concerns"
                                            id="concerns"
                                            placeholder="Enter the Concerns or Issues here.."
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputRecommendation" sm={3}>
                                        Recommendation
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="recommendation"
                                            id="recommendation"
                                            placeholder=""
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputrecordedDate" sm={3} >
                                        Recorded by/Date
                                    </Label>
                                    <Col sm={9}>
                                        <DatePicker className="form-control"
                                            onChange={recordedDate}
                                            value={rvalue}
                                            showLeadingZeros={true}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col align="center">
                                        <Button color="success">Save</Button>&nbsp;
                                        <Button color="secondary">Cancel</Button>
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
                            { /* END Form */}

                        </CardBody>
                        {/* </Card> */}
                    </Col>
                </Row>
                { /* END Section 1 */}

                { /* START Header 2 */}


            </Container>
        </React.Fragment>
    );
}


export default PreAdmission;