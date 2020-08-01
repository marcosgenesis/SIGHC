import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUploadCloud, FiList, FiHome } from 'react-icons/fi';
import { FaBatteryFull } from 'react-icons/fa';
import searchIcon from '../../assets/search.svg';
import foto from '../../assets/foto.png';
import { Container, Search, Menu, Status, Profile, MenuItem } from './styles';

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('dashboard');
  return (
    <Container>
      <h2 id="logo">SIGHC</h2>
      <Search>
        <input type="text" placeholder="Pesquisar" />
        <img src={searchIcon} alt="" />
      </Search>
      <Menu>
        <MenuItem isSelected={selectedItem === 'dashboard'}>
          <FiHome size={25} />
          <Link to="/dashboard" onClick={() => setSelectedItem('dashboard')}>
            <h2>Dashboard</h2>
          </Link>
        </MenuItem>
        <MenuItem isSelected={selectedItem === 'events'}>
          <FiList size={25} />
          <Link to="/dashboard" onClick={() => setSelectedItem('events')}>
            <h2>Eventos</h2>
          </Link>
        </MenuItem>
        <MenuItem isSelected={selectedItem === 'certificado'}>
          <FiUploadCloud size={25} />
          <Link to="/dashboard" onClick={() => setSelectedItem('certificado')}>
            <h2>Enviar Certificado</h2>
          </Link>
        </MenuItem>
      </Menu>
      <Status>
        <FaBatteryFull size={40} />
        <div>
          <h2>34%</h2>
          <p>Completos de 256H</p>
        </div>
      </Status>
      <Profile>
        <img src={foto} alt="" />
        <div>
          <h2>Marcos Gênesis</h2>
          <p>471549</p>
        </div>
      </Profile>
    </Container>
  );
}

export default Sidebar;
