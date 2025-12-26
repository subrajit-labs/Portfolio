import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "B.Sc.", label: "Mathematics" },
    { number: "2023", label: "Graduate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-champagne/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="flex gap-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-light text-foreground">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-foreground animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                Hello
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-md animate-fade-up"
                style={{ animationDelay: "0.6s" }}
              >
                — I'm Subrajit Paul, a solution-oriented professional with an entrepreneurial vision
              </p>
            </div>

            {/* Scroll indicator */}
            <div
              className="flex items-center gap-2 text-muted-foreground animate-fade-in pt-8"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="text-sm">Scroll down</span>
              <ArrowDown className="w-4 h-4 animate-float" />
            </div>
          </div>

          {/* Right - Abstract visual */}
          <div
            className="relative animate-fade-in hidden lg:block"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract geometric shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal-light rounded-full opacity-90" />
              <div className="absolute inset-8 bg-gradient-to-tr from-accent/30 to-gold-light/50 rounded-full" />
              <div className="absolute inset-16 bg-background rounded-full flex items-center justify-center">
                <span className="text-6xl font-light text-foreground">SP</span>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/40 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-muted rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Year indicator */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-sm text-muted-foreground tracking-widest -rotate-90 block">2024</span>
      </div>
    </section>
  );
};

export default HeroSection;
