import { Logo } from "@/components/Layout/Sidebar/Logo";
import { SearchForm } from "@/components/Search/SearchForm";
import { Home } from "@/components/Layout/Sidebar/Navs/Home";
import { Genres } from "@/components/Layout/Sidebar/Navs/Genres";
import { MyList } from "@/components/Layout/Sidebar/Navs/MyList";

export const Sidebar = (props) => {
  return (
    <header className="px-5 pt-4 md:fixed md:left-0 md:top-0 md:w-64 md:min-w-[200px] md:shrink-0 md:py-6 md:pl-6 md:pr-4 ">
      <Logo />
      <SearchForm />

      <nav className="fixed bottom-0 left-0 z-10 h-[var(--nav-height-sp)] w-full border-t border-gray-300 bg-[#09090b]  md:static md:border-t-0 md:bg-inherit md:p-0 ">
        <div className="flex h-full items-center justify-center space-x-4 md:mt-8 md:block md:space-x-0 md:space-y-6 ">
          <Home />
          <MyList />
          {props.children}
        </div>
      </nav>
    </header>
  );
};
