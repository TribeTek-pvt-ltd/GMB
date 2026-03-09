import Image from 'next/image';

const categories = [
  {
    title: "Curtains",
    description: "Elegant drapery in a variety of fabrics and styles.",
    image: "/images/curtain1.png",
    link: "/categories/curtains"
  },
  {
    title: "Blinds",
    description: "Modern and functional window coverings for any room.",
    image: "/images/curtain2.png",
    link: "/categories/blinds"
  },
  {
    title: "Sheers",
    description: "Lightweight fabrics that offer privacy and soft light.",
    image: "/images/curtain3.png",
    link: "/categories/sheers"
  },
  {
    title: "Motorized Blinds",
    description: "Smart, automated solutions for effortless light control.",
    image: "/images/curtain1.png",
    link: "/categories/motorized"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-24 bg-transparent" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="gradient-text">Product Categories</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Choose from our wide range of premium window treatments tailored to your style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6 premium-card">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{category.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
