import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import Mechanic from "../assets/mechanics.jpg";
import Welther from '../assets/bricklayer.jpg' 
import { useGoogleLogin  } from '@react-oauth/google';

const API_CONFIG = {
  BASE_URL: "http://localhost:8080",
  ENDPOINTS: {
    SIGNUP: "/api/skill-nest/auth/users/send-email-verification",
    SIGNIN: "/api/skill-nest/auth/users/login-user"
  }
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("talent");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  const mapUserTypeToRole = (userType) => {
    const roleMapping = {
      'talent': 'JOBSEEKER',
      'employer': 'EMPLOYER'
    };
    return roleMapping[userType] || userType.toUpperCase();
  };

  const makeApiCall = async (endpoint, payload) => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
      
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    setIsLoading(true);
    
    Swal.fire({
      title: isLogin ? 'Signing in...' : 'Creating account...',
      html: 'Please wait',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
      background: '#ffffff',
      customClass: {
        title: 'text-[#1A1F2C]',
        popup: 'rounded-xl border border-gray-100 shadow-xl'
      }
    });

    const payload = isLogin 
      ? {
          email: email.trim(),
          password: password,
          role: mapUserTypeToRole(userType)
        }
      : {
          password: password,
          email: email.trim(),
          role: mapUserTypeToRole(userType)
        };

    console.log('Sending payload:', payload);


    const endpoint = isLogin ? API_CONFIG.ENDPOINTS.SIGNIN : API_CONFIG.ENDPOINTS.SIGNUP;

    const result = await makeApiCall(endpoint, payload);
    
    setIsLoading(false);
    
    if (result.success) {

      Swal.fire({
        icon: 'success',
        title: isLogin ? 'Welcome back!' : 'Account created!',
        text: isLogin 
          ? 'You have successfully signed in' 
          : `Your ${userType} account has been created successfully. Please check your email for verification.`,
        confirmButtonText: isLogin ? 'Continue' : 'Check Email',
        confirmButtonColor: '#7E69AB',
        background: '#ffffff',
        customClass: {
          title: 'text-[#1A1F2C]',
          popup: 'rounded-xl border border-gray-100 shadow-xl'
        }
      }).then(() => {
        if (isLogin) {
          console.log('Login successful:', result.data);
        } else {
          console.log('Signup successful:', result.data);
          navigate('/otp-verification')
          setIsLogin(true);
          setEmail("");
          setPassword("");
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.error || 'Something went wrong. Please try again.',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#7E69AB',
        background: '#ffffff',
        customClass: {
          title: 'text-[#1A1F2C]',
          popup: 'rounded-xl border border-gray-100 shadow-xl'
        }
      });
    }
  };

const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;

    if (!accessToken) {
      Swal.fire({
        icon: 'error',
        title: 'Google Sign-In Failed',
        text: 'No access token received.',
      });
      return;
    }

    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/api/skill-nest/auth/users/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: accessToken, role: mapUserTypeToRole(userType) }),
      });
      console.log(mapUserTypeToRole(userType));
      console.log(accessToken);
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Welcome!',
          text: 'You have successfully signed in with Google.',
          confirmButtonText: 'Continue',
          confirmButtonColor: '#7E69AB',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message || 'Something went wrong.',
      });
    }
  },
  onError: () => {
    Swal.fire({
      icon: 'error',
      title: 'Google Sign-In Failed',
      text: 'Try again.',
    });
  },
});



  const handleForgotPassword = () => {
    Swal.fire({
      title: 'Redirecting...',
      text: 'Taking you to password reset',
      icon: 'info',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      background: '#ffffff',
      customClass: {
        title: 'text-[#1A1F2C]',
        popup: 'rounded-xl border border-gray-100 shadow-xl'
      }
    }).then(() => {
      window.location.href = '/forgotten-password';
    });
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row items-center">
      <div 
        className={`w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${isLogin ? 'md:order-2' : 'md:order-1'}`}
      >
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-[#1A1F2C] mb-2">
              <span className="text-[#7E69AB]">Skill</span>Nest
            </h1>
            <p className="text-gray-600">
              {isLogin ? "Sign in to your account" : "Create your account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {isLogin && (
                <div className="mt-1 text-right">
                  <button 
                    type="button" 
                    onClick={handleForgotPassword}
                    disabled={isLoading}
                    className="text-sm text-[#7E69AB] hover:text-[#9b87f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
              <div className="flex space-x-4">
                <label 
                  className={`flex-1 cursor-pointer rounded-lg px-4 py-3 flex items-center justify-center border transition-all duration-200 ${
                    userType === "talent" 
                      ? "border-[#7E69AB] bg-[#E5DEFF] text-[#7E69AB]" 
                      : "border-gray-300 hover:bg-gray-50"
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <input
                    type="radio"
                    name="userType"
                    value="talent"
                    checked={userType === "talent"}
                    onChange={() => setUserType("talent")}
                    disabled={isLoading}
                    className="sr-only"
                  />
                  <span>Talent</span>
                </label>
                <label 
                  className={`flex-1 cursor-pointer rounded-lg px-4 py-3 flex items-center justify-center border transition-all duration-200 ${
                    userType === "employer" 
                      ? "border-[#7E69AB] bg-[#E5DEFF] text-[#7E69AB]" 
                      : "border-gray-300 hover:bg-gray-50"
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <input
                    type="radio"
                    name="userType"
                    value="employer"
                    checked={userType === "employer"}
                    onChange={() => setUserType("employer")}
                    disabled={isLoading}
                    className="sr-only"
                  />
                  <span>Employer</span>
                </label>
                  {!userType && (
                    <p className="text-red-500 text-sm mt-1">
                        Please select a role before continuing with Google.
                    </p>
                  )}  
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#7E69AB] hover:bg-[#6E59A5] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9b87f5] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
            </button>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 absolute w-full"></div>
              <div className="text-sm text-gray-500 bg-white px-3 relative">or continue with</div>
            </div>

            <button
              type="button"
              onClick={() => googleLogin ()}
              disabled={isLoading || !userType}
              className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                />
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                />
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                />
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                />
            </svg>
              Continue with Google
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleForm}
                disabled={isLoading}
                className="ml-1 text-[#7E69AB] hover:text-[#9b87f5] font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div 
        className={`hidden sm:flex w-full md:w-1/2 bg-[#E5DEFF] items-center justify-center p-8 min-h-[30vh] md:min-h-screen transition-all duration-500 ease-in-out ${isLogin ? 'md:order-1' : 'md:order-2'}`}
      >
        <div className="max-w-lg p-4 animate-fade-in">
          {isLogin ? (
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Welcome Back to <span className="text-[#7E69AB]">SkillNest</span></h2>
              <p className="text-gray-600 mb-6">Sign in to connect with top talents and opportunities in your industry.</p>
              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={Mechanic}
                  alt="Professional networking" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500 ease-in-out" 
                />
              </div>
            </div>
          ) : (
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Join <span className="text-[#7E69AB]">SkillNest</span> Today</h2>
              <p className="text-gray-600 mb-6">Create an account to showcase your skills or find the perfect talent for your team.</p>
              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={Welther} 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500 ease-in-out" 
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;