import { Logo } from "@/components/Sidebar/Logo";
import { SearchForm } from "@/components/SearchForm";
import { Home } from "@/components/Sidebar/Navs/Home";
import { Genre } from "@/components/Sidebar/Navs/Genre";
import { MyList } from "@/components/Sidebar/Navs/MyList";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 min-w-[200px] shrink-0 py-6 pl-6 pr-4">
      <Logo />
      <SearchForm />

      <nav className="mt-8 space-y-6">
        <Home />
        <MyList />
        <Genre />
      </nav>
    </div>
  );
};
