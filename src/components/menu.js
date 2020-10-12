import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined, SettingOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';


const profileMenu = (
    <Menu>
        <Menu.Item>

            Manager
       
        </Menu.Item>
        <hr />
        <Menu.Item>
            <a target="_blank"  href="/">
                <UserAddOutlined /> My Profile
        </a>
        </Menu.Item>

        <Menu.Item>
            <a target="_blank"  href="/">
                <SettingOutlined /> Settings
        </a>
           
        </Menu.Item>
        <hr />
        <Menu.Item>
            <a target="_blank"  href="/">
                <LogoutOutlined /> Sign out
        </a>
        </Menu.Item>
        {/* <Menu.Item danger>a danger item</Menu.Item> */}
    </Menu>
);

const menu = () => {
    return (
        <nav>
            <ul className="nav header-menu">
                <li><a href="">Admission</a>
                    <ul>

                        <li><a href="#">Pre-Admission</a>
                            <ul>
                                <li><a href="/pre-admission">Pre-Admission Form</a></li>
                                <li><a href="/pre-admission-manage">Pre-Admission Report</a></li>
                                <li><a href="#">Social Report</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Admission</a>
                            <ul>
                                <li><a href="/admission">Admission Form</a></li>
                                <li><a href="#">Admission Intake Form</a></li>
                                <li><a href="#">Parent/Guardian Induction</a></li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <li><a href="#">Forms</a>
                    <ul>
                        <li><a href="#">Case Intervention Form</a></li>
                        <li><a href="#">Case Recording</a></li>
                        <li><a href="#">CANS Summary</a></li>
                        <li><a href="#">Home Visit Form</a></li>
                    </ul>
                </li>
                <li><a href="#">Discharge</a>
                    <ul>
                        <li><a href="#">Discharge Form</a></li>
                    </ul>
                </li>
                <li><a href="#">Academic</a>
                    <ul>
                        <li><a href="#">School Education</a></li>
                        <li><a href="#">Tution</a></li>
                        <li><a href="#">Academic Performance</a></li>
                        <li><a href="#">Academic Assessment</a></li>
                    </ul>
                </li>
                <li><a href="#">Activities</a>
                    <ul>
                        <li><a href="#">Event Attendance</a></li>
                        <li><a href="#">Events Feedback</a></li>
                        <li><a href="#">Evaluation Form</a></li>
                    </ul>
                </li>
                <li><a href="#">Medical</a>
                    <ul>
                        <li><a href="#">Surgery and Hospitalization</a></li>
                        <li><a href="#">Medical Record</a></li>
                    </ul>
                </li>
        <li>
                <div className="profileAvatar">
                    <Dropdown overlay={profileMenu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Avatar size={50} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
                                &nbsp;Ahmad Taufiq&nbsp; <DownOutlined />

                        </a>
                    </Dropdown>


                </div>
                
</li>
            </ul>
            

        </nav >
    );
}

export default menu;