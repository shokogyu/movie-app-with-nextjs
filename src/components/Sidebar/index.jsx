import { Logo } from "@/components/Sidebar/Logo";
import { SearchForm } from "@/components/SearchForm";
import { Home } from "@/components/Sidebar/Navs/Home";
import { Genres } from "@/components/Sidebar/Navs/Genres";
import { MyList } from "@/components/Sidebar/Navs/MyList";

export const Sidebar = (props) => {
  return (
    <div className="fixed left-0 top-0 w-64 min-w-[200px] shrink-0 py-6 pl-6 pr-4">
      <Logo />
      <SearchForm />

      <nav className="mt-8 space-y-6">
        <Home />
        <MyList />
        <Genres genreListData={props.genreListData} />
      </nav>
    </div>
  );
};
