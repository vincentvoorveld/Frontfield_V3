export default function ClientLogos() {
  const logos = [
    "Klant Logo 1",
    "Klant Logo 2", 
    "Klant Logo 3",
    "Klant Logo 4",
    "Klant Logo 5",
    "Klant Logo 6"
  ];

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          Vertrouwd door ondernemers
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* Render logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-[200px] h-16 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-muted rounded-lg px-6 py-3 text-muted-foreground font-medium">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
