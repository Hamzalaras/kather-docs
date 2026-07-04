


export const generatePlayGroundHtml = () => {
    return `
        <main id="play-ground-container" class="animate-page-in max-w-2xl mx-auto px-4 pt-28 pb-16 flex flex-col items-center w-full">
            <h3 id="play-ground-title" class="text-3xl sm:text-4xl font-black tracking-widest text-slate-900 mb-8 text-center">
                HAVE FUN.
            </h3>
            <section id="play-ground-fun" class="w-full flex flex-col gap-6">
                <div id="play-ground-fun-send" class="w-full flex flex-col gap-4 items-center">
                    <input id="play-ground-fun-send-input" type="text" placeholder="Type something here..." class="w-full px-6 py-3.5 rounded-full bg-white text-slate-900 shadow-md border border-black/5 focus:outline-none focus:ring-2 focus:ring-slate-900/10 text-sm sm:text-base tracking-wide placeholder:text-slate-400">
                    
                    <div id="play-ground-fun-send-buttons" class="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
                        <div id="suggest-button" class="whitespace-nowrap px-5 py-2 bg-amber-100 text-slate-900 border border-black/5 rounded-full cursor-pointer font-semibold text-xs sm:text-sm tracking-wide shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95">suggest</div>
                        <div id="send_cancel-button" class="whitespace-nowrap px-5 py-2 bg-slate-900 text-amber-100 rounded-full cursor-pointer font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:bg-slate-800 active:scale-95">send</div>
                        <div id="clear-button" class="whitespace-nowrap px-5 py-2 bg-black/5 text-slate-600 rounded-full cursor-pointer font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:bg-black/10 active:scale-95">clear</div>
                    </div>
                </div>
                
                <div id="play-ground-fun-response" class="w-full">
                    <div id="response-container" class="w-full bg-amber-50/40 border border-black/5 text-slate-600 rounded-2xl px-6 py-12 text-xs sm:text-sm font-medium tracking-wide leading-relaxed shadow-inner min-h-[140px] flex items-center justify-center">
                        <pre id="response-json" class="block max-h-80 w-full overflow-auto bg-[#111C32] text-slate-200 p-4 rounded-lg font-mono text-xs md:text-sm border border-slate-800 scrollbar-thin"><code>Nothing here yet, try some of our suggestions !!</code></pre>
                    </div>
                </div>
            </section>
        </main>
    `;
};