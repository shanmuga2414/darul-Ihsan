import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {
    Container,
    Row,
    Col
} from '../../components';


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
            <Container>
                <Row>
                    <Col lg={12} className="card">
                        <MDBDataTable
                            striped
                            bordered
                            hover
                            data={data}
                        />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default DatatablePage;