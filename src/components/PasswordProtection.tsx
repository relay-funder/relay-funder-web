import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Lock, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const sitePassword = import.meta.env.VITE_SITE_PASSWORD;
  const sessionKey = 'relay_funder_auth';

  useEffect(() => {
    // If no password is set in environment, allow access
    if (!sitePassword) {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    // Check if user is already authenticated
    const storedAuth = sessionStorage.getItem(sessionKey);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, [sitePassword]);

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password === sitePassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem(sessionKey, 'true');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If authenticated or no password required, show the app
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Show password protection screen
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">Protected Site</CardTitle>
              <CardDescription className="mt-2">
                Please enter the password to access this site
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className={cn(error && 'border-destructive focus-visible:ring-destructive')}
                  autoFocus
                />
                {error && (
                  <div className="flex items-center space-x-2 text-sm text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={!password.trim()}>
                Access Site
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PasswordProtection;
