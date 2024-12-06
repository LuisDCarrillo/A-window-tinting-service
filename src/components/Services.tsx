const Services = () => {
    return (
      <section id="services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Commercial Window Tinting</h3>
              <p>Enhance privacy and reduce energy costs for your business.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Residential Window Tinting</h3>
              <p>Improve comfort and protect your home from harmful UV rays.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Car Window Tinting</h3>
              <p>Increase privacy and reduce heat in your vehicle.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Services
  
  