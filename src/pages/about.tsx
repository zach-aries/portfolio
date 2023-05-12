import Head from "next/head";
import { classes } from "typestyle";
import { Roboto, Playfair_Display } from "next/font/google";

import { colors } from "@/utils/theme";
import aboutContent from "@/content/about";
import styles from "@/styles/about.styles";
import generalStyles from "@/styles/general.styles";
import Navigation from "@/components/molecules/Navigation";
import AboutMe from "@/components/molecules/About";
import IconList from "@/components/atoms/IconList";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>About - Zachary Aries</title>
        <meta
          name="description"
          content="About Zachary Aries - Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio/favicon.ico" />
      </Head>
      <Navigation />
      <main className={classes(generalStyles.main, roboto.className)}>
        <div className={classes(generalStyles.row, styles.headerSeperator)}>
          <div className={generalStyles.column(67)}>
            <AboutMe title="Zachary Aries" subTitle="Software Engineer" />
          </div>
          <div
            className={classes(
              styles.infoPanel,
              styles.profile,
              generalStyles.column(33)
            )}
          >
            <div>
              <h2 className={playfair.className}>Contact</h2>
              <p>
                <a href="mailto:zach.j.aries@gmail.com">
                  zach.j.aries@gmail.com
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/zacharies">
                  linkedin.com/in/zacharies
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={classes(generalStyles.row, styles.content)}>
          <div
            className={classes(
              generalStyles.column(67),
              generalStyles.verticalSpacing(40)
            )}
          >
            <h2 className={playfair.className}>Work Experience</h2>
            {aboutContent.workExperiences.map((workExperience) => (
              <div
                key={workExperience.company}
                className={styles.workExperience}
              >
                <h3 className={classes(playfair.className, styles.company)}>
                  {workExperience.company}
                </h3>
                <div className={styles.jobInfo}>
                  <p className={styles.jobTitle}>{workExperience.title}</p>
                  <p className={styles.dates}>
                    {workExperience.dates.start} &rarr;{" "}
                    {workExperience.dates.end}
                  </p>
                </div>

                <h5 className={generalStyles.fontColor(colors.grey.base)}>
                  Responsibilites
                </h5>
                <ul className={generalStyles.fontColor(colors.grey.base)}>
                  {workExperience.responsibilites.map((responsibility) => (
                    <li key={`${workExperience.company}-${responsibility}`}>
                      {responsibility}
                    </li>
                  ))}
                </ul>

                <h5 className={generalStyles.fontColor(colors.grey.base)}>
                  Key Deliverables
                </h5>
                <ul className={generalStyles.fontColor(colors.grey.base)}>
                  {workExperience.keyDeliverables.map(
                    ({ description, details }) => (
                      <li key={`${workExperience.company}-${description}`}>
                        {description}
                        <ul
                          className={generalStyles.fontColor(colors.grey.base)}
                        >
                          {details.map((detail) => (
                            <li key={`${workExperience.company}-${detail}`}>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div
            className={classes(
              styles.infoPanel,
              generalStyles.column(33),
              generalStyles.verticalSpacing(40)
            )}
          >
            <div className={generalStyles.marginBottom(40)}>
              <h2 className={playfair.className}>Profile</h2>
              <p>{aboutContent.profile}</p>
            </div>
            <div>
              <h2 className={playfair.className}>Skills</h2>
              <IconList icons={aboutContent.skillIcons} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
