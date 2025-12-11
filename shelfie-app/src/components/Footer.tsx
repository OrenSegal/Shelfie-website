export function Footer() {
  return (
    <footer className="bg-cream border-t border-stone-200 py-16">
      <div className="mx-auto flex justify-center px-4 md:px-10">
        <div className="max-w-[1200px] w-full">
          <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2 text-charcoal">
                      <div className="size-6 text-tomato">
                          <span className="material-symbols-outlined">nutrition</span>
                      </div>
                      <h2 className="text-xl font-display font-bold">Shelfie</h2>
                  </div>
                  <p className="text-text-muted text-sm max-w-[280px] leading-relaxed">
                      Your intelligent kitchen co-pilot, turning chaotic inventory into delicious dinners while helping the planet, one meal at a time.
                  </p>
                  <div className="flex gap-4 mt-2">
                      <a className="size-10 rounded-full bg-stone-200 flex items-center justify-center text-charcoal hover:bg-tomato hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">mail</span></a>
                      <a className="size-10 rounded-full bg-stone-200 flex items-center justify-center text-charcoal hover:bg-tomato hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
                      <a className="size-10 rounded-full bg-stone-200 flex items-center justify-center text-charcoal hover:bg-tomato hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                  </div>
              </div>
              <div className="flex flex-wrap gap-12 md:gap-24">
                  <div className="flex flex-col gap-4">
                      <h3 className="text-charcoal font-bold font-display">Product</h3>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Download</a>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Cycle</a>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Recipes</a>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Pricing</a>
                  </div>
                  <div className="flex flex-col gap-4">
                      <h3 className="text-charcoal font-bold font-display">Mission</h3>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Food Waste</a>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">About Us</a>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Sustainability</a>
                  </div>
                  <div className="flex flex-col gap-4">
                      <h3 className="text-charcoal font-bold font-display">Legal</h3>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Privacy</a>
                      <a className="text-text-muted text-sm hover:text-tomato transition-colors" href="#">Terms</a>
                  </div>
              </div>
          </div>
          <div className="mt-16 text-center text-text-muted/60 text-xs">
              © 2024 Shelfie Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
