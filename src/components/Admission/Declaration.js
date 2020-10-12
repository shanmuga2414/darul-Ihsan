import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    CardBody,
    Form,
    FormGroup,
    CustomInput,
    FormText,
    Label,
    Input,
    Button,
} from './../../components';
import _ from 'lodash';

class Declaration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thirdStep: "third step here"
        };
    }

    render() {
        return (
            <Row>
                <h6 className="wizardTitleBackground">Declaration On Overseas Trip</h6>
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
                    </Form>
                </Col>
            </Row>
        )
    }
}
export default Declaration;
