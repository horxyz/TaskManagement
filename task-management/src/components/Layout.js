import Title from "./Title";
import AddTask from "./AddTask";
function Layout() {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 place-items-center">
        <section className="text-center bg-pink-300 w-36 h-8">
          <Title value={"Prapare to study"} />
        </section>
        <section className="flex justify-center bg-pink-300 w-36 h-72">
          <AddTask />
        </section>
        <section className="text-center bg-green-500 w-36 h-8">
          <Title value={"Learning..."} />
        </section>
        <section className="flex justify-center bg-green-500 w-36 h-72">

        </section>
        <section className="text-center bg-gray-300 w-36 h-8">
          <Title value={"Complete"} />
        </section>
        <section className="flex justify-center bg-gray-300 w-36 h-72">

        </section>
      </div>
    </>
  );
}

export default Layout;

// tailwind 3 columns 2 rows
// grid-template-columns: repeat(2, 1fr);