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


class OthersDeclaration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{}],
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
        const i = 1;
        return (
            <Row>
                <Col lg={12}>
                    { /* START Input */}
                    <FormGroup row>
                        <Label for="inputMedicalCertificate" sm={2}>
                            14. Others
                        </Label>
                        <Button type="primary" size="small" onClick={this.handleAddRow}> Add Others<PlusCircleOutlined className="anticon" /></Button> &nbsp;
                        <Button type="danger" size="small" onClick={this.handleRemoveRow}> Remove Last Data<MinusCircleOutlined className="anticon" /></Button>
                    </FormGroup>
                    {/* END Input */}

                    { /* START Input */}
                    {this.state.rows.map((row, i) => (

                        <FormGroup row className="mb-0">
                            <Col sm={7}>
                                <Input type="text" name="Others" id="othersInput" />
                            </Col>
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
                                            <Input type="radio" name={`others` + i} />{' '}
                            Yes
                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name={`others` + i} />{' '}
                            No
                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="radio" name={`others` + i} />{' '}
                            N.A
                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </FormGroup >
                    ))}
                </Col>
            </Row>
            // {/* END Input */ }


            // < div style = { styles } >
            //     <table>
            //         <tbody>
            //             {this.state.rows.map(row => (
            //                 <tr>
            //                     <td>{row.content}</td>
            //                 </tr>
            //             ))}
            //             <tr>
            //                 <td className="" onClick={this.handleAddRow}>
            //                     (+)
            //   </td>
            //                 {Boolean(this.state.rows.length) && (
            //                     <td onClick={this.handleRemoveRow}>(-)</td>
            //                 )}
            //             </tr>
            //         </tbody>
            //     </table>
            // </div >
        );
    }
}
export default OthersDeclaration;