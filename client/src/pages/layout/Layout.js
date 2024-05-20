import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
            {/* 네비게이션 */}
            <footer>푸터</footer>
        </div>
    );
};

export default Layout;
