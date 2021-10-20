import React from "react";
import styles from "../CSS/Page1.module.css";
import Footer from "../Pages/Footer";
const Page = () => {
  return (
    <>
    <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>PowerApps</h1>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.textcontainer}>
        <div className={styles.textwrapcontainer}>
        <div className={styles.paragraphone}>
          <p>
            PowerApps is a “citizen application development
            platform” – allowing anyone to build web and mobile applications
            without writing code. The natural connection between Power BI and
            PowerApps makes it effortless to put insights in the hands of
            maintenance workers, teachers, miners and others on the frontline,
            in tailored and often task-specific applications that supercharge
            their productivity and make their work perhaps a little less
            tedious.
          </p>
        </div>
        <div className={styles.paragraphtwo}>
          <p>
            Like Power BI, PowerApps connects to hundreds of business systems
            and databases, making it easy to connect workers with the existing
            processes and data that makes the business tick. And all the data
            captured in PowerApps can make its way right back to those very
            systems for further analysis in. Microsoft Power Apps is a suite of
            apps, services, connectors, and data platform that provides a rapid
            application development environment to build custom apps for unique
            business needs.
          </p>
        </div>
        <div className={styles.paragraphthree}>
          <p>
            Using Power Apps, you can quickly build custom business apps that
            connect to your business data stored anywhere—from the underlying
            data platform, or Common Data Service, to nearly any online or
            on-premises data source, like Dynamics 365, SharePoint, Excel,
            Office, and even data sources not under the Microsoft umbrella. A
            component of the Microsoft Power Platform, which also includes Power
            BI, Power Virtual Agents, and Power Automate (formerly known as
            Microsoft Flow), Power Apps is what Microsoft refers to as a
            “citizen application development platform” because it allows anyone,
            regardless of programming experience, to build web and mobile
            applications without writing code.
          </p>
        </div>
        </div>
      </div>

      <div className={styles.middlecontainer}>
        <div className={styles.leftcontainer}>
          <div className={styles.leftcontainertext}>
            <h3>Apps built with Power Apps</h3>
            <p>
              Apps built with Power Apps provide deep business logic and
              workflow capabilities that transform manual business processes
              into automated processes, and with their responsive design, they
              can run seamlessly in browsers or on mobile devices. Turn ideas
              into organisational solutions by enabling everyone to build custom
              apps that solve business challenges.
            </p>
          </div>
        </div>
        <div className={styles.rightcontainer}>
          <img src="https://celebaltech.com/assets/img/powerapps-1024x576.webp" />
        </div>
      </div>
      <div className={styles.lastcontainer}>
        <div className={styles.lastleftcontainer}>
          <iframe
            width="300"
            height="553"
            src="https://xd.adobe.com/embed/80247f13-4127-4423-5747-c10d0ce381a3-f615/"
          ></iframe>
        </div>
        <div className={styles.lastrightcontainer}>
          <div className={styles.lastcontainertext}>
            <h3>
              Take a look on the prototype of our application for customer
              insights brokerage:
            </h3>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default Page;
