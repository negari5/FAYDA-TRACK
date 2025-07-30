import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Shield,
  Activity,
  LogOut
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import UserDashboard from "@/components/dashboards/UserDashboard";
import MedicalDashboard from "@/components/dashboards/MedicalDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";


const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleAddNew = () => {
    navigate('/add');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Redirect to login if no user
  if (!currentUser) {
    navigate('/');
    return null;
  }

  const renderDashboard = () => {
    switch (currentUser.role) {
      case 'user':
        return <UserDashboard />;
      case 'medical':
        return <MedicalDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-trust">
      <div className="container mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">FAYDA-HEALTHTRACK</h1>
              <p className="text-sm text-muted-foreground">Digital Health Records</p>
            </div>
          </div>
          <div className="flex gap-2">
            {currentUser.role === 'user' && (
              <Button variant="fayda" onClick={handleAddNew} className="shadow-medical">
                <Plus className="mr-2 h-4 w-4" />
                Add New Entry
              </Button>
            )}
            <Button variant="outline" onClick={handleLogout} className="shadow-medical">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Role-based Dashboard Content */}
        {renderDashboard()}
      </div>
    </div>
  );
};

export default Dashboard;