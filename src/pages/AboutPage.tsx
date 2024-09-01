const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pb-5">
      <div className="container mx-auto rounded-lg p-8">
        <h1 className="text-5xl font-bold text-primary mb-8 text-center">About WorldUniversity</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-primary mb-4">Vision</h2>
            <p className="text-lg text-textPrimary mb-2">
              Our vision is to create a comprehensive and accessible resource for students and educators to learn about the world's countries.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-primary mb-4">Mission</h2>
            <p className="text-lg text-textPrimary mb-2">
              Our mission is to provide accurate and up-to-date information in an easy-to-use platform that enhances the learning experience.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-semibold text-primary mb-4">Our Team</h2>
          <p className="text-lg text-textPrimary mb-2">
            The WorldUniversity platform is developed by a dedicated team of professionals at PT World University. Led by our CTO, Bu Risma, our team of front-end developers, designers, and content creators work tirelessly to ensure that the platform meets the highest standards of quality and usability.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-semibold text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-textPrimary mb-2">
            For more information about WorldUniversity, please contact us at <a href="mailto:info@worlduniversity.com" className="text-blue-500 underline">info@worlduniversity.com</a> or visit our office at PT World University, Jakarta, Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
