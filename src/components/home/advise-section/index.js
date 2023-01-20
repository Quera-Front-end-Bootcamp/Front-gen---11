import collaboration from "../../../images/collaboration.jpg";
import student from "../../../images/student.jpg";
import consultation from "../../../images/consultation.jpg";

import Advise from "./Advise.js";
import Button from "../../UI/Button";

const AdviseSection = () => {
  return (
    <div className="ad">
      <Advise
        title="مشاوره آنلاین"
        description="مشاوران ما برای حل مشکلات شما آماده‌اند..."
        src={consultation}
        alt="consultation"
      >
        <Button color="gray" text="مشاوره" />
      </Advise>
      <Advise
        title="ارائه مدرک معتبر"
        description="بهترین راه برای ساختن رزومه حرفه‌ای..."
        src={student}
        alt="consultation"
      />
      <Advise
        title="همکاری در آموزش"
        description="به اساتید آموزشی ما در بامبو بپیوندید..."
        src={collaboration}
        alt="consultation"
      />
    </div>
  );
};

export default AdviseSection;
