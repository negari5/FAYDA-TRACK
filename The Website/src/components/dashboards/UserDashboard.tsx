import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, 
  Eye, 
  QrCode, 
  Trash2, 
  Calendar, 
  User, 
  Mail, 
  Shield,
  Activity,
  FileText,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { mockHealthRecords } from "@/utils/mockData";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentUser } = useAuth();
  const [records] = useState(mockHealthRecords.filter(r => r.userId === currentUser?.id));

  const handleAddNew = () => {
    navigate('/add');
  };

  const handleView = (recordId: string) => {
    toast({
      title: "Record Opened",
      description: `Viewing health record #${recordId}`,
    });
  };

  const handleShareQR = (recordId: string) => {
    toast({
      title: "QR Code Generated",
      description: "QR code for sharing has been generated",
    });
  };

  const handleDelete = (recordId: string) => {
    toast({
      title: "Record Deleted",
      description: "Health record has been removed",
      variant: "destructive"
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      verified: 'default',
      pending: 'secondary', 
      rejected: 'destructive'
    };
    return <Badge variant={variants[status as keyof typeof variants] as any}>{status}</Badge>;
  };

  if (!currentUser) return null;

  return (
    <>
      {/* Welcome Banner */}
      <Card className="bg-gradient-primary text-primary-foreground shadow-medical border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <User className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Welcome back, {currentUser.fullName}!</h2>
              <p className="text-primary-foreground/80">Fayda ID: {currentUser.faydaId}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Info */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Profile Information
          </CardTitle>
          <CardDescription>Your verified personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{currentUser.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Date of Birth</p>
                <p className="text-sm text-muted-foreground">{currentUser.dateOfBirth}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-3">
            <Shield className="h-4 w-4 text-accent" />
            <div>
              <p className="text-sm font-medium">Gender</p>
              <p className="text-sm text-muted-foreground">{currentUser.gender}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Records */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Health Records
            <Badge variant="secondary" className="ml-2">{records.length} records</Badge>
          </CardTitle>
          <CardDescription>Your complete medical history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {records.map((record) => (
              <div key={record.id} className="border rounded-lg p-4 hover:shadow-soft transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">{record.title}</h3>
                      {getStatusIcon(record.status)}
                      {getStatusBadge(record.status)}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(record.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-sm text-foreground">{record.summary}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleView(record.id)}
                    >
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="medical"
                      onClick={() => handleShareQR(record.id)}
                    >
                      <QrCode className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(record.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDashboard;