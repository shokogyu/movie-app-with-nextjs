import { Sidebar } from "@/components/Sidebar";

export const Layout = (props) => {
  return (
    <div className="flex">
      <Sidebar genreListData={props.genreListData} />
      <main className="flex-1 pl-64">{props.children}</main>
    </div>
  );
};
