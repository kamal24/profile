import React, {Component} from 'react';
import {Menu,Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class MenuComponent extends Component{
    render(){
        return(
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item><Icon type="home"></Icon></Menu.Item>
                <Menu.Item>RESUME</Menu.Item>
                <Menu.Item>PORTFOLIO</Menu.Item>
                <Menu.Item>BLOG</Menu.Item>
                <Menu.Item>CONTACT</Menu.Item>
            </Menu>
        );
    }
}

export default MenuComponent;