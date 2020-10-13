import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import './App.css';
import PreAdmission from './routes/Forms/PreAdmission';
import Forms from './routes/Forms';
import Admission from './routes/Forms/Admission';
import PreAdmissionManage from './routes/ExtendedTable/PreAdmissionManage';
import AdmissionManage from './routes/ExtendedTable/AdmissionManage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-wizard/dist/react-wizard.css"
import 'react-datepicker/dist/react-datepicker.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import logo from './logo.jpg';
import HeaderMenu from './components/menu';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"><img alt="darul-ishsan" className="logo-design" src={logo} /></div>

        <HeaderMenu />

      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Pre Admission</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Router>
              <Switch>
                <Redirect from="/" to="/pre-admission-manage" exact />
                <Route component={PreAdmission} path="/pre-admission" />
                <Route component={PreAdmissionManage} path="/pre-admission-manage" />
                <Route component={AdmissionManage} path="/admission-manage" />
                <Route component={Forms} path="/forms" />
                <Route component={Admission} path="/admission" />
              </Switch>
            </Router>

          </Content>
        </Layout>
      </Content>
    </Layout>

  );
}

export default App;
