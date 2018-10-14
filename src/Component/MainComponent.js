import React,{Component} from 'react';
import {Layout} from 'antd';
import {Button} from 'antd';
import MenuComponent from './MenuComponent';
import SiderComponent from './SiderComponent';
import HomeComponent from './HomeComponent';
import {Route, Switch, Redirect} from 'react-router-dom';
import ContactComponent from './ContactComponent';
import PortfolioComponent from './PortfolioComponent';
import ResumeComponent from './ResumeComponent';

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

                        
                        <Switch>
                            <Route path="/home" exact component={HomeComponent}></Route>
                            <Route path="/portfolio" exact component={PortfolioComponent}></Route>
                            <Route path="/contact" exact component={ContactComponent}></Route>
                            <Route path="/resume" exact component={ResumeComponent}></Route>
                            <Route path="/blog" exact component={HomeComponent}></Route>
                            <Redirect to="/home" />
                        </Switch>
                       
                    </Content>  
                </Layout>
                
            </Layout>
        );
    }
}

export default MainComponent;
