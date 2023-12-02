import { Sidebar } from "@/components/Layout/Sidebar";
import { Genres } from "@/components/Layout/Sidebar/Navs/Genres";

export const Layout = (props) => {
  return (
    <div className="space-y-8 md:flex">
      <Sidebar>
        <Genres genreListData={props.genreListData} />
      </Sidebar>
      <main className="pb-[calc(30px+var(--nav-height-sp))] md:flex-1 md:pb-0 md:pl-64">
        {props.children}
      </main>
    </div>
  );
};
