import JobList from "../components/JobList";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-10 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">AI-Powered Job Match Dashboard</h1>
        <ThemeToggle />
      </div>

      <JobList />

      <Footer />
    </div>
  );
}
