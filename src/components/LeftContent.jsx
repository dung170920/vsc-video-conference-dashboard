import { Icon } from "../components";

export const LeftContent = () => {
  return (
    <section className="flex flex-col flex-1 gap-3">
      <div className="flex items-center justify-between w-full p-5 bg-white rounded-3xl">
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full bg-neutral-50 flex-center">
            <Icon className="w-6 h-6" icon="solid-arrow-left-small" />
          </button>
          <div className="">
            <h1 className="text-xl font-semibold">Partai Banteng Weekly Meeting</h1>
            <span className="text-base text-neutral-600">19 Participants</span>
          </div>
        </div>
        <button className="gap-2 px-4 py-2 font-semibold rounded-full flex-center text-red bg-red/10">
          <Icon className="w-8 h-8" icon="log-out" />
          <span className="text-sm">Leave Meeting</span>
        </button>
      </div>
      <div className="flex-col flex-1 w-full gap-3 p-4 bg-white rounded-3xl flex-center">
        <div className="relative flex-1 w-full overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="absolute inset-0 object-cover object-center w-full h-full"
          />
          <div className="absolute flex items-center justify-between top-3 left-3 right-3">
            <div className="gap-2 p-2 rounded-full flex-center bg-white/20 backdrop-blur-xl">
              <div className="overflow-hidden rounded-full w-9 h-9">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-sm text-white">Avril Levronka</span>
            </div>
            <div className="flex gap-2">
              <button className="gap-2 p-3 rounded-full flex-center bg-white/20 backdrop-blur-xl">
                <div className="w-6 h-6 bg-white rounded-full flex-center">
                  <div className="w-3 h-3 rounded-full bg-red"></div>
                </div>
                <span className="text-sm font-medium text-white">Recording</span>
              </button>
              <button className="p-3 text-white rounded-full bg-white/20 backdrop-blur-xl flex-center">
                <Icon icon="solid-thumbtack" className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="absolute flex-col gap-2 -translate-y-1/2 flex-center top-1/2 right-3">
            {["👍🏻", "🔥", "🎉"].map((e) => (
              <button
                className="w-12 h-12 text-xl text-white rounded-full bg-white/20 backdrop-blur-xl flex-center"
                key={e}
              >
                {e}
              </button>
            ))}
          </div>
          <div className="absolute gap-2 bottom-3 flex-center left-3 right-3">
            <button className="p-3 text-white rounded-full bg-white/20 backdrop-blur-xl flex-center">
              <Icon icon="video-slash" className="w-6 h-6" />
            </button>
            <button className="p-3 text-white rounded-full bg-white/20 backdrop-blur-xl flex-center">
              <Icon icon="microphone-slash" className="w-6 h-6" />
            </button>
            <button className="px-8 py-3 ml-2 text-white rounded-full bg-red backdrop-blur-xl flex-center">
              <Icon icon="phone-slash" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="grid w-full grid-cols-4 gap-4 overflow-hidden h-1/3">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="absolute inset-0 object-cover object-center w-full h-full"
            />
            <div className="absolute flex items-center justify-between top-2 left-2 right-2">
              <div className="gap-1 p-1 rounded-full flex-center bg-white/20 backdrop-blur-xl">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs text-white">Oliver Noah</span>
              </div>
              <button className="p-1 text-white rounded-full bg-white/20 backdrop-blur-xl flex-center">
                <Icon icon="microphone-slash" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="absolute inset-0 object-cover object-center w-full h-full"
            />
            <div className="absolute flex items-center justify-between top-2 left-2 right-2">
              <div className="gap-1 p-1 rounded-full flex-center bg-white/20 backdrop-blur-xl">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs text-white">Oliver Noah</span>
              </div>
              <button className="p-1 text-white rounded-full bg-white/20 backdrop-blur-xl flex-center">
                <Icon icon="microphone-slash" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="absolute inset-0 object-cover object-center w-full h-full"
            />
            <div className="absolute flex items-center justify-between top-2 left-2 right-2">
              <div className="gap-1 p-1 rounded-full flex-center bg-white/20 backdrop-blur-xl">
                <div className="w-6 h-6 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-xs text-white">Oliver Noah</span>
              </div>
              <button className="p-1 text-white rounded-full bg-white/20 backdrop-blur-xl flex-center">
                <Icon icon="microphone-slash" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 bg-neutral-50 rounded-3xl">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="col-span-1 overflow-hidden flex-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="object-cover w-20 h-20 rounded-full"
                />
              </div>
            ))}
            <div className="col-span-1 overflow-hidden flex-center">
              <div className="w-20 h-20 text-xl text-white rounded-full bg-neutral-900 flex-center">+15</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
