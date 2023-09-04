import { Logo } from "../assets";
import { Icon } from "../components";

export const Sidebar = () => {
  return (
    <nav className="flex flex-col items-center justify-between w-24 px-5 py-4 bg-neutral-900 rounded-3xl">
      <div className="flex-col flex-center gap-7">
        <a href="#" className="w-full mb-5">
          <img src={Logo} alt="" className="w-full" />
        </a>

        <a href="#" className="text-neutral-400 hover:text-white">
          <Icon className="w-8 h-8" icon="grid-square-circle" />
        </a>
        <a href="#" className="text-neutral-400 hover:text-white">
          <Icon className="w-8 h-8" icon="bell" />
        </a>
        <a href="#" className="p-2 text-white rounded-lg bg-white/10">
          <Icon className="w-8 h-8" icon="solid-video" />
        </a>
        <a href="#" className="text-neutral-400 hover:text-white">
          <Icon className="w-8 h-8" icon="calendar" />
        </a>
        <a href="#" className="text-neutral-400 hover:text-white">
          <Icon className="w-8 h-8" icon="settings" />
        </a>
      </div>
      <a href="#" className="w-full rounded-full group">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="object-cover w-full border-2 border-transparent rounded-full group-hover:border-neutral-100"
        />
      </a>
    </nav>
  );
};
