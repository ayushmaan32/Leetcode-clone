import Topbar from "@/components/Topbar/Topbar";
import ProblemTable from "@/components/ProblemTable/Problemtable";

export default function Home() {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        {/* <h1>List of Questions</h1> */}
        <div className="relative mx-auto px-6 pb-10 overflow-x-auto">
          <table className="text-sm text-left max-w-[1200px] text-gray-500 dark:text-gray-400 w-full  py-5 mx-auto">
            <thead className="uppercase text-xs text-gray-400  dark:text-gray-400 border-b">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Title
                </th>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Difficulty
                </th>

                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Solution
                </th>
              </tr>
            </thead>
            <ProblemTable />
          </table>
        </div>
      </main>
    </>
  );
}
