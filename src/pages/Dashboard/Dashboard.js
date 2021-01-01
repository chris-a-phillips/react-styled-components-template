import React from 'react';
import { DashboardWrapper, LeftSideBar, MainContent, RightSideBar } from './SCDashboard';

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <LeftSideBar>Left Sidebar</LeftSideBar>
            <MainContent>Main Content</MainContent>
            <RightSideBar>Right Sidebar</RightSideBar>
        </DashboardWrapper>
    );
};

export default Dashboard;