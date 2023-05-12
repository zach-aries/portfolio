import Head from "next/head";
import { classes } from "typestyle";
import { Roboto, Playfair_Display } from "next/font/google";
import Image from "next/image";

import { colors } from "@/utils/theme";
import styles from "@/styles/about.styles";
import generalStyles from "@/styles/general.styles";
import Navigation from "@/components/molecules/Navigation";
import AboutMe from "@/components/molecules/About";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const workExperiences = [
  {
    company: "Amazon",
    title: "Frontend Engineer II",
    dates: {
      start: "2021",
      end: "Present",
    },
    responsibilites: [
      "Create peer reviewed design documents ensuring scalable & well designed features",
      "Design and implementing key features requested by product",
      "Implement test coverage using Jest and Playwright for unit and E2E testing",
      "Mentoring team members",
    ],
    keyDeliverables: [
      {
        description:
          "Implemented timeline feature to create and control animations",
        details: [
          "Typescript, React, Redux, Redux Saga, DynamoDB, Web Animation API",
          "High focus on render performance, code organization & expandability",
          "Delivered large feature set outlined by product, users and UX",
        ],
      },
      {
        description: "Implemented fronted error logging systems",
        details: [
          "Typescript, React, Redux, Redux Saga, AWS Cloudwatch",
          "Created an error logging system that tracks, reports and alerts errors though AWS architecture",
        ],
      },
      {
        description: "Implemented on-call scripts to manage databases",
        details: [
          "Typescript, DynamoDB",
          "Created several on-call scripts which allowed automatic database creation, duplication and deletion",
          "Included backup, parallelization & backoff algorithms",
          "Required to work in production on data sets in the hundreds of thousands",
        ],
      },
    ],
  },
  {
    company: "Critical Mass - Nissan North America",
    title: "Tech Lead",
    dates: {
      start: "2020",
      end: "2021",
    },
    responsibilites: [
      "Planning of project sprints, architecture, deliverables & development of interactive advertisement web application",
      "Managed client relations through project timelines by providing LOE’s and solution design for projects",
      "Managed several teams of direct reports through project lifetimes",
      "Managed direct reports achieve career goals with support and guidance",
    ],
    keyDeliverables: [
      {
        description: "Implemented Ariya pre-order website",
        details: [
          "React, Node, AWS, Jenkins",
          "Created a vehicle customization platform which allows customers to build their custom Ariya and view it on a 3D turntable with cinematic cameras",
          "Lead to thousands of pre-purchase orders full-filled by dealers across North America",
          "Managed a team of ~10 developers, third party vendors, and key stakeholder requirements in order to meet a tight project deadline",
        ],
      },
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
      "Designed and implemented key features in a very fast paced environment",
      "Responsible for the front end team’s sprint progress",
      "Participated in the recruiting and hiring program",
    ],
    keyDeliverables: [
      {
        description:
          "Helped create, recruit and hire for Showpass' first internship program",
        details: [
          "Filtered resumes, attended job fairs, selected and interviewed candidates to host our first summer internship program",
        ],
      },
      {
        description: "Designed and implemented venue seat selection feature",
        details: [
          "AngularJS / Django / PostgreSQL",
          "Allowed users to view and select seats in venues of up to ~100,000",
          "Helped acquire many valuable clients who previously were unable to host their venue in our platform",
        ],
      },
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
      "Designed and implemented features against tight deadlines",
      "Helped interview for developer positions",
    ],
    keyDeliverables: [
      {
        description:
          "Helped create, recruit and hire for Showpass' first internship program",
        details: [
          "Filtered resumes, attended job fairs, selected and interviewed candidates to host our first summer internship program",
        ],
      },
      {
        description: "NextGen Configurator POC",
        details: [
          "React / Node.js / GraphQL",
          "Part of a PoC discovery team to flesh out the applications requirements, architecture and design decisions",
          "Implemented components, tests and page composition according to requirements",
        ],
      },
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
              <p>
                Software engineer with a major in computer science &
                concentration in software engineering. For 5+ years I have been
                delivering performant, scalable & accessible web applications. I
                am consistently looking to create a high impact on teams &
                produce the best possible product for users. I pride myself on
                my ability to learn quickly, understand the big picture & work
                with key stake holders to deliver results
              </p>
            </div>
            <div>
              <h2 className={playfair.className}>Skills</h2>
              <ul className={styles.iconList}>
                <li>
                  <Image
                    src="tech-icons/js.png"
                    alt="JavaScript"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/typescript.png"
                    alt="TypeScript"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/html5.png"
                    alt="HTML5"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/css3.png"
                    alt="CSS3"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/reactjs.png"
                    alt="React"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/angular.png"
                    alt="Angular"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/aws.png"
                    alt="AWS"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/docker.png"
                    alt="Docker"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/mongodb.png"
                    alt="MongoDB"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/postfresql.png"
                    alt="PostGreSQL"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/graphql.png"
                    alt="GraphQL"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/redis.png"
                    alt="Redis"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/nextjs.png"
                    alt="NextJS"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/gatsby.png"
                    alt="Gatsby"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/jest.png"
                    alt="Jest"
                    width={70}
                    height={70}
                  />
                </li>
                <li>
                  <Image
                    src="tech-icons/storybook.png"
                    alt="StoryBook"
                    width={70}
                    height={70}
                  />
                </li>
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
