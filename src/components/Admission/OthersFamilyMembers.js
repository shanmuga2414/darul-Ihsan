import React from "react";
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
} from './../../components';
import { Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import DatePicker from 'react-date-picker';


class OthersFamilyMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            content: 0
        };
    }

    handleAddRow = () => {
        this.setState((prevState, props) => {
            const row = { content: this.state.content + 1 };
            return { rows: [...prevState.rows, row] };
        });
        this.setState.content = this.state.content + 1;
    };

    handleRemoveRow = () => {
        this.setState((prevState, props) => {
            return { rows: prevState.rows.slice(1) };
        });
    };

    render() {
        console.log(this.state);
        const i = 0;
        return (
            <Row>
                <Col lg={12}>
                    { /* START Input */}
                    <FormGroup row>
                        <Label for="inputMedicalCertificate" sm={2}>
                            Other Family Members
                        </Label>
                        <Button type="primary" size="small" onClick={this.handleAddRow}> Add Others<PlusCircleOutlined className="anticon" /></Button> &nbsp;
                        <Button type="danger" size="small" onClick={this.handleRemoveRow}> Remove Last Data<MinusCircleOutlined className="anticon" /></Button>
                    </FormGroup>
                    {/* END Input */}

                    { /* START Input */}
                    {this.state.rows.map(row => (

                        <Col lg={12}>
                            <FormGroup row >

                                <Label for="inputFamilyMember" sm={2}>
                                    Full Name
                                    </Label>
                                <Col sm={4}>
                                    <Input
                                        type="text"
                                        name="fatherName"
                                        id="fatherName"
                                        placeholder="Enter the Full Name as in NRIC"
                                    />
                                </Col>
                                <Label for="inputFamilyMember" sm={2}>
                                    RelationShip
                                    </Label>
                                <Col sm={4}>
                                    <Input
                                        type="text"
                                        name="relationship"
                                        id="relationship"
                                        placeholder="Enter the Relationship"
                                    />
                                </Col>

                            </FormGroup>


                            <FormGroup row>
                                <Label for="inputFamilyMember" sm={2}>
                                    NRIC No.
                                    </Label>
                                <Col sm={4}>
                                    <Input
                                        type="text"
                                        name="fatherNRIC"
                                        id="fatherNRIC"
                                        placeholder="Enter the NRIC No"
                                    />
                                </Col>
                                <Label for="inputFamilyMember" sm={2}>
                                    Date of Birth
                            </Label>
                                <Col sm={4}>
                                    <DatePicker className="form-control"
                                        onChange={this.fatherAgeChange}
                                        value={this.state.fatherAge}
                                        showLeadingZeros={true}
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Label for="inputRace" sm={2}>
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
                                <Col sm={4}>
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

                            <FormGroup row>
                                <Label for="inputIndentificationNo" sm={2}>
                                    Occupation
                                    </Label>
                                <Col sm={2}>
                                    <Input
                                        type="text"
                                        name="fatherOccupation"
                                        id="fatherOccupation"
                                        placeholder="Enter the Occupation"
                                    />
                                </Col>
                                <Label for="inputIndentificationNo" sm={2}>
                                    Contact Number
                                    </Label>
                                <Col sm={2}>
                                    <Input
                                        type="text"
                                        name="fatherOccupation"
                                        id="fatherOccupation"
                                        placeholder="Contact No"
                                    />
                                </Col>
                                <Label for="inputSex" sm={2}>
                                    Martial Status
                                    </Label>
                                <Col sm={2}>
                                    <FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="radio" name="sex" />{' '}
                                                    Yes
                                                </Label>
                                        </FormGroup>

                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="radio" name="sex" />{' '}
                                                    No
                                                    </Label>
                                        </FormGroup>

                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="textArea" sm={2}>
                                    Residential Address
                                    </Label>
                                <Col sm={10}>
                                    <Input
                                        type="textarea"
                                        name="relationships"
                                        id="relationships"
                                        placeholder=""
                                    />
                                </Col>
                            </FormGroup>
                            <hr />

                        </Col>


                    ))}
                </Col>
            </Row >

        );
    }
}
export default OthersFamilyMembers;