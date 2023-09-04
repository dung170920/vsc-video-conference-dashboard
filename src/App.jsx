import { LeftContent, RightContent, Sidebar } from "./components";

function App() {
  return (
    <main className="flex w-screen h-screen gap-4 p-5 overflow-hidden bg-neutral-50">
      <Sidebar />
      <LeftContent />
      <RightContent />
    </main>
  );
}

export default App;
