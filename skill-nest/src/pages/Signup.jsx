// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
//  const Signup = () => {
//       const [email, setEmail] = useState('');
//       const [password, setPassword] = useState('');
//       const [showPassword, setShowPassword] = useState(false);

//       const handleGoogleSignIn = () => {
//         alert('Google Sign-In functionality requires backend integration.');
//       };

//       return (
//         <div className="min-h-screen flex items-center justify-center bg-skillnest-gray transition-all duration-500 px-4">
//           <div className="flex flex-col md:flex-row w-full max-w-5xl">
//             {/* Image Section - Hidden on mobile, visible on md screens */}
//             <div className="hidden md:block md:w-1/2 p-8 animate-slide-in-left">
//               <img
//                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076"
//                 alt="Blue-collar worker"
//                 className="w-full h-[600px] object-cover rounded-lg shadow-lg"
//               />
//             </div>
//             {/* Form Section */}
//             <div className="w-full md:w-1/2 p-8 flex justify-center animate-fade-in">
//               <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
//                 <h2 className="text-3xl font-bold text-skillnest-dark mb-6 text-center">Join SkillNest</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-skillnest-dark font-medium">Email</label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-skillnest-blue"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-skillnest-dark font-medium">Password</label>
//                     <div className="relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-skillnest-blue"
//                         placeholder="Enter your password"
//                       />
//                       <button
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                       >
//                         {showPassword ? 'Hide' : 'Show'}
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="w-full bg-skillnest-blue text-white p-3 rounded-lg hover:bg-blue-900 transition duration-300"
//                   >
//                     Sign Up
//                   </button>
//                   <button
//                     onClick={handleGoogleSignIn}
//                     className="w-full border border-gray-300 text-skillnest-dark p-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
//                   >
//                     <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                       <path
//                         fill="currentColor"
//                         d="M12.24 10.4V14h3.3c-.2 1.7-1.5 3.2-3.3 3.2-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6c.9 0 1.7.3 2.4.9l2.4-2.4c-1.1-.9-2.5-1.4-4.8-1.4-3.9 0-7 3.1-7 7s3.1 7 7 7c4.1 0 6.9-2.9 6.9-7 0-.5 0-1-.1-1.5h-7.3z"
//                       />
//                     </svg>
//                     Continue with Google
//                   </button>
//                 </div>
//                 <p className="mt-4 text-center text-skillnest-dark">
//                   Already have an account?{' '}
//                   <Link to="/login" className="text-skillnest-blue hover:underline">
//                     Log In
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     };
//     export default Signup;