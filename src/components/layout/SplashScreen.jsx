import React from 'react';
import logo from '/akc.svg';

const SplashScreen = () => {
  return (
    <div 
      className="flex items-center justify-center h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay */}
      <style>
        {`
          @keyframes zoom {
            0% {
              transform: scale(0.95);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(0.95);
            }
          }

          @keyframes pulse-border {
            0% {
              box-shadow: 0 0 0 0 rgba(160, 82, 45, 0.7); /* Using chocolate milk color for shadow */
            }
            70% {
              box-shadow: 0 0 0 20px rgba(160, 82, 45, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(160, 82, 45, 0);
            }
          }

          .loader {
            animation: zoom 2.5s infinite ease-in-out;
            border-radius: 50%;
            width: 200px; /* Define a fixed size for the loader circle */
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden; /* Ensure content outside the circle is hidden */
            border: 4px solid #A0522D; /* Chocolate milk color */
          }

          .loader img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Make the image cover the entire circle */
            border-radius: 50%; /* Ensure the image is also circular */
          }

          .pulsating-loader {
            border-radius: 50%;
            animation: pulse-border 2s infinite;
            position: relative; /* Position relative to z-index */
            z-index: 10; /* Bring to front */
          }
        `}
      </style>
      <div className="pulsating-loader">
        <div className="loader">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
