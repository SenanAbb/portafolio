import { useEffect } from "react";
import { Timeline } from "./ui/timeline";
import { t } from "i18next";
import ExperienceCard from "./ExperienceCard";

function WorkExperience() {
  const data = [
    {
      title: t("home.experience_1_title"),
      content: (
        <ExperienceCard>
          <h2 className="text-blue-light">{t("home.experience_1_date")}</h2>
          <ul className="list-disc marker:text-gray-200">
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_1")}
              </h3>
            </li>
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_1")}
              </h3>
            </li>
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_2")}
              </h3>
            </li>
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_3")}
              </h3>
            </li>
          </ul>
        </ExperienceCard>
      ),
    },
    {
      title: t("home.experience_1_title"),
      content: (
        <ExperienceCard>
          <h2 className="text-blue-light">{t("home.experience_1_date")}</h2>
          <ul className="list-disc marker:text-gray-200">
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_1")}
              </h3>
            </li>
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_2")}
              </h3>
            </li>
            <li>
              <h3 className="text-gray-200">
                {t("home.experience_1_description_list_3")}
              </h3>
            </li>
          </ul>
        </ExperienceCard>
      ),
    },
  ];

  return (
    <section className="mt-40">
      <h1>Work Experience</h1>
      <Timeline data={data} />
    </section>
  );
}

export default WorkExperience;
