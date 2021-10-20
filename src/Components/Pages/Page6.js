import React from "react";
import styles from "../CSS/Page6.module.css";
import Footer from "../Pages/Footer";
const Page6 = () => {
  return (
    <>
       <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>Cloud Infrastructure</h1>
            <h6>Cloud-based automation and configuration service that provides consistent management across Azure and non-Azure environments. </h6>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.secondcontainer}>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              AUTOMATE YOUR ENTERPRICE WITH AZURE CLOUD AND SERVICES
            </div>
            <div className={styles.thirdleftpara}>
              We provide Infrastructure Automation services using Azure Cloud
              services that provides consistent management across Azure and
              non-Azure environments. It consists of process automation, update
              management, and configuration features, designed to help you
              reduce errors and cut the time spent on your infrastructure
              deployments.
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%203/Group.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%203/img2.svg" />
          </div>
          <div className={styles.thirdright}>
            <div className={styles.thirdleftheading}>
              <p>
                HOW CAN CELEBAL TECHNOLOGIES HELP YO IN INFRASTRUCTURE
                AUTOMATION?
              </p>
            </div>
            <div className={styles.thirdleftpara}>
              <p>
                Celebal Technologies has been helping enterprise businesses
                realise higher efficiency, greater flexibility, lower costs, and
                better performance for their applications and services. With our
                experience and background in Azure Managed Services, you can say
                goodbye to costly servers and say hello to all the benefits of
                Azure Cloud Services, complete with constant support and
                maintenance.
              </p>
              <p className={styles.uniquetext}>
                We help you achieve maximum automation in infrastructure
                management, both on-premises and on cloud. Our platform-led
                service delivery accelerates end-to-end automation in the areas
                of compute, database, application, network, storage, and
                security. Additionally, we support automation of operational
                tasks report generation. configuration, access, self-healing
                capabilities along with environment setup, log analysis, and
                CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              <p className={styles.listheading}>Our Cloud Infrastructure Services</p>
            </div>
            <ul className={styles.footerlist}>
              <li className={styles.footerlastlist}>
                Fully automated cloud platform and infrastructure monitoring{" "}
              </li>
              <li>
                Enabling a single view across your entire Azure environment{" "}
              </li>
              <li>
                Monitoring applications, clusters, and underlying cloud
                infrastructure health.
              </li>
              <li>
                Automatic observability, problem detection and smart alerting.{" "}
              </li>
              <li>
                Deep understanding of all the relationships and
                inter-dependencies
              </li>
            </ul>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%203/img3.svg" />
          </div>
        </div>

        <div className={styles.endcontainer}>
          <p className={styles.endtext}>
            Celebal Technologies doesn’t stop at the application layer, we go
            deep into your infrastructure. With full-stack coverage, our
            infrastructure monitoring extends down to the virtual network,
            virtual infrastructure and container orchestration layers where we
            provide automatic observability, problem detection and smart
            alerting across cloud native, and hybrid environments.{" "}
          </p>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Page6;
