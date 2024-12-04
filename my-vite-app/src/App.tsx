import React, { useRef } from 'react';

import shiftswapIcon from './images/shiftswap_icon_500.png';
import worker1 from './images/worker1.jpg';
import worker2 from './images/worker2.jpg';
import worker3 from './images/worker3.jpg';
import discordLogo from './images/discord_icon.png';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'; // Ensure this path is correct
import { Button } from '@/components/ui/button';

function App() {
  const landingRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);
  const affiliateRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
          <div className="flex items-center mb-2 sm:mb-0">
            <img src={shiftswapIcon} alt="ShiftSwap Icon" className="h-8 w-8 mr-2 rounded-full" />
            <span className="text-xl font-bold text-gray-800">ShiftSwap</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button className="sm:px-3 px-2 py-1 text-sm" onClick={() => scrollToSection(landingRef)}>
              Home
            </Button>
            <Button className="sm:px-3 px-2 py-1 text-sm" onClick={() => scrollToSection(paymentRef)}>
              Payment
            </Button>
            <Button className="sm:px-3 px-2 py-1 text-sm" onClick={() => scrollToSection(affiliateRef)}>
              Affiliate
            </Button>
          </div>
        </div>
      </nav>

      {/* Landing Page Section */}
      <div
        ref={landingRef}
        className="min-h-screen w-screen bg-gray-50 flex flex-col items-center py-24 px-4"
      >
        <header className="w-full max-w-5xl text-center mb-12">
          <img
            src={shiftswapIcon}
            alt="ShiftSwap Icon"
            className="mx-auto h-20 w-20 sm:h-24 sm:w-24 mb-4 rounded-full"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
            Welcome to ShiftSwap
          </h1>
          <p className="text-gray-700 mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Empowering businesses to streamline shift management and boost productivity.
          </p>
        </header>

        <main className="w-full max-w-5xl">
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800">
                About ShiftSwap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                At ShiftSwap, we understand the complexities of managing employee shifts.
                Our platform is designed to simplify scheduling, reduce absenteeism, and
                enhance communication within your team. By leveraging intuitive technology,
                we help businesses like yours save time and resources, allowing you to focus
                on what truly matters—growing your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <img
                    src={worker3}
                    alt="Worker 3"
                    className="h-24 w-24 sm:h-32 sm:w-32 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Efficient Scheduling
                  </h3>
                  <p className="text-gray-600 text-center">
                    Automate your scheduling process and minimize conflicts.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={worker1}
                    alt="Worker 1"
                    className="h-24 w-24 sm:h-32 sm:w-32 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Team Communication
                  </h3>
                  <p className="text-gray-600 text-center">
                    Foster a collaborative environment with centralized communication.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={worker2}
                    alt="Worker 2"
                    className="h-24 w-24 sm:h-32 sm:w-32 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Productivity Boost
                  </h3>
                  <p className="text-gray-600 text-center">
                    Increase productivity by ensuring optimal shift coverage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center mt-8">
            <Button
              className="bg-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-700 text-base sm:text-xl"
              onClick={() => scrollToSection(paymentRef)}
            >
              Get Started Now
            </Button>
            <p className="text-gray-500 text-sm mt-3">
              No credit card required. Free for the first month.
            </p>
          </div>
        </main>
      </div>

      {/* Payment Page Section */}
      <div
        ref={paymentRef}
        className="min-h-screen bg-white flex flex-col items-center py-24 px-4"
      >
        <header className="w-full max-w-4xl text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Business Payment Page</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Secure your subscription and unlock full features
          </p>
        </header>

        <main className="w-full max-w-2xl">
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Click the button below to proceed to our secure payment portal. Pricing is simple, at simply 1 dollar per employee!
              </p>
              <Button
                className="bg-pink-500 text-white px-6 py-3 sm:py-4 rounded-lg shadow-md hover:bg-blue-700 w-full text-base sm:text-lg"
                onClick={() =>
                  (window.location.href =
                    'https://buy.stripe.com/test_5kA4gD61xfmc6JOeUZ')
                }
              >
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Affiliate Page Section */}
      <div
        ref={affiliateRef}
        className="min-h-screen bg-gray-50 flex flex-col items-center py-24 px-4"
      >
        <header className="w-full max-w-5xl text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Affiliate Marketing Program</h1>
        </header>

        <main className="w-full max-w-3xl">
          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">
                Earn 50% Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Join our affiliate program and earn 50% of the revenue for every business you
                recommend to ShiftSwap. We provide you with all the tools and support you need
                to succeed.
              </p>
              <div className="flex items-center justify-center mb-4">
                <Button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 mr-3"
                  onClick={() => window.location.href = 'https://discord.gg/wsXe6VEs'}
                >
                  Join Our Discord
                </Button>
                <img src={discordLogo} alt="Discord Logo" className="h-10 object-contain" />
              </div>
              <p className="text-gray-500 text-sm text-center">
                Connect with our community and start earning today.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
      <footer className="bg-gray-800 text-white py-6">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <h2 className="text-xl font-semibold">Support</h2>
      <p className="mt-2">Contact us at:</p>
      <p className="text-lg font-bold">
        <a href="tel:8609643025" className="hover:underline">
          860-964-3025
        </a>
      </p>
    </div>
  </div>
  <div className="mt-4 text-center text-sm text-gray-400">
    &copy; {new Date().getFullYear()} ShiftSwap. All rights reserved.
  </div>
</footer>
    </div>
  );
}

export default App;
