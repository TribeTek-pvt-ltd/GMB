const ContactMap = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed", special: true }
  ];

  return (
    <section className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="premium-card p-10 glassmorphism border-primary/10">
              <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
              <div className="space-y-6">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                    <span className="font-bold text-lg">{item.day}</span>
                    <span className={`text-lg font-medium ${item.special ? 'text-red-500' : 'text-slate-300'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
              <h3 className="font-bold text-xl mb-4 text-primary">Need an appointment?</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our design experts are available for in-showroom consultations and home visits even outside regular hours by appointment.
              </p>
              <button className="text-primary font-bold hover:underline flex items-center gap-2">
                Learn more about our availability
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl premium-card order-1 lg:order-2">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 bg-slate-900/40 flex flex-col items-center justify-center text-center p-12">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visit Our Showroom</h3>
              <p className="text-slate-400 max-w-sm">
                Interactive map integration would render here in the production version.
              </p>
              <div className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20">
                Open in Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
