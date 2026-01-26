import React from "react";
import { Outlet } from "react-router-dom";

const MaintenanceLayout = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MaintenanceLayout;
