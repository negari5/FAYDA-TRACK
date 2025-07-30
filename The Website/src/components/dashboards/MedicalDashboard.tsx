import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  CheckCircle, 
  XCircle, 
  Clock,
  FileText,
  User,
  Upload,
  Calendar
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { assignedPatients, mockHealthRecords } from "@/utils/mockData";

const MedicalDashboard = () => {
  const { toast } = useToast();
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [patients] = useState(assignedPatients);
  const [pendingRecords] = useState(mockHealthRecords.filter(r => r.status === 'pending'));

  const handleVerify = (recordId: string) => {
    toast({
      title: "Record Verified",
      description: "Health record has been successfully verified",
    });
  };

  const handleReject = (recordId: string) => {
    toast({
      title: "Record Rejected",
      description: "Health record verification has been rejected",
      variant: "destructive"
    });
  };

  const handleUploadForPatient = (patientId: string) => {
    toast({
      title: "Upload Medical Record",
      description: "Opening medical record upload form",
    });
  };

  const filteredPatients = patients.filter(patient => 
    patient.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.faydaId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!currentUser) return null;

  return (
    <>
      {/* Welcome Banner */}
      <Card className="bg-gradient-success text-accent-foreground shadow-medical border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Users className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Medical Dashboard</h2>
              <p className="text-accent-foreground/80">Dr. {currentUser.fullName} - {currentUser.organization}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{patients.length}</p>
                <p className="text-sm text-muted-foreground">Assigned Patients</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">{pendingRecords.length}</p>
                <p className="text-sm text-muted-foreground">Pending Verifications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Verified Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Search */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Search Patients
          </CardTitle>
          <CardDescription>Find patients by name or Fayda ID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Search by name or Fayda ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Assigned Patients */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Assigned Patients
          </CardTitle>
          <CardDescription>Patients under your care</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div key={patient.userId} className="border rounded-lg p-4 hover:shadow-soft transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{patient.userName}</h3>
                      <p className="text-sm text-muted-foreground">{patient.faydaId}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">{patient.totalRecords} records</Badge>
                        {patient.pendingRecords > 0 && (
                          <Badge variant="secondary">{patient.pendingRecords} pending</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Records
                    </Button>
                    <Button 
                      size="sm" 
                      variant="medical"
                      onClick={() => handleUploadForPatient(patient.userId)}
                    >
                      <Upload className="h-3 w-3 mr-1" />
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Verifications */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-warning" />
            Pending Verifications
          </CardTitle>
          <CardDescription>Records awaiting your verification</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingRecords.map((record) => (
              <div key={record.id} className="border rounded-lg p-4 hover:shadow-soft transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-foreground">{record.title}</h3>
                      <Badge variant="secondary">pending</Badge>
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
                      onClick={() => handleVerify(record.id)}
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verify
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleReject(record.id)}
                    >
                      <XCircle className="h-3 w-3 mr-1" />
                      Reject
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

export default MedicalDashboard;