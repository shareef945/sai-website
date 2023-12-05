const MailtoLink = () => {
  const subject = encodeURIComponent("Inquiry - [Customer / Company name]");
  const body = encodeURIComponent(
    `Hello, 
  
  I'm interested in learning more about the services you offer. Here are the services I'm particularly interested in:
  
  1. Web Design & Development
  - Crafting visually stunning and user-friendly websites tailored to your brand's needs.
  
  2. Mobile App Design & Development
  - Creating intuitive and impactful mobile applications for iOS and Android platforms.
  
  3. API Development and Integration
  - Developing scalable and secure APIs to extend the functionality of your digital products.
  
  4. Software Testing and Quality Assurance
  - Ensuring the highest quality software with comprehensive testing services.
  
  5. Robotic Process Automation (RPA)
  - Transforming business processes through automation to increase efficiency and reduce costs.
  
  6. IT Consulting
  - Providing expert IT consulting to optimize your technology strategy.
  
  Please provide me with more information about these services and how we can work together.
  
  Thank you,
  [Your Name]
  [Your Contact Information]`
  );

  return (
    <a href={`mailto:info@saitechnology.co?subject=${subject}&body=${body}`}>
      Contact Us
    </a>
  );
};

export default MailtoLink;
