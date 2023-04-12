import React from 'react';
import Rank from '../Rank';
import Analysis from '../Analysis';

const AdminDashboard = () => {
  return (
    <>
        <section className="content">
          <div className="container-fluid">
            <Rank />
            <hr width="100%" align="center" />
            <Analysis />
          </div>
        </section>
    </>
  )
}

export default AdminDashboard