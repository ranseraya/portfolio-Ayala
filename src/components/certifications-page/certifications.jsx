import CertificationsCard from "./certification-card";
import { allCertificationsData } from "../../lib/data/certifications";

export default function CertificationsSection() {
  const categorizedCerts = {
    Frontend: [],
    Backend: [],
    Cybersecurity: [],
    Others: [],
  };

  allCertificationsData.forEach((cert) => {
    if (cert.category && categorizedCerts[cert.category]) {
      categorizedCerts[cert.category].push(cert);
    } else {
      categorizedCerts["Others"].push(cert);
    }
  });

  const categoriesOrder = ["Frontend", "Backend", "Cybersecurity", "Others"];

  return (
    <div className="w-full flex flex-col items-center py-5">
      {categoriesOrder.map((category) => {
        const certs = categorizedCerts[category];
        if (certs.length === 0) return null;

        return (
          <section key={category} className="w-full mb-10">
            <h2 className="text-xl sm:text-3xl font-bold mb-6 text-primary text-center">
              {category} Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {certs.map((cert) => (
                <CertificationsCard key={cert.id} cert={cert} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
