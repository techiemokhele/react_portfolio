import React from "react";
import { MapPin, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useInView from "@/components/utils/useInView";

interface EducationComponentProps {
  schoolName: string;
  schoolLogo: string;
  qualification: string;
  course: string;
  location: string;
  startDate: string;
  endDate: string;
  duties: string;
  skills: string[];
  index: number;
}

const EducationComponent: React.FC<EducationComponentProps> = ({
  schoolName,
  schoolLogo,
  qualification,
  course,
  location,
  startDate,
  endDate,
  duties,
  skills,
  index,
}) => {
  const isOddIndex = index % 2 !== 0;
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`my-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Card className="overflow-hidden border-l-4 border-l-gold bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Text */}
          <div
            className={`p-6 lg:p-8 flex flex-col justify-center text-white ${
              isOddIndex ? "md:order-2" : ""
            }`}
          >
            <h2 className="lg:text-3xl text-2xl font-bold text-gold mb-2">
              {qualification} <span className="text-white">in</span> {course}
            </h2>
            <h5 className="lg:text-xl text-md font-semibold mb-3">
              {schoolName}
            </h5>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold" />
                {location}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4 text-gold" />
                {startDate} - {endDate}
              </span>
            </div>
            <p className="text-sm font-light text-gray-300 mb-2">{duties}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, idx) => (
                <Badge key={idx} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`p-4 flex items-center justify-center ${
              isOddIndex ? "md:order-1" : ""
            }`}
          >
            <img
              src={schoolLogo}
              alt={schoolName}
              className="w-full h-[280px] lg:h-[48vh] object-cover rounded-lg"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EducationComponent;
