
import Footer from '../components/Footer';

const ourTeams = [
  { name: 'Alex Johnson', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sarah Williams', role: 'Head of Operations', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Michael Chen', role: 'Tech Lead', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Emily Davis', role: 'Customer Support', img: 'https://randomuser.me/api/portraits/women/68.jpg' }
]

const chooseUs = [
  { icon: '🚚', title: 'Fast Shipping', desc: 'Get your orders delivered within 2-3 business days' },
  { icon: '💯', title: 'Quality Guarantee', desc: 'We stand behind every product we sell' },
  { icon: '🔄', title: 'Easy Returns', desc: '30-day return policy, no questions asked' }
]

const AboutPage = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Arizon</h1>
          
          <div className="mb-12">
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Arizon began as a small startup with a big vision: to revolutionize online shopping by 
                offering high-quality products at affordable prices with exceptional customer service.
              </p>
              <p className="text-gray-600">
                What started as a passion project in a garage has grown into a trusted e-commerce destination serving 
                thousands of satisfied customers worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To provide customers with a seamless shopping experience, offering carefully curated products 
                  that combine quality, style, and value.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Values</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Customer satisfaction above all</li>
                  <li>Transparency in all dealings</li>
                  <li>Commitment to quality</li>
                  <li>Continuous innovation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ourTeams.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                  <img src={member.img} alt={member.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                    <p className="text-indigo-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {chooseUs.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default AboutPage;