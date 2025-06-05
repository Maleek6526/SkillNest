import { useState } from "react";
import { Loader, ArrowLeft, Mail } from "lucide-react";
import Driver from "../assets/driver.jpg"; // Example image, replace with actual path
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    setEmailError("Email is required");
    return;
  }

  if (!validateEmail(email)) {
    setEmailError("Please enter a valid email address");
    return;
  }

  setIsSubmitting(true);

try {
  const response = await fetch("http://localhost:8080/api/skill-nest/auth/users/send-reset-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Failed to send reset link");
  }

  const data = await response.json();

  Swal.fire({
    title: 'Reset Link Sent!',
    text: `We've sent a password reset link to ${email}. Please check your inbox.`,
    icon: 'success',
    confirmButtonColor: '#7E69AB',
    confirmButtonText: 'OK'
  }).then(() => {
      localStorage.setItem("userEmail", email);
      navigate('/password-reset');
  });

} catch (error) {
  Swal.fire({
    title: 'Error',
    text: error.message,
    icon: 'error',
    confirmButtonColor: '#7E69AB',
    confirmButtonText: 'Try Again'
  });
} finally {
  setIsSubmitting(false);
}
};

  const handleBackToLogin = () => {
    Swal.fire({
      title: 'Going back',
      text: 'Are you sure you want to go back to the login page?',
      icon: 'question',
      confirmButtonColor: '#7E69AB',
      showCancelButton: true,
      cancelButtonText: 'Stay here',
      confirmButtonText: 'Go back'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login';
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row items-center">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-12 flex flex-col justify-center items-center transition-all duration-500 ease-in-out">
        <div className="w-full max-w-md">
          <div className="mb-6 sm:mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1F2C] mb-2">
              <span className="text-[#7E69AB]">Skill</span>Nest
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Reset your password
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-gray-600">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  className={`w-full pl-10 py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 border ${
                    emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#9b87f5]"
                  } focus:outline-none focus:ring-2`}
                  placeholder="Your email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#7E69AB] hover:bg-[#6E59A5] text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9b87f5] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-[#7E69AB] text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="flex justify-center items-center">
                    <Loader className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Sending...
                  </span>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>

            <button
              onClick={handleBackToLogin}
              className="flex items-center justify-center w-full text-[#7E69AB] hover:text-[#9b87f5] font-medium focus:outline-none mt-4 sm:mt-6 text-sm sm:text-base"
            >
              <ArrowLeft size={14} className="mr-1 sm:h-4 sm:w-4" />
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex w-full md:w-1/2 bg-[#E5DEFF] items-center justify-center p-4 sm:p-6 md:p-8 min-h-[25vh] md:min-h-screen transition-all duration-500 ease-in-out">
        <div className="max-w-lg p-2 sm:p-4 animate-fade-in">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1F2C] mb-2 sm:mb-4">Reset Your <span className="text-[#7E69AB]">SkillNest</span> Password</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Forgot your password? Don't worry! Enter your email and we'll help you get back into your account.
            </p>
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-xl shadow-xl">
              <img 
                src={Driver} 
                alt="Password Reset" 
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500 ease-in-out" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;