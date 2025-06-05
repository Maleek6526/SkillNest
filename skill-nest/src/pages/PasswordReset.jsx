import { useState } from "react";
import { Eye, EyeOff, Loader, ArrowLeft } from "lucide-react";
import Swal from "sweetalert2";
import Mechanic from "../assets/picture2.jpg";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = localStorage.getItem("userEmail") || "user@example.com";
  const navigate = useNavigate();

  const handleNext = async () => {
    if (step === 3) {
      if (!otp || !newPassword) {
        Swal.fire({
          icon: "warning",
          title: "Missing Fields",
          text: "OTP and new password are required.",
        });
        return;
      }

      setIsSubmitting(true);
      try {
        const response = await fetch(
          "http://localhost:8080/api/skill-nest/auth/users/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, otp, newPassword }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          Swal.fire({
            icon: "error",
            title: "Reset Failed",
            text: data.message || "Could not reset password.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Password Reset",
            text: "Your password has been reset successfully.",
            confirmButtonColor: "#7E69AB",
          }).then(() => navigate("/login"));
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Network error occurred.",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate("/login");
  };

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row items-center">
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1A1F2C] mb-2">
              <span className="text-[#7E69AB]">Skill</span>Nest
            </h1>
            <p className="text-gray-600">
              {step === 1
                ? "Confirm your email"
                : step === 2
                ? "Enter the OTP sent to your email"
                : "Set your new password"}
            </p>
          </div>

          {/* Step 1 - Email */}
          {step === 1 && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-gray-700 cursor-not-allowed"
              />
            </div>
          )}

          {/* Step 2 - OTP */}
          {step === 2 && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E69AB]"
                placeholder="6-digit code"
              />
            </div>
          )}

          {/* Step 3 - New Password */}
          {step === 3 && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7E69AB]"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            <button
              onClick={handleBack}
              className="flex items-center text-[#7E69AB] hover:text-[#9b87f5] font-medium text-sm sm:text-base"
            >
              <ArrowLeft size={16} className="mr-1" />
              {step === 1 ? "Back to Login" : "Back"}
            </button>

            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="ml-auto bg-[#7E69AB] hover:bg-[#6E59A5] text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <Loader className="animate-spin h-5 w-5 mr-2" />
                  Submitting...
                </span>
              ) : step === 3 ? (
                "Reset Password"
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden sm:flex w-full md:w-1/2 bg-[#E5DEFF] items-center justify-center p-8 min-h-[30vh] md:min-h-screen">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
            Reset Your <span className="text-[#7E69AB]">SkillNest</span> Access
          </h2>
          <p className="text-gray-600 mb-6">
            Just a few simple steps to reset your password and regain access to
            your account.
          </p>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-xl">
            <img
              src={Mechanic}
              alt="Reset Illustration"
              className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
