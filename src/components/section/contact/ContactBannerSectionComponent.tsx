import React from "react";
import PageBanner from "@/components/common/PageBanner";

const ContactBannerSectionComponent: React.FC = () => (
  <PageBanner
    label="Contact Me"
    title={
      <>
        <span className="text-gold">Let's</span> design the world we want to{" "}
        <span className="text-gold">live</span> in,{" "}
        <span className="text-gold">together</span>.
      </>
    }
    description="Whether you're eager to kickstart a potential project with me, delve into specific tasks tailored to your requirements, or simply extend a greeting, everything begins right here. Don't hesitate to contact me, and I'll strive to respond promptly, usually within one business day."
    primaryCta={{
      text: "Chat On Whatsapp",
      href: "https://api.whatsapp.com/send?phone=27648473363",
      external: true,
    }}
    secondaryCta={{
      text: "Make Urgent Call",
      href: "tel:27648473363",
      external: true,
    }}
  />
);

export default ContactBannerSectionComponent;
