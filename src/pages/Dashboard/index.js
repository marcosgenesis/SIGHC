import React from 'react';

import SideBar from '../../components/Sidebar';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <SideBar selectedItem="dashboard" />
    </Container>
  );
}

export default Dashboard;
