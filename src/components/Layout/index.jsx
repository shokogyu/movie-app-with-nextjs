import { Sidebar } from "@/components/Layout/Sidebar";
import { Genres } from "@/components/Layout/Sidebar/Navs/Genres";

export const Layout = (props) => {
  return (
    <div className="flex">
      <Sidebar>
        <Genres genreListData={props.genreListData} />
      </Sidebar>
      <main className="flex-1 pl-64">{props.children}</main>
    </div>
  );
};
