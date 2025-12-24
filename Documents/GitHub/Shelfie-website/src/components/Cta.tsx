import { AppStoreBadge } from '@/components/AppStoreBadge';
import { GooglePlayBadge } from '@/components/GooglePlayBadge';

export function Cta() {
  return (
    <div className="bg-cream py-24 md:py-32 relative overflow-hidden">
      {/* Warm background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tomato/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stem/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-4 md:px-8 relative z-10 text-center">
        <div className="mb-8">
          <span className="font-hand text-3xl text-tomato rotate-[-2deg] inline-block mb-4">One last thing</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-charcoal mb-6 leading-tight">
            Your kitchen is ready. <br />
            <span className="text-text-muted/60">Are you?</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of people who stopped wasting food (and money) and started actually enjoying their kitchens again.
          </p>
        </div>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-text-muted">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-fresh" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free to start
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-fresh" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card needed
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-fresh" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
        </div>

        {/* Social proof */}
        <div className="mt-12 pt-12 border-t border-stone-200">
          <p className="text-sm text-text-tertiary italic">
            "Finally, an app that doesn't make me feel bad about my messy kitchen. It just helps me use what I have." <br />
            <span className="font-bold text-text-muted not-italic">— Sarah, mom of 3</span>
          </p>
        </div>
      </div>
    </div>
  );
}
