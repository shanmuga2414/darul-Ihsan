
import React from "react";
import {
    Row,
    Col,
    Form,
    FormGroup,
    FormText,
    Label,
    Input
} from './../../components';
import DatePicker from 'react-date-picker';
import OthersFamilyMembers from './OthersFamilyMembers';

class FamilyParticulars extends React.Component {
    state = {
        rows: [{}],
        fatherAge: new Date(),
    };
    fatherAgeChange(date) {
        this.setState({
            fatherAge: date
        })
    }
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
    render() {
        return (
            <Row>
                <h6 className="wizardTitleBackground">Family Particulars</h6>
                <Col lg={12}>
                    <Form>
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputFamilyMember" sm={2}>
                                Family Member
                                    </Label>
                            <Col sm={4}>
                                <Input
                                    type="select"
                                    name="familyMember"
                                    id="defaultSelect"
                                >

                                    <option defaultValue="">Father</option>
                                    <option>Mother</option>
                                </Input>
                            </Col>
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

                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
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
                        {/* END Input */}
                        { /* START Input */}
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
                        { /* END Input */}
                        { /* START Input */}
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
                        { /* END Input */}
                        { /* START Input */}
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
                        { /* END Input */}
                        <hr />
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputFamilyMember" sm={2}>
                                Family Member
                                    </Label>
                            <Col sm={4}>
                                <Input
                                    type="select"
                                    name="familyMember"
                                    id="defaultSelect"
                                >
                                    <option defaultValue="" selected>Mother</option>
                                    <option >Father</option>

                                </Input>
                            </Col>
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

                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
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
                        {/* END Input */}
                        { /* START Input */}
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
                        { /* END Input */}
                        { /* START Input */}
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
                        { /* END Input */}
                        { /* START Input */}
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
                        { /* END Input */}
                        <hr />
                        <OthersFamilyMembers />
                        <Row>
                            <h6 className="wizardTitleBackground">Particulars of Applicant (For Referal Cases only)</h6>
                        </Row>
                        <FormGroup row >

                            <Label for="inputFamilyMember" sm={2}>
                                Name of the Applicant
                            </Label>
                            <Col sm={4}>
                                <Input
                                    type="text"
                                    name="applicantName"
                                    id="applicantName"
                                    placeholder="Enter the Full Name as in NRIC"
                                />
                            </Col>
                            <Label for="inputFamilyMember" sm={3}>
                                Oraganization (MSF/FSC/Others)/ Designation
                            </Label>
                            <Col sm={3}>
                                <Input
                                    type="text"
                                    name="designation"
                                    id="designation"
                                    placeholder="Enter the Designation"
                                />
                            </Col>

                        </FormGroup>

                        <FormGroup row>
                            <Label for="inputIndentificationNo" sm={2}>
                                NRIC No.
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="text"
                                    name="NricNo"
                                    id="NricNo"
                                    placeholder="Enter the NRIC"
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
                            <Label for="inputEmail" sm={2}>
                                Email Address
                                    </Label>
                            <Col sm={2}>
                                <Input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Eamil Address"
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row >
            // <div>
            //     <div className="container">
            //         <div className="row clearfix">
            //             <div className="col-md-12 column">
            //                 <table
            //                     className="table table-bordered table-hover"
            //                     id="tab_logic"
            //                 >
            //                     <thead>
            //                         <tr>
            //                             <th className="text-center"> # </th>
            //                             <th className="text-center"> Name </th>
            //                             <th className="text-center"> Mobile </th>
            //                             <th />
            //                         </tr>
            //                     </thead>
            //                     <tbody>
            //                         {this.state.rows.map((item, idx) => (
            //                             <tr id="addr0" key={idx}>
            //                                 <td>{idx}</td>
            //                                 <td>
            //                                     <input
            //                                         type="text"
            //                                         name="name"
            //                                         value={this.state.rows[idx].name}
            //                                         onChange={this.handleChange(idx)}
            //                                         className="form-control"
            //                                     />
            //                                 </td>
            //                                 <td>
            //                                     <input
            //                                         type="text"
            //                                         name="mobile"
            //                                         value={this.state.rows[idx].mobile}
            //                                         onChange={this.handleChange(idx)}
            //                                         className="form-control"
            //                                     />
            //                                 </td>
            //                                 <td>
            //                                     <button
            //                                         className="btn btn-outline-danger btn-sm"
            //                                         onClick={this.handleRemoveSpecificRow(idx)}
            //                                     >
            //                                         Remove
            //             </button>
            //                                 </td>
            //                             </tr>
            //                         ))}
            //                     </tbody>
            //                 </table>
            //                 <button onClick={this.handleAddRow} className="btn btn-primary">
            //                     Add Row
            //   </button>
            //                 <button
            //                     onClick={this.handleRemoveRow}
            //                     className="btn btn-danger float-right"
            //                 >
            //                     Delete Last Row
            //   </button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default FamilyParticulars;