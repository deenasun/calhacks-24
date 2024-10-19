import { DashboardContextProvider } from "./DashboardContext";
import ProjectsFeed from "./ProjectsFeed";

export default function Dashboard() {
  return (
    <DashboardContextProvider>
    <div className="w-full grid grid-cols-[1fr_1fr] gap-4">
      <div className='border-1 border-black'><ProjectsFeed /></div>
    </div>
    </DashboardContextProvider>
  );
}
