import React from "react";
import ContactBannerSectionComponent from "@/components/section/contact/ContactBannerSectionComponent";
import ContactFormSectionComponent from "@/components/section/contact/ContactFormSectionComponent";

const ContactScreen: React.FC = () => {
  return (
    <div className="w-full pb-8 pt-0">
      <div className="w-full">
        <ContactBannerSectionComponent />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <ContactFormSectionComponent />
      </div>
    </div>
  );
};

export default ContactScreen;
