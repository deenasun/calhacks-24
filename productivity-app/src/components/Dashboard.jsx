import { DashboardContextProvider } from "./DashboardContext";
import ProjectsFeed from "./ProjectsFeed";

export default function Dashboard() {
  return (
    <DashboardContextProvider>
      <div className="w-full flex flex-row flex-1 gap-4">
        <ProjectsFeed />
      </div>
    </DashboardContextProvider>
  );
}
