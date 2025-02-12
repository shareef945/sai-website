const PrivacyPolicy = () => {
    return (
      <div className="w-[57rem] mx-auto text-white py-16 px-6 md:px-20">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-12">Privacy Policy</h1>
  
        {/* Section */}
        <section className="space-y-12">
          {/* Repeated Content Blocks */}
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold mb-4">Title</h2>
              <p className="text-gray-400 mb-6">
                The rapid evolution of connectivity has brought us to the brink of a new era with
                the advent of 5G technology. Promising ultra-fast speeds, low latency, and enhanced
                reliability, 5G is set to revolutionize the way we live, work, and interact with the
                digital world. At SAI Technology, we are at the forefront of this transformation,
                enabling businesses and communities to harness the full potential of next-generation
                networks.
              </p>
  
              <h3 className="text-xl font-medium mb-2">
                What Makes 5G Different?
              </h3>
              <ul className="list-disc list-inside text-gray-400 mb-6">
                <li><strong>Enhanced Speed:</strong> Download speeds up to 100 times faster than 4G.</li>
                <li><strong>Ultra-Low Latency:</strong> Delays as low as 1 millisecond, ideal for real-time applications.</li>
                <li><strong>Increased Capacity:</strong> Ability to support millions of connected devices per square kilometer.</li>
              </ul>
  
              <h3 className="text-xl font-medium mb-2">
                Industries Transformed by 5G
              </h3>
              <p className="text-gray-400 mb-6">
                The impact of 5G will be felt across numerous sectors, including:
              </p>
  
              <ul className="list-disc list-inside text-gray-400 mb-6">
                <li><strong>Healthcare:</strong> Enabling remote surgeries, real-time monitoring, and AI-assisted diagnostics.</li>
                <li><strong>Manufacturing:</strong> Facilitating smart factories with IoT-enabled equipment and predictive maintenance.</li>
                <li><strong>Entertainment:</strong> Delivering immersive AR/VR experiences and seamless streaming.</li>
                <li><strong>Transportation:</strong> Supporting autonomous vehicles with real-time data exchange.</li>
              </ul>
  
              <h3 className="text-xl font-medium mb-2">The Road Ahead: 6G and Beyond</h3>
              <p className="text-gray-400 mb-6">
                As we embrace 5G, the groundwork is already being laid for 6G and future advancements.
                These will focus on even higher speeds, improved energy efficiency, and integrating AI
                at the core of connectivity. The possibilities are limitless, from holographic
                communications to intelligent edge computing.
              </p>
  
              <h3 className="text-xl font-medium mb-2">
                SAI Technology&#39;s Role in Connectivity
              </h3>
              <p className="text-gray-400 mb-6">
                At SAI Technology, we are developing innovative solutions to make the transition to 5G seamless and effective.
                Our expertise in edge computing, IoT integration, and advanced networking ensures that businesses can unlock
                new opportunities and stay ahead in a competitive landscape.
              </p>
  
              <h3 className="text-xl font-medium mb-2">Conclusion</h3>
              <p className="text-gray-400">
                The future of connectivity is bright and full of promise. As 5G continues to roll out globally,
                it’s not just a technological upgrade—it’s a catalyst for innovation and growth.
                With SAI Technology as your partner, you can navigate this exciting frontier with confidence.
              </p>
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  