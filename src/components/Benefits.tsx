const Benefits = () => {
    return (
      <section id="benefits" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Benefits of Window Tinting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-red-400">Heat Reduction</h3>
              <p>Stops up to 84% of heat</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-red-400">Privacy</h3>
              <p>100% privacy enhancement</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-red-400">UV Protection</h3>
              <p>Blocks 99.9% of harmful UV rays</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-red-400">Energy Savings</h3>
              <p>Reduces electricity costs by 30%</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Benefits
  
  