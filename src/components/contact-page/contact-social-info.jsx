import { contactInfoList } from "@/lib/data/contact";

export default function ContactSocialInfo() {
  return (
    <div className="bg-card rounded-xl p-6 mb-5 border border-border shadow-md glassmorph">
      <h2 className="text-lg sm:text-2xl font-bold text-primary mb-6">
        More Ways To Connect
      </h2>
      <ul className="space-y-4">
        {contactInfoList.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground p-3 bg-secondary rounded-md hover:bg-muted/80 transition-colors duration-300"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex flex-col flex-grow min-w-0">
                <h3 className="text-lg font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground spaceGrotesk line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
