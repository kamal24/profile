import React,{Component} from 'react';
import {Layout} from 'antd';
import {Button} from 'antd';
import MenuComponent from './MenuComponent';
import SiderComponent from './SiderComponent';
import HomeComponent from './HomeComponent';

const {Header, Content, Footer, Sider} = Layout;

class MainComponent extends Component{
    render(){
        //padding:'24px'
        return (
            <Layout>
                <Sider style={{backgroundColor: '#fff'}}>
                    <SiderComponent />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Header className="header">
                        <MenuComponent />
                    </Header>
                    <Content style={{ paddingTop: 24}}>
                            <HomeComponent />
                    </Content>  
                </Layout>
                
            </Layout>
        );
    }
}

export default MainComponent;
