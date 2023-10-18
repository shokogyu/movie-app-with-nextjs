import { Sidebar } from "@/components/Sidebar";

export const Layout = (props) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="pl-64">{props.children}</main>
    </div>
  );
};
