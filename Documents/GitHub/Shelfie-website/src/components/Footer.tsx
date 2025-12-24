export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]"></div>

      <div className="mx-auto max-w-[1200px] w-full px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="max-w-sm">
                  <h2 className="text-2xl font-display font-black text-charcoal mb-4">Shelfie.</h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                      We're on a mission to kill food waste and help you cook better meals. Built for messy kitchens and busy humans.
                  </p>
                  <div className="flex gap-4">
                       <a href="#" className="text-stone-400 hover:text-tomato transition-colors"><span className="material-symbols-outlined">mail</span></a>
                       <a href="#" className="text-stone-400 hover:text-tomato transition-colors"><span className="material-symbols-outlined">camera_alt</span></a> {/* Instagram */}
                       <a href="#" className="text-stone-400 hover:text-tomato transition-colors"><span className="material-symbols-outlined">alternate_email</span></a> {/* Twitter/X */}
                  </div>
              </div>
              
              <div className="flex gap-16">
                  <div>
                      <h4 className="font-bold text-charcoal mb-4">Product</h4>
                      <ul className="space-y-2 text-stone-500 text-sm">
                          <li><a href="#" className="hover:text-tomato">Download</a></li>
                          <li><a href="#features" className="hover:text-tomato">Features</a></li>
                          <li><a href="#impact" className="hover:text-tomato">Savings Calculator</a></li>
                      </ul>
                  </div>
                   <div>
                      <h4 className="font-bold text-charcoal mb-4">Company</h4>
                      <ul className="space-y-2 text-stone-500 text-sm">
                          <li><a href="#" className="hover:text-tomato">Our Story</a></li>
                          <li><a href="#" className="hover:text-tomato">Privacy Policy</a></li>
                          <li><a href="#" className="hover:text-tomato">Terms of Service</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-medium">
              <div>© 2025 Shelfie Inc. All rights reserved.</div>
              <div className="flex items-center gap-1">
                  Made with <span className="text-tomato">♥</span> and leftover pizza.
              </div>
          </div>
      </div>
    </footer>
  );
}