import ContactBannerSectionComponent from "../components/section/ContactBannerSectionComponent";
import ContactFormSectionComponent from "../components/section/ContactFormSectionComponent";
import NewsLetterComponent from "../components/section/NewsLetterComponent";

const ContactScreen = () => {
  return (
    <div className="w-full pb-8 pt-0">
      {/* Top section - centered on mobile */}
      <div className="w-full">
        <ContactBannerSectionComponent />
      </div>

      {/* Form section */}
      <div className="mx-auto px-8">
        <ContactFormSectionComponent />
      </div>

      {/* Newsletter section */}
      <div>
        <NewsLetterComponent />
      </div>
    </div>
  );
};

export default ContactScreen;
