import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#F9F7F2] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="font-space-mono text-sm text-[#D4755B] uppercase tracking-widest mb-4">Testimonials</div>
            <h2 className="font-fraunces text-5xl text-[#111827]">What Our Clients Say</h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-[#FCD34D] text-xl">star</span>
              ))}
            </div>
            <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-6">
              "REChain's AI matched us with our dream home in just 2 weeks. The process was seamless and personalized."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
              <div>
                <div className="font-syne font-bold text-sm text-[#111827]">Sarah Johnson</div>
                <div className="font-manrope text-xs text-[#6b7280]">Los Angeles, CA</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-[#FCD34D] text-xl">star</span>
              ))}
            </div>
            <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-6">
              "The neighborhood insights were invaluable. We knew exactly what we were getting before even visiting."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
              <div>
                <div className="font-syne font-bold text-sm text-[#111827]">Michael Chen</div>
                <div className="font-manrope text-xs text-[#6b7280]">San Francisco, CA</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-icons text-[#FCD34D] text-xl">star</span>
              ))}
            </div>
            <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-6">
              "Best real estate experience ever. The AI recommendations were spot-on and saved us months of searching."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#E5E7EB] rounded-full" />
              <div>
                <div className="font-syne font-bold text-sm text-[#111827]">Emily Rodriguez</div>
                <div className="font-manrope text-xs text-[#6b7280]">Austin, TX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
