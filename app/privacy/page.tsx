import { GridBackground } from "@/components/GridBackground";

const PrivacyPolicy = () => {
  return (
    <>
    <GridBackground size="sm"/>
      <div className="max-w-[57rem] z-20 relative w-auto mx-auto text-white py-8 md:py-16 px-4 md:px-3">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          Privacy Policy
        </h1>

        <section className="space-y-8 md:space-y-12">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              1. Introduction
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              SAI Technology is committed to ensuring the security and privacy
              of client data. While we do not directly store or manage data, we
              implement best practices aligned with GDPR, the Ghana Data
              Protection Act, and soon SOC 2 to ensure our solutions meet
              regulatory and security requirements.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              2. Scope
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              This policy applies to all software solutions, services, and
              internal operations at SAI Technology. It covers data handling,
              security measures, and compliance responsibilities.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              3. Data Protection Principles
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              SAI Technology aligns with the following principles:
            </p>
            <ul className="list-disc list-inside text-[#898989] mb-4 md:mb-6 space-y-2">
              <li>
                Lawfulness, fairness, and transparency – We ensure clients are
                informed about data usage in their solutions.
              </li>
              <li>Data minimization – Only necessary data is processed.</li>
              <li>
                Security and confidentiality – We enforce strict security
                controls to prevent unauthorized access.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              4. Access Control & Authentication
            </h2>
            <ul className="list-disc list-inside text-[#898989] mb-4 md:mb-6 space-y-2">
              <li>
                All development environments require role-based access control
                (RBAC).
              </li>
              <li>
                Strong authentication methods such as multi-factor
                authentication (MFA) are enforced where applicable.
              </li>
              <li>Access is restricted to authorized personnel only.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              5. Data Encryption & Protection
            </h2>
            <ul className="list-disc list-inside text-[#898989] mb-4 md:mb-6 space-y-2">
              <li>Data in transit is secured using TLS 1.2 or higher.</li>
              <li>Sensitive data at rest must be AES-256 encrypted.</li>
              <li>
                Secure coding practices (aligned with OWASP Top 10) are
                followed.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              6. Logging & Monitoring
            </h2>
            <ul className="list-disc list-inside text-[#898989] mb-4 md:mb-6 space-y-2">
              <li>
                Security events are logged and monitored for potential breaches.
              </li>
              <li>Audit logs are maintained and reviewed periodically.</li>
              <li>Automated threat detection tools are implemented.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              7. Software Development Security
            </h2>
            <ul className="list-disc list-inside text-[#898989] mb-4 md:mb-6 space-y-2">
              <li>Secure Software Development Lifecycle (SDLC) is enforced.</li>
              <li>
                Regular code security reviews and automated vulnerability
                scanning are performed.
              </li>
              <li>Dependencies are monitored for security vulnerabilities.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              8. Data Processing & Retention
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              Data collected within applications we build is handled in
              accordance with client requirements and applicable laws. We
              provide guidance on data retention policies to clients. Secure
              deletion methods are implemented when necessary.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              9. Incident Response & Reporting
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              Security incidents are investigated and reported within 72 hours,
              following GDPR and Ghana Data Protection Act guidelines. A
              documented Incident Response Plan is in place.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              10. Compliance & Internal Audits
            </h2>
            <ul className="list-disc list-inside text-[#898989] mb-4 md:mb-6 space-y-2">
              <li>Internal security audits are conducted bi-annually.</li>
              <li>Employees receive ongoing security training.</li>
              <li>
                Third-party service providers are assessed for compliance.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              11. Vendor & Third-Party Risk Management
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              All third-party services used in solutions are evaluated for
              security and compliance. Data-sharing agreements are established
              where applicable.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              12. Conclusion
            </h2>
            <p className="text-[#898989] mb-4 md:mb-6">
              SAI Technology is dedicated to maintaining the highest security
              standards to protect client data and uphold compliance with
              international and local regulations. This policy is subject to
              periodic updates based on evolving security threats and regulatory
              changes.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
