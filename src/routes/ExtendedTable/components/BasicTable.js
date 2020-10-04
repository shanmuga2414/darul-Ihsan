import React from 'react';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import faker from 'faker/locale/en_IND';


const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"></i>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}></i>
};
const columns = [
    {
        dataField: 'id',
        text: 'Animal ID',
        sort: true,
        sortCaret
    }, {
        dataField: 'name',
        text: 'Animal Name',
        sort: true,
        sortCaret
    }, {
        dataField: 'animal',
        text: 'Animal',
        sort: true,
        sortCaret
    }
];
const data = [
    { id: 1, name: 'George', animal: 'Monkey' },
    { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 3, name: 'Alice', animal: 'Giraffe' },
    { id: 4, name: 'Alice', animal: 'Tiger' },
    { id: 5, name: 'Alice', animal: 'Tiger' },
    { id: 6, name: 'George', animal: 'Monkey' },
    { id: 7, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 8, name: 'Alice', animal: 'Giraffe' },
    { id: 9, name: 'Alice', animal: 'Tiger' },
    { id: 10, name: 'George', animal: 'Monkey' },
    { id: 11, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 12, name: 'Alice', animal: 'Giraffe' },
    { id: 13, name: 'Alice', animal: 'Tiger' },

]

// const data = _.times(5, (index) => ({
//     id: index,
//     name: faker.commerce.productName(),
//     price: Math.round(2000 + Math.random() * 500)
// }));

export const BasicTable = () => (
    <React.Fragment>
        <h6 className="mt-0">
            Basic Table
        </h6>
        <BootstrapTable
            classes="table-responsive-sm"
            keyField='id'
            data={data}
            columns={columns}
            bordered={true}
        />
    </React.Fragment>
);
