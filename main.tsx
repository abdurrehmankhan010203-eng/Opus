/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Zap, 
  Shield, 
  Globe, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Video,
  Scissors,
  Sparkles,
  Layout,
  ChevronRight,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Twitch
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'mx-0' : 'mx-4'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tighter">OPUS<span className="text-brand-green">.</span>PRO</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Resources'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-brand-green transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-brand-green hover:bg-brand-green-hover text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
              Sign In
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-2xl p-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {['Features', 'Pricing', 'Resources'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-white/70 hover:text-brand-green transition-colors">
                  {item}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <button className="bg-brand-green text-black px-5 py-3 rounded-xl text-lg font-bold">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-green/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-bold tracking-widest text-brand-green uppercase mb-8">
            <Sparkles className="w-3 h-3" /> AI-Powered Video Transformation
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
            The World’s #1 <span className="text-brand-green">AI Video</span> Repurposing Tool.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Turn your long videos into viral shorts in one click.
          </p>
          
          <div className="max-w-3xl mx-auto mb-6">
            <div className="glass p-2 rounded-full border border-white/10 flex items-center gap-2 focus-within:border-brand-green/50 transition-all shadow-2xl">
              <input 
                type="text" 
                placeholder="Paste your YouTube link here..." 
                className="flex-grow bg-transparent border-none outline-none px-6 py-2 text-white placeholder:text-white/30 font-medium"
              />
              <button className="hidden sm:flex bg-brand-green hover:bg-brand-green-hover text-black px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,65,0.4)] whitespace-nowrap">
                Get Free Clips
              </button>
            </div>
            <button className="sm:hidden w-full mt-4 bg-brand-green hover:bg-brand-green-hover text-black px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,255,65,0.4)]">
              Get Free Clips
            </button>
          </div>
          <p className="text-sm text-white/30 font-medium mb-12">No credit card required</p>
        </motion.div>

        {/* Hero Image/Video Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-[2rem] p-4 border border-white/10 shadow-2xl overflow-hidden group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900">
              <img 
                src="https://picsum.photos/seed/opus/1200/800" 
                alt="Product Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center cursor-pointer transform transition-transform hover:scale-110 shadow-2xl">
                  <Play className="w-8 h-8 text-black fill-current ml-1" />
                </div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="glass-dark p-4 rounded-2xl border border-white/10 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">AI Analyzing</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-brand-green" 
                    />
                  </div>
                </div>
                <div className="glass-dark p-3 rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border border-black bg-zinc-800 flex items-center justify-center text-[8px] font-bold">AI</div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">12 Clips Found</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const logos = [
    { icon: <Youtube className="w-6 h-6" />, name: "YouTube", color: "hover:text-[#FF0000]" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: <Twitch className="w-6 h-6" />, name: "Twitch", color: "hover:text-[#9146FF]" },
    { icon: <Github className="w-6 h-6" />, name: "GitHub", color: "hover:text-white" },
    { icon: <Video className="w-6 h-6" />, name: "TikTok", color: "hover:text-[#00f2ea]" }
  ];

  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-10">Trusted by 500,000+ creators</p>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 text-white/30 grayscale hover:grayscale-0 transition-all duration-300 cursor-default ${logo.color}`}
              >
                {logo.icon}
                <span className="text-lg font-bold tracking-tighter">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-brand-green" />,
      title: "AI Virality Score™",
      description: "Our AI predicts the viral potential of each clip based on millions of data points from social platforms."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-green" />,
      title: "AI Curation",
      description: "Automatically identifies the most engaging hooks and highlights from your long-form content."
    },
    {
      icon: <Video className="w-6 h-6 text-brand-green" />,
      title: "Active Speaker Detection",
      description: "Smart face-tracking ensures the speaker is always centered and in focus for vertical viewing."
    },
    {
      icon: <Scissors className="w-6 h-6 text-brand-green" />,
      title: "AI B-Roll",
      description: "Enhance your clips with contextually relevant B-roll footage generated by our advanced AI."
    },
    {
      icon: <Layout className="w-6 h-6 text-brand-green" />,
      title: "Dynamic Layouts",
      description: "Switch between split-screen, full-frame, and custom layouts optimized for every platform."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-green" />,
      title: "Brand Consistency",
      description: "Apply your brand's fonts, colors, and watermarks automatically to every generated clip."
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Everything you need to <span className="text-brand-green">go viral</span>.</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Powerful AI tools designed for creators who want to dominate the feed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#111111] p-10 rounded-3xl border border-white/5 hover:border-brand-green/50 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,255,65,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green transition-colors">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed line-clamp-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload",
      description: "Paste your video link or upload your file directly to our secure cloud."
    },
    {
      number: "02",
      title: "AI Magic",
      description: "Our AI analyzes, crops, and captions the best parts of your video automatically."
    },
    {
      number: "03",
      title: "Go Viral",
      description: "Download your high-quality clips and post them to TikTok, Shorts, and Reels."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">How it <span className="text-brand-green">Works</span>.</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Three simple steps to transform your content strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group p-8 glass rounded-3xl border border-white/5">
              <span className="absolute -top-10 -left-4 text-9xl font-black text-white/[0.03] select-none group-hover:text-brand-green/[0.05] transition-colors">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-brand-green text-black flex items-center justify-center text-sm font-black">{index + 1}</span>
                  {step.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-brand-green hover:bg-brand-green-hover text-black px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,65,0.4)]">
            Try it Now
          </button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Simple, <span className="text-brand-green">transparent</span> pricing.</h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-white/40'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-7 bg-white/10 rounded-full p-1 relative transition-colors hover:bg-white/20"
            >
              <motion.div 
                animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                className="w-5 h-5 bg-brand-green rounded-full shadow-lg"
              />
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-white' : 'text-white/40'}`}>Yearly <span className="text-brand-green text-[10px] ml-1">SAVE 20%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 flex flex-col hover:border-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-white/40 text-sm mb-8">Perfect for getting started.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold">$0</span>
              <span className="text-white/40 font-medium">/mo</span>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {[
                '30 video credits',
                '720p export quality',
                'Standard AI processing',
                'Watermark included',
                'Community support'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-black uppercase tracking-widest text-xs">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border-2 border-brand-green relative flex flex-col transform md:scale-110 z-10 shadow-[0_0_50px_rgba(0,255,65,0.15)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-green text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl">Most Popular</div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-white/40 text-sm mb-8">For serious content creators.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold">{billingCycle === 'monthly' ? '$19' : '$15'}</span>
              <span className="text-white/40 font-medium">/mo</span>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {[
                'Unlimited video credits',
                '1080p HD export',
                'Priority AI processing',
                'No watermark',
                'Premium AI captions',
                'Brand kits & custom fonts'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl bg-brand-green text-black font-black uppercase tracking-widest text-xs hover:bg-brand-green-hover transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]">Upgrade to Pro</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#111111] p-10 rounded-[2.5rem] border border-white/5 flex flex-col hover:border-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-white/40 text-sm mb-8">For teams and agencies.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold">Custom</span>
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {[
                'Everything in Pro',
                '4K export quality',
                'Team collaboration',
                'API access',
                'Dedicated account manager',
                'Custom AI training'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-black uppercase tracking-widest text-xs">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-black fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tighter">OPUS<span className="text-brand-green">.</span>PRO</span>
            </div>
            <p className="text-white/40 max-w-xs mb-8">
              The world's most advanced AI video clipping tool. Turn long videos into viral shorts in seconds.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Discord', 'YouTube'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-green cursor-pointer transition-colors">
                  <span className="sr-only">{social}</span>
                  <Globe className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-green transition-colors">AI Clipping</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">AI Captions</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Auto Reframe</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-white/20 font-bold uppercase tracking-widest">
          <p>© 2026 OPUS PRO AI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span>STATUS: ALL SYSTEMS OPERATIONAL</span>
            <span>VERSION: 4.2.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative glass rounded-[3rem] p-12 md:p-24 overflow-hidden text-center border border-white/10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-green/10 to-transparent -z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight max-w-3xl mx-auto">
                  Ready to scale your <span className="text-brand-green">content</span>?
                </h2>
                <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
                  Join 500,000+ creators and businesses using Opus Pro to dominate social media.
                </p>
                <button className="bg-brand-green hover:bg-brand-green-hover text-black px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(0,255,65,0.4)]">
                  Get Started for Free <ArrowRight className="w-6 h-6" />
                </button>
                <p className="mt-6 text-sm text-white/30 font-medium">No credit card required • 7-day free trial of Pro</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
