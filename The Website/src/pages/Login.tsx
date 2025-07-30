import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Activity, User, Stethoscope, Settings } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { sampleUsers } from "@/utils/mockData";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleSampleLogin = (userId: string) => {
    login(userId);
    navigate('/auth/callback');
  };

  return (
    <div className="min-h-screen bg-gradient-trust flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-in">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shadow-medical">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="p-3 bg-gradient-success rounded-xl shadow-medical">
              <Activity className="h-8 w-8 text-accent-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            FAYDA-HEALTHTRACK
          </h1>
          <p className="text-muted-foreground text-sm">
            Secure Health Records for Ethiopia
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-medical border-0">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in with your Fayda ID to access your health records
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-muted-foreground">Select User Type to Demo</h3>
              
              {/* Sample User Login Options */}
              <div className="space-y-3">
                {sampleUsers.map((user) => (
                  <Button
                    key={user.id}
                    variant={user.role === 'user' ? 'fayda' : user.role === 'medical' ? 'medical' : 'outline'}
                    size="lg"
                    className="w-full justify-start"
                    onClick={() => handleSampleLogin(user.id)}
                  >
                    {user.role === 'user' && <User className="mr-3 h-5 w-5" />}
                    {user.role === 'medical' && <Stethoscope className="mr-3 h-5 w-5" />}
                    {user.role === 'admin' && <Settings className="mr-3 h-5 w-5" />}
                    <div className="text-left">
                      <div className="font-medium">
                        {user.role === 'user' && '🧍 Customer: '}
                        {user.role === 'medical' && '🧑‍⚕️ Medical Team: '}
                        {user.role === 'admin' && '🛠 Admin: '}
                        {user.fullName}
                      </div>
                      <div className="text-xs opacity-80">{user.organization || 'Personal Health Records'}</div>
                    </div>
                  </Button>
                ))}
              </div>
              
              <div className="text-xs text-muted-foreground space-y-1 mt-4">
                <p>🔒 Secured by Ethiopian Government</p>
                <p>🏥 Your health data is protected</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-muted-foreground">
          <p>Powered by Fayda Digital Identity System</p>
          <p className="mt-1">© 2024 Ethiopian Digital Health Initiative</p>
        </div>
      </div>
    </div>
  );
};

export default Login;