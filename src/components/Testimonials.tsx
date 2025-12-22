'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I used to throw away so much food. Now I actually use everything before it expires. Game changer!",
    author: "Sarah M.",
    role: "Mom of 3",
    rating: 5,
    avatar: "/avatar-1.webp"
  },
  {
    id: 2,
    quote: "The voice commands are incredible. I just say what I bought and it's all tracked instantly.",
    author: "James K.",
    role: "Home Chef",
    rating: 5,
    avatar: "/avatar-2.webp"
  },
  {
    id: 3,
    quote: "Finally, an app that actually understands what's in my chaotic fridge. The AI is surprisingly accurate.",
    author: "Emily R.",
    role: "Foodie",
    rating: 5,
    avatar: "/avatar-3.webp"
  },
  {
    id: 4,
    quote: "We've saved over $200 a month on groceries just by not letting things go bad. Worth every penny.",
    author: "Michael T.",
    role: "Budget Dad",
    rating: 5,
    avatar: "/avatar-1.webp"
  },
  {
    id: 5,
    quote: "The recipe suggestions based on what I have are always on point. It's like having a personal chef.",
    author: "Lisa P.",
    role: "Working Professional",
    rating: 5,
    avatar: "/avatar-2.webp"
  },
  {
    id: 6,
    quote: "I never forget what's in my freezer anymore. The expiry alerts have saved so many meals!",
    author: "David W.",
    role: "College Student",
    rating: 5,
    avatar: "/avatar-3.webp"
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-sm ${
            i < rating ? 'text-yellow-400' : 'text-stone-300'
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-6 shadow-soft border border-stone-100">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-text-main leading-relaxed text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-stone-200"
          style={{ backgroundImage: `url('${testimonial.avatar}')`, backgroundSize: 'cover' }}
        />
        <div>
          <p className="font-bold text-charcoal text-sm">{testimonial.author}</p>
          <p className="text-text-muted text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-cream py-20 md:py-28 overflow-hidden">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex flex-col max-w-[1200px] w-full px-4 md:px-10 mb-12">
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-tomato font-bold tracking-widest uppercase text-sm mb-2 block"
            >
              Loved by Home Cooks
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-charcoal text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
            >
              50,000+ kitchens transformed
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-lg max-w-2xl mx-auto"
            >
              Join the community of smart home cooks who've taken control of their kitchens.
            </motion.p>
          </motion.div>
        </div>

        {/* First row - scrolling left */}
        <div className="relative w-full mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-display text-charcoal">4.9</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              <StarRating rating={5} />
            </div>
            <p className="text-text-muted text-sm mt-1">App Store Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-display text-charcoal">50k+</div>
            <p className="text-text-muted text-sm mt-2">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-display text-charcoal">$2.3M</div>
            <p className="text-text-muted text-sm mt-2">Food Saved</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
