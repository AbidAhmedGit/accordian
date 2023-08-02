import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dashboards from '../../models/dashboards';
import './dashboard.css'

const Dashboard = () => {
  const { id } = useParams();

  const selectedDashboard = dashboards.find((dashboard) => dashboard.id === parseInt(id));

  if (!selectedDashboard) {
    return <div>Dashboard not found</div>;
  }

  const { lookerUrl } = selectedDashboard;

  const lookerUrlWithParam = `${lookerUrl}?allow_login_screen=true`;

  return (
    <>
      <div className='header'>

        <Link className='app-title' to="/">Products Insight</Link>
      </div>
      <div
        className='dashboard_div'
      >

        <Link
          className='dashboard_link'
          to="/"
        >
          Back To Dashboards
        </Link>

        <iframe
          className='dashboard_iframe'
          src={lookerUrlWithParam}
        ></iframe>
      </div>
    </>
  );
};

export default Dashboard;
