import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 text-gray-800">
                <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-14 md:py-16">
                    {/* Main Footer Content */}
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
                        {/* Links Section */}
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full lg:w-auto">
                            {/* Logo - Hidden on mobile, shown on md+ */}
                            <div className="hidden md:block">
                                <a href="#" className="inline-block">
                                    <img src="/logo.svg" alt="logo" className='h-16 sm:h-20 w-auto' />
                                </a>
                            </div>
                            
                            {/* Product Links */}
                            <div>
                                <p className="text-slate-100 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">Product</p>
                                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px]">
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Home</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Support</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Pricing</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Affiliate</a></li>
                                </ul>
                            </div>
                            
                            {/* Resources Links */}
                            <div>
                                <p className="text-slate-100 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">Resources</p>
                                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px]">
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Company</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Blogs</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Community</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Careers</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">About</a></li>
                                </ul>
                            </div>
                            
                            {/* Legal Links */}
                            <div>
                                <p className="text-slate-100 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">Legal</p>
                                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px]">
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Privacy</a></li>
                                    <li><a href="/" className="hover:text-[#289db9] transition-colors duration-200">Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Right Section - Tagline and Social */}
                        <div className="flex flex-col items-center text-center lg:items-end lg:text-right gap-4 lg:max-w-xs xl:max-w-sm">
                            {/* Logo on mobile and tablet only */}
                            <a href="#" className="md:hidden mb-2">
                                <img src="/logo.svg" alt="logo" className='h-16 w-auto' />
                            </a>
                            
                            <p className="text-xs sm:text-[13px] md:text-sm max-w-[280px] sm:max-w-xs leading-relaxed">
                                Making every customer feel valued—no matter the size of your audience.
                            </p>
                            
                            {/* Social Icons */}
                            <div className="flex items-center gap-4 sm:gap-5 mt-2">
                                <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer" className="hover:text-[#289db9] transition-colors duration-200" aria-label="Dribbble">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer" className="hover:text-[#289db9] transition-colors duration-200" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer" className="hover:text-[#289db9] transition-colors duration-200" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer" className="hover:text-[#289db9] transition-colors duration-200" aria-label="YouTube">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                                        <path d="m10 15 5-3-5-3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-300/30 text-center">
                        <p className="text-xs sm:text-[13px] text-slate-200">
                            © 2025 <a href="https://prebuiltui.com" className="hover:text-[#289db9] transition-colors duration-200 font-medium">Resumify.AI</a>
                        </p>
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    )
}

export default Footer