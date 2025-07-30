import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Shield, CheckCircle } from "lucide-react";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate OIDC verification process
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-trust flex items-center justify-center p-4">
      <div className="text-center space-y-8 animate-slide-in">
        {/* Logo */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-primary rounded-xl shadow-medical animate-pulse-glow">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        {/* Loading States */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Loader2 className="h-12 w-12 text-primary mx-auto animate-spin" />
            <h1 className="text-2xl font-semibold text-foreground">
              Verifying your Fayda ID...
            </h1>
            <p className="text-muted-foreground max-w-md">
              Please wait while we securely authenticate your identity and access your health records.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="space-y-3 max-w-sm mx-auto">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">Connected to Fayda servers</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Loader2 className="h-4 w-4 text-primary animate-spin" />
              <span className="text-foreground">Verifying biometric data...</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-50">
              <div className="h-4 w-4 border-2 border-muted rounded-full" />
              <span className="text-muted-foreground">Loading health records</span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-xs text-muted-foreground max-w-md mx-auto">
          <p>🔐 Your data is encrypted end-to-end</p>
          <p className="mt-1">This process is monitored for security</p>
        </div>
      </div>
    </div>
  );
};

export default Callback;