import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "B.Sc.", label: "Mathematics", icon: "📐" },
    { number: "2023", label: "Graduate", icon: "🎓" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal/5 to-background" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gold/20 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-charcoal/30 via-gold-light/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-champagne/20 to-transparent rounded-full blur-3xl opacity-50" />

      <div className="container max-w-7xl mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/10 via-accent/5 to-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground/80">Available for opportunities</span>
            </div>

            {/* Stats with glassmorphism */}
            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative px-6 py-4 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <span className="text-2xl md:text-3xl font-semibold text-foreground">
                        {stat.number}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Title with gradient */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span className="block text-foreground">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-gold via-gold-light to-accent bg-clip-text text-transparent mt-2">
                    Subrajit Paul
                  </span>
                </h1>
              </div>
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                A <span className="text-foreground font-medium">solution-oriented professional</span> with an entrepreneurial vision, 
                turning ideas into action through smart execution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-charcoal to-charcoal-light text-ivory font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-charcoal/20 hover:scale-105"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 z-10 flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">Get in Touch</span>
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full border-2 border-border text-foreground font-medium hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className="flex items-center gap-3 text-muted-foreground animate-fade-in pt-4"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
                <div className="w-1.5 h-3 rounded-full bg-gold animate-bounce" />
              </div>
              <span className="text-sm font-medium">Scroll to explore</span>
            </div>
          </div>

          {/* Right - Modern Abstract Visual */}
          <div
            className="relative animate-fade-in hidden lg:flex items-center justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative w-[450px] h-[450px]">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold/20 animate-[spin_20s_linear_infinite]" />
              
              {/* Animated gradient ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold/30 via-transparent to-accent/30 p-[2px] animate-[spin_15s_linear_infinite_reverse]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Main circle with glassmorphism */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden shadow-2xl shadow-charcoal/30">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-accent/20" />
                
                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-bold bg-gradient-to-br from-ivory via-champagne to-gold-light bg-clip-text text-transparent">
                    SP
                  </span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light shadow-lg shadow-gold/30 animate-float flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute bottom-12 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: "1s" }}>
                <span className="text-xl">💡</span>
              </div>
              <div className="absolute top-1/2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold-light/50 shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
                <span className="text-lg">🚀</span>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-gold" />
              <div className="absolute -bottom-2 left-1/3 w-2 h-2 rounded-full bg-accent" />
              <div className="absolute top-1/3 -right-2 w-2 h-2 rounded-full bg-gold-light" />
            </div>
          </div>
        </div>
      </div>

      {/* Side decoration */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
        <span className="text-xs text-muted-foreground tracking-widest -rotate-90 whitespace-nowrap">PORTFOLIO 2024</span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>

      {/* Social links decoration */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-muted-foreground/30" />
        <a href="mailto:paulsubrajit2@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
        <a href="https://linkedin.com/in/paulsubrajit" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
        </a>
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
