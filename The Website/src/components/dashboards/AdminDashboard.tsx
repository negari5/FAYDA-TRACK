import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Activity, 
  AlertTriangle, 
  CheckCircle,
  Shield,
  BarChart3,
  Settings,
  Flag,
  Clock,
  TrendingUp
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { adminAnalytics } from "@/utils/mockData";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: "Admin Action",
      description: `${action} action initiated`,
    });
  };

  if (!currentUser) return null;

  return (
    <>
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-medical border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Shield className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Admin Control Panel</h2>
              <p className="text-white/80">{currentUser.fullName} - {currentUser.organization}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{adminAnalytics.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{adminAnalytics.totalMedicalTeam}</p>
                <p className="text-sm text-muted-foreground">Medical Team</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{adminAnalytics.totalRecords.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Health Records</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{adminAnalytics.pendingVerifications}</p>
                <p className="text-sm text-muted-foreground">Pending Verifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            System Health Overview
          </CardTitle>
          <CardDescription>Real-time platform monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <div>
                <p className="font-medium">Platform Status</p>
                <p className="text-sm text-muted-foreground capitalize">{adminAnalytics.systemHealth}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Daily Active Users</p>
                <p className="text-sm text-muted-foreground">2,847 (+12%)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium">Records Today</p>
                <p className="text-sm text-muted-foreground">157 new records</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Management Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              User Management
            </CardTitle>
            <CardDescription>Manage user accounts and medical organizations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Pending Medical Registrations</p>
                  <p className="text-sm text-muted-foreground">7 organizations awaiting approval</p>
                </div>
                <Button size="sm" onClick={() => handleAction("Review medical registrations")}>
                  Review
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">User Account Requests</p>
                  <p className="text-sm text-muted-foreground">23 new user verifications</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleAction("Process user accounts")}>
                  Process
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="h-5 w-5 text-destructive" />
              Content Moderation
            </CardTitle>
            <CardDescription>Handle flagged content and policy violations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <div>
                    <p className="font-medium">Flagged Records</p>
                    <p className="text-sm text-muted-foreground">{adminAnalytics.flaggedContent} items need review</p>
                  </div>
                </div>
                <Button size="sm" variant="destructive" onClick={() => handleAction("Review flagged content")}>
                  Review
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Policy Violations</p>
                  <p className="text-sm text-muted-foreground">2 user reports pending</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => handleAction("Handle violations")}>
                  Handle
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Platform Activity
          </CardTitle>
          <CardDescription>Latest system events and user actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New medical organization registered", time: "2 minutes ago", type: "success" },
              { action: "Bulk verification completed by Dr. Sarah", time: "15 minutes ago", type: "info" },
              { action: "User reported suspicious record", time: "1 hour ago", type: "warning" },
              { action: "System backup completed successfully", time: "2 hours ago", type: "success" },
              { action: "New regional health center approved", time: "4 hours ago", type: "success" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-success' : 
                  activity.type === 'warning' ? 'bg-warning' : 'bg-primary'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminDashboard;