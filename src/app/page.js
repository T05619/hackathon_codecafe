export default function Home() {
  return (
    <>
      <header className="h-[35vh] flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-2xl font-bold">Website Name</h1>
          <p className="text-gray-600">Some Text</p>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">Explanation</h2>
        <p className="mb-2 text-gray-700">Some Text</p>
      </main>
    </>
  );
}
