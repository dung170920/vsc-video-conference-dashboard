import { useState } from "react";
import { Icon } from "../components";

export const RightContent = () => {
  const [tasks, setTasks] = useState([
    { text: "Opening", checked: true },
    { text: "Performance Evaluation of the Party", checked: false },
    { text: "Planning Party Programs and Activities", checked: true },
    { text: "Internal Party Consolidation", checked: false },
  ]);

  return (
    <section className="flex flex-col w-1/4 gap-4">
      <div className="w-full p-4 space-y-3 bg-white rounded-3xl">
        <h4 className="mb-1 text-xl font-semibold">Request to join</h4>
        {[...Array(3)].map((_, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="gap-3 flex-center">
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold">Rijal Ginanjar</span>
            </div>
            <div className="gap-3 flex-center">
              <button className="p-2 text-white rounded-full bg-red flex-center">
                <Icon icon="solid-times" className="w-4 h-4"></Icon>
              </button>
              <button className="p-2 text-white rounded-full bg-neutral-900 flex-center">
                <Icon icon="solid-check" className="w-4 h-4"></Icon>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-4 text-white bg-neutral-900 rounded-3xl">
        <h4 className="text-xl font-semibold">Meeting Task List</h4>
        <ul className="space-y-2">
          {tasks.map((e) => (
            <li
              key={e.text}
              className="flex items-center justify-start gap-1 cursor-pointer"
              onClick={() =>
                setTasks(
                  [...tasks].map((item) => (item.text === e.text ? Object.assign(item, { checked: !e.checked }) : item))
                )
              }
            >
              {e.checked ? (
                <Icon icon="solid-check-circle" className="w-[22px] h-[22px]" />
              ) : (
                <div className="w-5 h-5 mx-[1px] border-2 border-white rounded-full" />
              )}

              <span className="flex-1 text-sm">{e.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col flex-1 p-4 space-y-4 bg-white rounded-3xl">
        <h4 className="text-xl font-semibold">Room Chat</h4>
        <div className="flex-1 gap-4 overflow-y-scroll">
          <div className="flex gap-2">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="max-w-[70%] text-left">
              <span className="font-semibold">Rijal Ginanjar</span>
              <p className="px-3 py-1 mt-1 rounded-tl-sm bg-neutral-50 rounded-2xl">Hi</p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="max-w-[70%] text-right ">
              <span className="font-semibold">Rijal Ginanjar</span>
              <p className="px-3 py-1 mt-1 text-white rounded-tr-sm bg-neutral-900 rounded-2xl ">Hello</p>
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-full bg-neutral-50">
          <input
            type="text"
            placeholder="Type a message ..."
            className="w-full h-full px-3 py-4 bg-transparent border-none outline-none"
          />
          <button className="absolute p-2 text-white -translate-y-1/2 rounded-full top-1/2 right-2 bg-neutral-900 ring-0">
            <Icon icon="send" className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </section>
  );
};
