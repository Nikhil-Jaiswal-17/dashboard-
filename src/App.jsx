import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentsTable from "./components/StudentsTable";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50">
        <Header />
        <section className="p-4">
          <StudentsTable />
        </section>
      </main>
    </div>
  );
}

export default App;
