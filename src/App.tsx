function App() {
  return (
    <div className="flex justify-center p-20 flex-col items-center gap-20">
      <h1 className="text-7xl">How Much in</h1>
      <form className="flex gap-2">
        <input
          type="number"
          min={0}
          step={"any"}
          placeholder="Enter your measurement"
          className="px-5 py-6 text-3xl outline-indigo-600 border-solid rounded-md "
        />
        <button className="rounded-md bg-indigo-600 px-5 py-6 text-3xl font-semibold text-white ">
          Go!
        </button>
      </form>
    </div>
  );
}

export default App;
