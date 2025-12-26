import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "paulsubrajit2@gmail.com",
      href: "mailto:paulsubrajit2@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/paulsubrajit",
      href: "https://linkedin.com/in/paulsubrajit",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mt-4">
            Let's Connect
          </h2>
          <p className="text-lg text-primary-foreground/70 mt-6 max-w-xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations. 
            Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-6 rounded-lg border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/5 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <link.icon className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/60">{link.label}</p>
                  <p className="text-primary-foreground font-medium">{link.value}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Subrajit Paul. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Built with passion & precision
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
