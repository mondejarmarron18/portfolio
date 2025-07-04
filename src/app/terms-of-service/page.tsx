const TermsOfServicePage = () => {
  return (
    <div className="overflow-auto px-2 py-6 md:px-4 md:py-12">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>

      <div className="rounded-xl">
        <p className="mb-4 text-sm">
          <strong>Effective Date:</strong> January&nbsp;1,&nbsp;2025
        </p>
        <p className="mb-4 text-sm">
          <strong>Company Name:</strong> iForgetech
        </p>
        <p className="mb-8 text-sm">
          <strong>Website:</strong>{" "}
          <a href="https://iforgetech.com" className="text-blue-600 underline">
            https://iforgetech.com
          </a>
        </p>

        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using any digital products or services provided by
              iForgetech (“we”, “our”, “us”), including but not limited to
              software, APIs, automation tools, and AI integrations
              (“Services”), you (“you”, “Client”, “User”) agree to be bound by
              these Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">2. Services Provided</h2>
            <p>
              iForgetech delivers digital products including custom software, AI
              automations, API integrations, and SaaS solutions. All
              deliverables are digital and provided via secure methods.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              3. Client Responsibilities
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Provide accurate and current information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain security of your credentials</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">4. Payment Terms</h2>
            <p>
              Payment details are outlined per agreement. Subscription services
              automatically renew unless canceled. We may suspend services upon
              non‑payment. No refunds on delivered digital goods unless required
              by law.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              5. Intellectual Property
            </h2>
            <p>
              iForgetech retains all intellectual property rights until full
              payment is received. Upon payment, you receive a non‑transferable
              license for intended use. Redistribution without written consent
              is prohibited.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">6. Confidentiality</h2>
            <p>
              Both parties shall protect confidential and proprietary
              information shared during the engagement.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              7. Limitation of Liability
            </h2>
            <p>
              iForgetech is not liable for indirect, incidental, or
              consequential damages. Our total liability shall not exceed the
              amount paid for the Service in question.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">8. Termination</h2>
            <p>
              We may terminate services immediately if you breach these terms.
              All licenses are revoked upon termination and outstanding fees
              become payable immediately.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">9. Updates to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of our
              Services after updates constitutes acceptance of the revised
              terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Republic of the
              Philippines. Any disputes shall be resolved in the Philippine
              courts.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
