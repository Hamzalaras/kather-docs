


export const generateAboutPageHtml = () => {
    return `
        <main id="about-container" class="animate-page-in max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-24">
            <h3 id="about-title" class="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-2 tracking-tight" dir="rtl">
                مُحْتَقَرٌ فِي هِمَّتِي
            </h3>
            <p class="text-center text-slate-600 text-base md:text-lg mb-8 font-light">Learn about this project and its mission</p>
            
            <section id="about-main" class="mt-8 space-y-4">
                <div id="who-section" class="max-w-5xl mx-auto px-4 py-2 font-sans text-slate-800">
                    <h4 id="who-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">Who</h4>
                    <p id="who-content" class="text-base md:text-lg text-slate-600 leading-relaxed">
                        I am a self-taught web developer and a computer science student. I have dedicated myself to mastering web development and building impactful projects. Currently, my focus is directed toward performance, optimization, and creating efficient systems.
                    </p>
                </div>

                <hr class="max-w-5xl mx-auto border-t border-slate-400/40">

                <div id="why-section" class="max-w-5xl mx-auto px-4 py-2 font-sans text-slate-800">
                    <h4 id="why-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">Why</h4>
                    <p id="why-content" class="text-base md:text-lg text-slate-600 leading-relaxed">
                        I built this Arabic Poetry API to bridge a major gap in open-source Arabic digital resources. There is a noticeable shortage of accessible, well-structured APIs dedicated to Arabic literature and metadata. This project aims to make classical and contemporary poetry readily available for developers, researchers, and creators without the barriers of paywalls or proprietary restrictions.
                    </p>
                </div>

                <hr class="max-w-5xl mx-auto border-t border-slate-400/40">

                <div id="missing-information-section" class="max-w-5xl mx-auto px-4 py-2 font-sans text-slate-800">
                    <h4 id="missing-information-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">Missing Information</h4>
                    <p id="missing-information-content" class="text-base md:text-lg text-slate-600 leading-relaxed">
                        If you notice any discrepancies in the database—such as poems incorrectly attributed to a poet, historical data mismatches, or missing entries—your help in correcting them would be highly appreciated. Please feel free to open a pull request in the <a href="https://github.com/Hamzalaras/KATHER" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline">GitHub repository</a>. Open-source contributions ensure this remains a reliable resource for everyone.
                    </p>
                </div>

                <hr class="max-w-5xl mx-auto border-t border-slate-400/40">

                <div id="connect-section" class="max-w-5xl mx-auto px-4 py-2 font-sans text-slate-800">
                    <h4 id="connect-title" class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">Let's Connect</h4>
                    <p id="connect-content" class="text-base md:text-lg text-slate-600 leading-relaxed">
                        You can explore my projects and contributions directly on GitHub. Feel free to use the shortcut link provided in the footer of this website. I am always open to discussing app development, technical challenges regarding Arabic text processing, and potential collaborative open-source projects.
                    </p>
                </div>
            </section>
        </main>
    `;
};