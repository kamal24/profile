import React, {Component} from 'react';
import {Menu,Icon} from 'antd';
import {NavLink} from 'react-router-dom';


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
                    <Menu.Item><NavLink to="/"><Icon type="home"></Icon></NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/resume">RESUME</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/portfolio">PORTFOLIO</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/blog">BLOG</NavLink></Menu.Item>
                    <Menu.Item><NavLink to="/contact">CONTACT US</NavLink></Menu.Item>
                </Menu>

              
                
        );
    }
}

export default MenuComponent;