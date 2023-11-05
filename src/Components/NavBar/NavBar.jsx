import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    const menus = <>
    <NavLink className={({isActive})=> isActive ? 'px-5 border-[3px] transition-all border-accent py-2' : ''} to={'/'}>Home</NavLink>
    <NavLink className={({isActive})=> isActive ? 'px-5 border-[3px] transition-all border-accent py-2' : ''} to={'/available-food'}>Available Foods</NavLink>
    <NavLink className={({isActive})=> isActive ? 'px-5 border-[3px] transition-all border-accent py-2' : ''} to={'/add-food'}>Add Food</NavLink>
    <NavLink className={({isActive})=> isActive ? 'px-5 border-[3px] transition-all border-accent py-2' : ''} to={'/manage-food'}>Manage Food</NavLink>
    <NavLink className={({isActive})=> isActive ? 'px-5 border-[3px] transition-all border-accent py-2' : ''} to={'/food-reqs'}>Food Requests</NavLink>
    <NavLink className="bg-accent px-5 border-[3px] transition-all border-accent hover:bg-transparent hover:text-accent py-2 text-white" to={'/login'}>Login</NavLink>
    </>
    return (
      <div className="drawer max-w-7xl mx-auto px-0">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar text-[#000]">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <img className="w-40" src="/logo.png" alt="" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-0 items-center text-base font-medium text-black gap-x-5">
                {/* Navbar menu content here */}
               {menus}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
           {menus}
          </ul>
        </div>
      </div>
    );
};

export default NavBar;