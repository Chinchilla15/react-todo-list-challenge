export default function Sidebar() {
  return (
    <aside className="bg-accent flex flex-col">
      <div className="mt-6 flex flex-col items-center gap-4">
        <button className="hover:text-whiteDefault cursor-pointer text-2xl transition-all duration-300 ease-in-out hover:shadow-[inset_150px_0_0_0_#00ADB5]">
          Home
        </button>
      </div>
    </aside>
  );
}
