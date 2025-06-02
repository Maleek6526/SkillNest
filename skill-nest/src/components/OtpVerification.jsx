import { useState, useEffect } from "react";
import { Loader, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Swal from 'sweetalert2';
import Mechanic from "../assets/mechanics.jpg"; // Example image, replace with actual path
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isResending, setIsResending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("user@example.com");
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (otp.join("").length === 6) {
      handleVerify();
    }
  }, [otp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value === "" || /^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text");
    const digits = pastedData.replace(/\D/g, "");

    if (digits.length === 6) {
      const newOtp = digits.split("").slice(0, 6);
      setOtp(newOtp);
      const nextInput = document.getElementById(`otp-${newOtp.findIndex(d => d === "")}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => {
      setOtp(["", "", "", "", "", ""]);
      setTimeLeft(120);
      Swal.fire({
        title: 'Success!',
        text: 'OTP resent successfully. Please check your email.',
        icon: 'success',
        confirmButtonColor: '#7E69AB',
        confirmButtonText: 'OK'
      });
      setIsResending(false);
    }, 1500);
  };

  const handleVerify = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      Swal.fire({
        title: 'Verified!',
        text: 'OTP verified successfully!',
        icon: 'success',
        confirmButtonColor: '#7E69AB',
        confirmButtonText: 'Continue'
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
      setIsSubmitting(false);
    }, 1500);
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
        navigate('/login');
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center transition-all duration-500 ease-in-out">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-[#1A1F2C] mb-2">
              <span className="text-[#7E69AB]">Skill</span>Nest
            </h1>
            <p className="text-gray-600">
              Verify your account
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-sm sm:text-base text-gray-600">
                We've sent a 6-digit verification code to
              </p>
              <p className="text-sm sm:text-base font-medium text-[#1A1F2C]">{email}</p>
            </div>

            <div className="flex justify-center gap-2" onPaste={handlePaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) => handleInputChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-12 h-12 px-4 py-3 text-lg text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition-all duration-200"
                  maxLength={1}
                />
              ))}
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.join("").length !== 6 || isSubmitting}
              className="w-full bg-[#7E69AB] hover:bg-[#6E59A5] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9b87f5] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-[#7E69AB] text-sm sm:text-base"
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center">
                  <Loader className="animate-spin h-5 w-5 mr-2" />
                  Verifying...
                </span>
              ) : (
                "Verify & Continue"
              )}
            </button>

            <div className="text-center text-sm sm:text-base text-gray-600">
              Didn't receive the code?{" "}
              {timeLeft > 0 ? (
                <span className="text-[#7E69AB] ml-1">
                  Resend in {formatTime(timeLeft)}
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-[#7E69AB] hover:text-[#9b87f5] ml-1 font-medium focus:outline-none disabled:opacity-50"
                >
                  {isResending ? (
                    <span className="inline-flex items-center">
                      <Loader className="animate-spin h-4 w-4 mr-1" /> Resending...
                    </span>
                  ) : (
                    "Resend Code"
                  )}
                </button>
              )}
            </div>

            <button
              onClick={handleBackToLogin}
              className="flex items-center justify-center w-full text-[#7E69AB] hover:text-[#9b87f5] font-medium focus:outline-none mt-6 text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex w-full md:w-1/2 bg-[#E5DEFF] items-center justify-center p-8 min-h-[30vh] md:min-h-screen transition-all duration-500 ease-in-out">
        <div className="max-w-lg p-4 animate-fade-in">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Verify Your <span className="text-[#7E69AB]">SkillNest</span> Account</h2>
            <p className="text-gray-600 mb-6">Enter the verification code sent to your email to complete your registration.</p>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-xl">
              <img 
                src={Mechanic}
                alt="Verification" 
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500 ease-in-out" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;