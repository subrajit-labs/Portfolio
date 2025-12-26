const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Section label */}
          <div>
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 leading-tight">
              Turning Ideas
              <br />
              <span className="text-muted-foreground">Into Action</span>
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Solution-Oriented Professional with an Entrepreneurial Vision. I'm passionate about 
              driving growth through smart execution and transforming innovative ideas into tangible results.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in Mathematics and Statistics, I bring analytical thinking 
              and creative problem-solving to everything I do. Currently focused on building personal 
              and technical projects that push the boundaries of what's possible.
            </p>

            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Focus</h4>
                  <p className="text-muted-foreground">Entrepreneurship & Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
