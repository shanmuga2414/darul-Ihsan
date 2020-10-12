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
import _ from 'lodash';
import DatePicker from 'react-date-picker';

const MAX_BOARD_SIZE = 1990;

class PersonalParticulars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstStep: "first step here",
            agevalue: new Date(),
            parentAge: new Date()

        };
        this.ageChange = this.ageChange.bind(this);
        this.parentChange = this.parentChange.bind(this);
    }
    ageChange(date) {
        this.setState({
            agevalue: date
        })
    }
    parentChange(date) {
        this.setState({
            parentAge: date
        })
    }

    isValidated() {
        // do some validations
        // decide if you will
        return true;
        // or you will
        // return false;
    }
    render() {

        // const [value, age] = useState(new Date());
        // const [parentValue, parentAge] = useState(new Date());
        return (
            <Row>
                <h6 className="wizardTitleBackground">Personal Particulars of Child / Ward</h6>
                <Col lg={12}>
                    <Form>
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputName" sm={2}>
                                Full Name (as in birth Certificate / NRIC*):
                                    </Label>
                            <Col sm={10}>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter the Full Name as in NRIC"
                                />
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputName" sm={2}>
                                BC / NRIC No.*:
                        </Label>
                            <Col sm={3}>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter the NRIC No"
                                />
                            </Col>
                            <Label for="inputDateOfBirth" sm={2}>
                                Date Of Birth
                        </Label>
                            <Col sm={3}>

                                <DatePicker className="form-control"
                                    onChange={this.ageChange}
                                    value={this.state.agevalue}
                                    showLeadingZeros={true}
                                />

                            </Col>
                            <Label for="inputAge" sm={1}>
                                Age
                        </Label>
                            <Col sm={1}>
                                <Input
                                    type="text"
                                    name="age"
                                    id="age"
                                    placeholder=""
                                />
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="inputName" sm={2}>
                                Citizenship:
                                    </Label>
                            <Col sm={10}>
                                <FormGroup row>
                                    <Col sm={2}>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="radio" name="citizenship" />{' '}
                                                    Singaporean
                                    </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>
                                        <FormGroup check inline >
                                            <Label check>
                                                <Input type="radio" name="citizenship" />{' '}
                                                    Permanent Resident
                                    </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="radio" name="citizenship" />{' '}
                                                    Other Nationality (Please Specify)
                                    </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm={3}>

                                        <Input
                                            type="text"
                                            name="country"
                                            id="country"
                                            placeholder="Country Name"
                                        />

                                    </Col>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row className="mb-0 mt-0">
                            <Label for="inputBirthOrder" sm={2}>
                                Birth Order:
                                    </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthOrder" />{' '}
                                                    1 <sup>st</sup> Child
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthOrder" />{' '}
                                        2 <sup>nd</sup> Child
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthOrder" />{' '}
                                        3 <sup>rd</sup> Child
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthOrder" />{' '}
                                        4 <sup>th</sup> Child
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="birthOrder" />{' '}
                                        5 <sup>th</sup> Child onwards
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}

                        <FormGroup row className="mb-0">
                            <Label for="inputEducation" sm={12}>
                                Academic Education:
                        </Label>
                            <Label for="inputPrimary" sm={2}>
                                Primary
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputPrimaryLevel" check>
                                            <Input type="checkbox" name="birthOrder" /> Level
                                 </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="primaryLevel"
                                                id="primaryLevel"
                                                placeholder="Enter Primary Level"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputPrimaryLevel">
                                            School
                                </Label>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="primaryLevel"
                                                id="primaryLevel"
                                                placeholder="Enter Primary Level"
                                            />
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="inputPrimary" sm={2}>
                                Secondary
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputSecondaryLevel" check>
                                            <Input type="checkbox" name="birthOrder" /> Level
                                 </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="SecondaryLevel"
                                                id="SecondaryLevel"
                                                placeholder="Enter Secondary Level"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputSecondaryLevel">
                                            School
                                </Label>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="SecondarySchool"
                                                id="SecondarySchool"
                                                placeholder="Enter Secondary School"
                                            />
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}

                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="inputITE" sm={2}>
                                ITE
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputITE" check>
                                            <Input type="checkbox" name="ITE" /> Year
                                 </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Col sm={12}>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="defaultSelect"
                                            >
                                                {_.range(2020, MAX_BOARD_SIZE - 1).map(value => <option key={value} value={value}>{value}</option>)}

                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputcourseName">
                                            Course
                                </Label>
                                        <Col sm={11}>
                                            <Input
                                                type="text"
                                                name="courseName"
                                                id="courseName"
                                                placeholder="Enter Course Name"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputcampusName" sm={4}>
                                            Campus
                                </Label>
                                        <Col sm={11}>
                                            <Input
                                                type="text"
                                                name="campusName"
                                                id="campusName"
                                                placeholder="Enter Campus Name"
                                            />
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}

                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="inputITE" sm={2}>
                                Polytechnic
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputPolytechnic" check>
                                            <Input type="checkbox" name="Polytechnic" /> Year
                                 </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Col sm={12}>
                                            <Input
                                                type="select"
                                                name="polytechnic"
                                                id="defaultSelect"
                                            >
                                                {_.range(2020, MAX_BOARD_SIZE - 1).map(value => <option key={value} value={value}>{value}</option>)}

                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputcourseName">
                                            Course
                                </Label>
                                        <Col sm={11}>
                                            <Input
                                                type="text"
                                                name="courseName"
                                                id="courseName"
                                                placeholder="Enter Course Name"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label for="inputcampusName" sm={4}>
                                            Campus
                                </Label>
                                        <Col sm={11}>
                                            <Input
                                                type="text"
                                                name="campusName"
                                                id="campusName"
                                                placeholder="Enter Campus Name"
                                            />
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}

                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputName" sm={2}>
                                Others
                                    </Label>
                            <Col sm={10}>
                                <FormGroup check inline>
                                    <Label for="inputOtherCourse" check>
                                        <Input type="checkbox" name="otherCourse" /> Please Specify
                                 </Label>
                                </FormGroup>
                                <FormGroup check inline className="col-sm-12">

                                    <Input
                                        type="text"
                                        name="otherCourse"
                                        id="otherCourse"
                                        placeholder="Enter any specific courses here"
                                    />

                                </FormGroup>
                            </Col>

                        </FormGroup>
                        {/* END Input */}

                        <Row>
                            <h6 className="wizardTitleBackground">Particulars of Applicant (Parent / Guardian / Next of Kin*)</h6>
                        </Row>
                        <br />
                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="inputName" sm={2}>
                                Name of Parent / Guardian / Next of Kin * (as in NRIC) :
                        </Label>
                            <Col sm={10}>
                                <Input
                                    type="text"
                                    name="parentName"
                                    id="parentName"
                                    placeholder="Enter the Parent / Guardian Name"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mb-0">
                            <Label for="relationship" sm={2}>
                                Relationship
                        </Label>
                            <Col sm={2}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="relationship" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="relationship" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <Label for="relationship" className="mt-2"> Martial Status</Label>
                            </Col>
                            <Col sm={2}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="martialStatus" />{' '}
                                        Yes
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="martialStatus" />{' '}
                                        No
                                    </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        {/* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="residentialAddress" sm={2}>
                                Residential Address
                                    </Label>
                            <Col sm={10}>
                                <Input
                                    type="textarea"
                                    name="address"
                                    id="address"
                                    placeholder="Enter the Residential Address"
                                />
                            </Col>
                        </FormGroup>
                        { /* END Input */}
                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="ownership" sm={2}>
                                Home Ownership
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="ownership" />{' '}
                                        Purchased
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="ownership" />{' '}
                                        Rental
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="ownership" />{' '}
                                        Others
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="home-ownership"
                                                id="homeOwnership"
                                                placeholder="Enter others details"
                                            />
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        { /* END Input */}
                        { /* START Input */}
                        <FormGroup row>
                            <Label for="inputName" sm={2}>
                                NRIC No.*:
                        </Label>
                            <Col sm={3}>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter the NRIC No"
                                />
                            </Col>
                            <Label for="inputDateOfBirth" sm={2}>
                                Date Of Birth
                        </Label>
                            <Col sm={3}>

                                <DatePicker className="form-control"
                                    onChange={this.parentChange}
                                    value={this.state.parentAge}
                                    showLeadingZeros={true}
                                />
                            </Col>
                            <Label for="inputAge" sm={1}>
                                Age
                        </Label>
                            <Col sm={1}>
                                <Input
                                    type="text"
                                    name="age"
                                    id="age"
                                    placeholder=""
                                />
                            </Col>
                        </FormGroup>
                        {/* END Input */}

                        { /* START Input */}
                        <FormGroup row className="mb-0">
                            <Label for="ownership" sm={2}>
                                Citizenship
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="citizen" />{' '}
                                        Singaporean
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="citizen" />{' '}
                                        Permanent Resident
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="citizen" />{' '}
                                        Other Nationality
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Col sm={12}>
                                            <Input
                                                type="text"
                                                name="otherNationality"
                                                id="otherNationality"
                                                placeholder="Enter other Nationality"
                                            />
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                        { /* END Input */}

                        { /* START Inputs */}
                        <FormGroup row>
                            <Label for="inputHelper-1" sm={2}>
                                Contact Details
                                    </Label>
                            <Col sm={10}>
                                <Row>
                                    <Col sm={12} lg={4} className="mb-3 mb-md-0">
                                        <Input
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                            placeholder="Enter Mobile No"
                                        />
                                        <FormText color="muted">
                                            Mobile Phone
                                                </FormText>
                                    </Col>
                                    <Col sm={12} lg={4} className="mb-3 mb-md-0">
                                        <Input
                                            type="text"
                                            name="homeNo"
                                            id="homeNo"
                                            placeholder="Enter Home No"
                                        />
                                        <FormText color="muted text-left">
                                            Home Number
                                                </FormText>
                                    </Col>
                                    <Col sm={12} lg={4}>
                                        <Input
                                            type="text"
                                            name="office"
                                            id="OfficeNo"
                                            placeholder="Enter Office No"
                                        />
                                        <FormText color="muted text-left">
                                            Office Number
                                                </FormText>
                                    </Col>
                                </Row>
                            </Col>
                        </FormGroup>
                        { /* END Inputs */}
                        <FormGroup row>
                            <Label for="gender" sm={2}>
                                Gender
                        </Label>
                            <Col sm={10}>
                                <FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="gender" />{' '}
                                        Male
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name="gender" />{' '}
                                        Female
                                    </Label>
                                    </FormGroup>


                                    <FormGroup check inline>
                                        <Label for="ethnicGroup" className="mt-2" sm="5">
                                            Ethnic Group:
                                  </Label>
                                        <Col sm={8}>
                                            <Input
                                                type="text"
                                                name="home-ownership"
                                                id="homeOwnership"
                                                placeholder="Enter others details"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup check inline>
                                        <Label for="defaultSelect" sm={4}>
                                            Religion :
                                    </Label>
                                        <Col sm={9} className="mr-2">
                                            <Input
                                                type="select"
                                                name="select"
                                                id="defaultSelect"
                                            >
                                                <option defaultValue="">Open this Select Menu</option>
                                                <option>One</option>
                                                <option>Two</option>
                                                <option>Three</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup>

                    </Form>
                </Col >

            </Row >

        )

    }
}

export default PersonalParticulars;