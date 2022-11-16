import {useEffect, useState, Fragment } from 'react';
import axios, {AxiosResponse} from 'axios';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from "./navbarBrand"

const items = ['first', 'second', 'third']

const itemsO = [
  {"name": 'Diiwaanka', 'icon': 'bi bi-folder', 'list':[{"name":'Bogga Raadinta', "icon":  'bi bi-search'}, {"name":'Diiwaangeli Meherad', "icon":  'bi bi-plus'}, {"name":'Diiwaanka Meheradaha', "icon":  'bi bi-book'}]}, 
  {"name": 'Isticmaale','icon': 'bi bi-person', 'list':[{"name":'Bogga Raadinta', "icon":  'bi bi-folder'}, {"name":'second', "icon":  'bi bi-folder'}, {"name":'third', "icon":  'bi bi-folder'}]}, 
  {"name": 'Maxaa Kele', 'icon': 'bi bi-plugin', 'list':[{"name":'first', "icon":  'bi bi-folder'}, {"name":'second', "icon":  'bi bi-folder'}, {"name":'third', "icon":  'bi bi-folder'}]}, 
  {"name": 'Xidhiidh', 'icon': 'bi bi-envelope', 'list':[{"name":'first', "icon":  'bi bi-folder'}, {"name":'second', "icon":  'bi bi-folder'}, {"name":'third', "icon":  'bi bi-folder'}]}, 
]

const foo = (name: any, icon: any) => <div style={{display: "inline-block"}}><i className={icon}></i> {name}</div>
interface MenuItem {
  icon: string;
  name: string;
  id: number;
  parent_id: string;
  sort: any;
  date_created: string;
  date_updated: string;
  drop_down_items: MenuItem[];
}

function NavBar() {
  const [data, dispatchData] = useState([] as any[]);
    useEffect(() => {
      // Use [] as second argument in useEffect for not rendering each time
      axios.get('http://localhost:8000/get_navbar_menu_items')  
      .then((response: AxiosResponse) =>  dispatchData(response.data)).then(() => console.log(data));
  }, []);   
  
  return ( 
    <> 
      <br /> 
      <Navbar bg="light" variant="light"> 
        <Container> 
            <Navbar.Brand>
              <NavbarBrand/>
            </Navbar.Brand>
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            {data.map((item: MenuItem) => <NavDropdown title={foo(item.name, item.icon)} >
              {item.drop_down_items.map(item =>  <NavDropdown.Item eventKey="4.1">{foo(item.name, item.icon)}</NavDropdown.Item>)}
            </NavDropdown>)} 
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;