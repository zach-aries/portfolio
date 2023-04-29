import Head from "next/head";
import { classes } from "typestyle";
import { Roboto, Playfair_Display } from "next/font/google";

import { colors } from "@/utils/theme";
import styles from "@/styles/about.styles";
import generalStyles from "@/styles/general.styles";
import Navigation from "@/components/molecules/Navigation";
import AboutMe from "@/components/molecules/About";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const workExperiences = [
  {
    company: "Amazon - Ad Tech",
    title: "Frontend Engineer II",
    dates: {
      start: "2021",
      end: "Present",
    },
    responsibilites: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
    results: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
  },
  {
    company: "CriticalMass - Nissan North America",
    title: "Technical Lead",
    dates: {
      start: "2020",
      end: "2021",
    },
    responsibilites: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
    results: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
  },
  {
    company: "Showpass",
    title: "Software Engineer",
    dates: {
      start: "2019",
      end: "2020",
    },
    responsibilites: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
    results: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
  },
  {
    company: "CriticalMass - Nissan North America",
    title: "Web Developer",
    dates: {
      start: "2018",
      end: "2019",
    },
    responsibilites: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
    results: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc a purus facilisis, luctus ligula ac, viverra orci.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames acturpis egestas.",
      "Integer at massa blandit, ullamcorper risus ac, mattis ligula.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    ],
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
        <div className={generalStyles.row}>
          <div
            className={classes(
              generalStyles.column(67),
              generalStyles.verticalSpacing(40)
            )}
          >
            <h2 className={playfair.className}>Work Experience</h2>
            {workExperiences.map((workExperience) => (
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
                  Results
                </h5>
                <ul className={generalStyles.fontColor(colors.grey.base)}>
                  {workExperience.results.map((result) => (
                    <li key={`${workExperience.company}-${result}`}>
                      {result}
                    </li>
                  ))}
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
                purus facilisis, luctus ligula ac, viverra orci. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer at massa blandit, ullamcorper risus ac,
                mattis ligula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <div>
              <h2 className={playfair.className}>Skills</h2>
              <h3>Technical</h3>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
              <h3>Professional</h3>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
              <h3>Personal</h3>
              <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
