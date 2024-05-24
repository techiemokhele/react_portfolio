import ContactBannerSectionComponent from "../components/section/ContactBannerSectionComponent";
import ContactFormSectionComponent from "../components/section/ContactFormSectionComponent";

const ContactScreen = () => {
  return (
    <div className="w-full pb-8 pt-0">
      {/* Top section - centered on mobile */}
      <div className="w-full">
        <ContactBannerSectionComponent />
      </div>

      {/* Form section */}
      <div className="mx-auto px-8 mt-14">
        <ContactFormSectionComponent />
      </div>
    </div>
  );
};

export default ContactScreen;
