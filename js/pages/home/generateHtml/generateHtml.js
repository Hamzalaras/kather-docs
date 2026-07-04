export const generateHomePage = () => {
    return `
        <main id="home-container" class="animate-page-in absolute flex flex-col items-center justify-center w-full h-full">
            <canvas id="lines-cnvs" class="absolute z-0 pointer-events-none"></canvas>

            <div class="flex flex-col items-center gap-4 relative z-10">
                <div id="logo-container" class="w-70 sm:w-105 h-auto flex items-center justify-center">
                    <img 
                        src="images/KATHER_logo.png" 
                        alt="KATHER Logo" 
                        class="w-full h-auto block object-contain filter drop-shadow-sm"
                    >
                </div>
                
                <div id="get-started-btn" class="px-6 py-3 bg-amber-100 text-slate-900 font-semibold rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all cursor-pointer active:scale-95">
                    Explore
                </div>
            </div>
        </main>
    `
};