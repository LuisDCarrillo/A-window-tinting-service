const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-red-500">Contact Us</h2>
          <p className="text-xl mb-4">Get your Free Estimate today! 👍</p>
          <div className="mb-8">
            <a href="tel:3214021863" className="text-2xl font-bold text-red-400 hover:underline">
              Call or Text: 321-402-1863
            </a>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Follow us on Instagram</h3>
            <a href="https://www.instagram.com/a.window.tinting" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
              @a.window.tinting
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-red-400">Popular Tags</h3>
            <p>#windowtint #windowtinting #florida #service</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact
  
  