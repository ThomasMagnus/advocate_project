import React, {Component} from 'react'
import './App.css';
import Header from "./components/Header/Header";
import HeaderTop from "./components/Header/HeaderTop/HeaderTop";
import HeaderCenter from "./components/Header/HeaderCenter/HeaderCenter";
import Main from "./components/Main/Main";
import About from "./components/Main/About/About";
import Services from "./components/Main/Services/Services";
import Consultation from "./components/Main/Consultation/Consultation";
import Footer from "./components/Footer/Footer";
import FooterContent from "./components/Footer/FooterContent/FooterContent";
import {Route} from "react-router-dom";
import MyServices from "./components/MyServices/MyServices";
import Contacts from "./components/Contacts/Contacts";

export const MenuContext = React.createContext(false);

class App extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        menu: [
            {
                title: 'Главная',
                link: '/',
            },
            {
                title: 'Услуги',
                link: '/services',
            },
            {
                title: 'Обо мне',
                link: '/aboutMe',
            },
            {
                title: 'Контакты',
                link: '/contacts',
            },

        ],
        services: [
            {
                title: 'Услуги по уголовным делам',
                link: '/ugolovnie-dela',
            },
            {
                title: 'Услуги по земельным вопросам',
                link: '/zemelnie-dela',
            },
            {
                title: 'Услуги в жилищных вопросах',
                link: '/zchilichnie-dela',
            },
            {
                title: 'Услуги в семейных вопросах',
                link: '/semeinie-dela',
            },
            {
                title: 'Услуги в трудовых спорах',
                link: '/trudovie-dela',
            },
            {
                title: 'Юридическая помощь при ДТП',
                link: '/dtp-dela',
            },
        ],
        services2: [
            {
                title: 'Об административных правонарушениях',
                link: '/administrate-dela',
            },
            {
                title: 'Об оспаривании налоговых штрафных санкций',
                link: '/schtrafnie-dela',
            },
        ]
    }

    render() {
      return (
          <>
              <Header>
                  <HeaderTop/>
                  <MenuContext.Provider value={this.state.menu}>
                      <HeaderCenter/>
                  </MenuContext.Provider>
              </Header>
                  <Main>
                      <Route path='/services'>
                          <MyServices services={this.state.services}/>
                      </Route>
                      <Route path='/contacts' component={Contacts}/>
                      <Route path='/' exact>
                          <About/>
                          <Services services={this.state.services} services2={this.state.services2}/>
                          <Consultation/>
                      </Route>
                  </Main>
              <Footer>
                  <MenuContext.Provider value={this.state.menu}>
                      <FooterContent/>
                  </MenuContext.Provider>
              </Footer>
          </>
      )
    }
}

export default App;
