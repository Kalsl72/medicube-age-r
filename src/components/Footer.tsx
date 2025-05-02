
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-deepnavy py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-montserrat font-bold text-lg mb-2">Medicube Age-R Booster Pro</h3>
            <p className="text-white/70 text-sm font-lato">Advanced Microcurrent Technology</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-white/70 hover:text-white transition-colors">
              <a href="#" className="text-sm">Privacy Policy</a>
            </div>
            <div className="text-white/70 hover:text-white transition-colors">
              <a href="#" className="text-sm">Terms of Service</a>
            </div>
            <div className="text-white/70 hover:text-white transition-colors">
              <a href="#" className="text-sm">Contact Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="text-white/50 text-sm font-lato">
            *Results may vary. For best results, use consistently as directed.
          </p>
          <p className="text-white/50 text-sm font-lato mt-2">
            &copy; {new Date().getFullYear()} Medicube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
