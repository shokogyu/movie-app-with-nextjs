import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout(props) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="pl-[15%]">{props.children}</main>
    </div>
  );
}

export default Layout;
