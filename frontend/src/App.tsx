import AppLayout from './layouts/AppLayout';
import DashboardPage from './pages/DashboardPage';
import RoadmapPage from './pages/RoadmapPage';
import MentorPage from './pages/MentorPage';

const App = () => {
  return (
    <AppLayout>
      <div className="grid gap-6">
        <DashboardPage />
        <RoadmapPage />
        <MentorPage />
      </div>
    </AppLayout>
  );
};

export default App;
