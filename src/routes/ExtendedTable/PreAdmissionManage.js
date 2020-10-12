import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {
    Container,
    Row,
    Col,
    Button,
    CardBody
} from '../../components';
import { UserAddOutlined, ImportOutlined, FilePdfOutlined, ExportOutlined } from '@ant-design/icons';
import { HeaderDemo } from "./../componets/HeaderDemo";

const DatatablePage = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150,

            },
            {
                label: 'age',
                field: 'age',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Indentification No',
                field: 'identification',
                sort: 'asc',
                width: 270,

            },
            {
                label: 'Nationality',
                field: 'nationality',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Education',
                field: 'education',
                sort: 'asc',
                width: 100
            },

            {
                label: 'Recorded Date',
                field: 'recordedDate',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                age: '61',
                identification: '3434532',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2011/04/25',
            },
            {
                name: 'Garrett Winters',
                age: '63',
                identification: '3467845',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2011/07/25'
            },
            {
                name: 'Ashton Cox',
                age: '66',
                identification: '4346453',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2009/01/12'

            },
            {
                name: 'Brielle Williamson',
                age: '34',
                identification: '9756464',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2012/03/29'
            },
            {
                name: 'Airi Satou',
                age: '28',
                identification: '8767657',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'

            },

            {
                name: 'Herrod Chandler',
                age: '19',
                identification: '65674654',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'
            },
            {
                name: 'Rhona Davidson',
                age: '55',
                identification: '2332432',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2010/10/14',
            },
            {
                name: 'Tiger Nixon',
                age: '61',
                identification: '3434532',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2011/04/25',
            },
            {
                name: 'Garrett Winters',
                age: '63',
                identification: '3467845',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2011/07/25'
            },
            {
                name: 'Ashton Cox',
                age: '66',
                identification: '4346453',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2009/01/12'

            },
            {
                name: 'Brielle Williamson',
                age: '34',
                identification: '9756464',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2012/03/29'
            },
            {
                name: 'Airi Satou',
                age: '28',
                identification: '8767657',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'

            },

            {
                name: 'Herrod Chandler',
                age: '19',
                identification: '65674654',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'
            },
            {
                name: 'Rhona Davidson',
                age: '55',
                identification: '2332432',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2010/10/14',
            },

        ]
    };

    return (
        <React.Fragment>
            <Container className="content-shadow">
                { /* START Header 1 */}
                <Row>
                    <Col lg={12} className="mt-3">
                        <HeaderDemo
                            title="Pre Admissions List"
                        />
                    </Col>
                </Row>
                { /* END Header 1 */}
                <Row>
                    <Col lg={12}>
                        <CardBody className="card">
                            < div align="right" className="mt-2">
                                <Button outline color="secondary"><ImportOutlined /> Import Xls Template</Button> &nbsp;
                                <Button outline color="secondary"><ExportOutlined /> Export to Excel</Button> &nbsp;
                                <Button outline color="secondary"><FilePdfOutlined /> Pdf Report</Button> &nbsp;
                            <a href="/pre-admission">
                                    <Button color="warning"><UserAddOutlined /> New Pre Admission</Button>
                                </a>
                                <hr />
                            </div>
                            <MDBDataTable
                                striped
                                bordered
                                hover
                                data={data}
                            />
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default DatatablePage;