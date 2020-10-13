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

const AdmissionList = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150,

            },
            {
                label: 'NRIC',
                field: 'nric',
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
                label: 'Citizenship',
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
                name: 'Angelica Ramos',
                nric: 'S3456723U',
                age: '61',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2011/04/25',
            },
            {
                name: 'Doris Wilder',
                nric: 'S2367543T',
                age: '63',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2011/07/25'
            },
            {
                name: 'Caesar Vance',
                age: '66',
                nric: 'G5685443Y',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2009/01/12'

            },
            {
                name: 'Yuri Berry',
                age: '34',
                nric: 'T5645633R',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2012/03/29'
            },
            {
                name: 'Bradley Greer',
                age: '28',
                nric: 'S5634342H',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'

            },

            {
                name: 'Herrod Chandler',
                age: '19',
                nric: 'S2335664B',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'
            },
            {
                name: 'Rhona Davidson',
                age: '55',
                nric: 'G5685443Y',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2010/10/14',
            },
            {
                name: 'Tiger Nixon',
                age: '61',
                nric: 'S4366744F',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2011/04/25',
            },
            {
                name: 'Garrett Winters',
                age: '63',
                nric: 'M6742335D',
                nationality: 'Malaysia',
                education: 'Diploma',
                recordedDate: '2011/07/25'
            },
            {
                name: 'Ashton Cox',
                age: '66',
                nric: 'S4574545V',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2009/01/12'

            },
            {
                name: 'Brielle Williamson',
                age: '34',
                nric: 'G5685443Y',
                nationality: 'India',
                education: 'B.E',
                recordedDate: '2012/03/29'
            },
            {
                name: 'Airi Satou',
                age: '28',
                nric: 'M5623523R',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'

            },

            {
                name: 'Herrod Chandler',
                age: '19',
                nric: 'G5745433S',
                nationality: 'Singapore',
                education: 'Diploma',
                recordedDate: '2008/11/28'
            },
            {
                name: 'Rhona Davidson',
                age: '55',
                nric: 'S2355545H',
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
                            title="Admissions List"
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
                            <a href="/admission">
                                    <Button color="warning"><UserAddOutlined /> New Admission</Button>
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

export default AdmissionList;