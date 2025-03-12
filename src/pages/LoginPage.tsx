
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Loader2, User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const LoginPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let success = false;
      
      if (isLoginMode) {
        success = await login(email, password);
      } else {
        success = await register(name, email, password);
      }
      
      if (success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Auth error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blinkit-lightGreen py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-700 hover:text-blinkit-green">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <Link to="/">
              <img 
                src="https://blinkit.com/images/blinkit/blinkit-logo-24684.png" 
                alt="BlinkIt" 
                className="h-10 mx-auto mb-6"
              />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {isLoginMode ? 'Welcome back!' : 'Create your account'}
            </h1>
            <p className="text-gray-600">
              {isLoginMode 
                ? 'Sign in to continue with BlinkIt' 
                : 'Get started with BlinkIt in minutes'}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <form onSubmit={handleSubmit}>
              {!isLoginMode && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blinkit-green focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blinkit-green focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blinkit-green focus:border-transparent"
                    placeholder="********"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blinkit-green text-white py-2 rounded-md font-medium transition-colors hover:bg-opacity-90 flex justify-center items-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {isLoginMode ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  <>{isLoginMode ? 'Sign In' : 'Create Account'}</>
                )}
              </button>
              
              {isLoginMode && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600">Demo: demo@example.com / password</span>
                </div>
              )}
            </form>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {isLoginMode ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="ml-1 text-blinkit-green hover:underline"
              >
                {isLoginMode ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
