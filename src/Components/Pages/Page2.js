import React from "react";
import styles from "../CSS/Page2.module.css";
import Footer from "../Pages/Footer";
const Page2 = () => {
  return (
    <>
      <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>Dynamics 365</h1>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.secondcontainer}>
        <div className={styles.rowcontainer}>
          <div className={styles.row}>
            <p>
              <span>Dynamics 365</span> isn’t an ERP or a CRM product, it’s
              both. Dynamics 365 is a next step in the evolution of a combined
              ERP and CRM product..
            </p>
          </div>
          <div>
            <ul className={styles.ulpoints}>
              <li className={styles.list}>
                <h3>Moving Business Forward</h3>
                <p>
                  {" "}
                  Unify CRM and ERP capabilities and break down data silos with
                  Dynamics 365 modern, inteliigent cloud applications that help
                  move your business forward. Transform your business processes
                  using intelligent applications that work seamlessly together
                  in the cloud.{" "}
                </p>
              </li>
              <li className={styles.list}>
                <h3>Microsoft dynamics for Sales</h3>
                <p>
                  {" "}
                  Empower your sales team with the insights they need to close
                  more deals, faster. With the digital intelligence and
                  productivity tools provided by Dynamics 365 for Sales, your
                  sales team can better understand their customers. This leads
                  to heightened customer experience and personal attention that
                  fosters lasting relationships and strengthens pipeline
                  development.{" "}
                </p>
              </li>
              <li className={styles.list}>
                <h3>Microsoft dynamics for Customer Service</h3>
                <p>
                  {" "}
                  Strengthen customer loyalty and provide world-className customer
                  service with Dynamics 365 for Customer Service. Turn simple
                  interactions into life-long relationships by offering seamless
                  service to your customers. Providing consistent, smart care
                  will cultivate lasting relationships.{" "}
                </p>
              </li>
              <li className={styles.list}>
                <h3>Microsoft dynamics for Marketing</h3>
                <p>
                  {" "}
                  Microsoft Dynamics 365 for Marketing is a cloud-based
                  marketing application that helps manage and guide the customer
                  along their journey through the sales funnel – from the first
                  contact through to close. With Adobe Marketing Cloud, your
                  business can create deliver engaging customer experiences
                  across all touch points.{" "}
                </p>
              </li>
              <li className={styles.list}>
                <h3>Microsoft dynamics for Field service</h3>
                <p>
                  {" "}
                  Microsoft Dynamics 365 for Field Service is a complete Field
                  Service management solution that includes service locations,
                  customer assets, preventative maintenance, work order
                  management, resource management, product inventory, scheduling
                  and dispatch, mobility, collaboration, customer billing, and
                  analytics.{" "}
                </p>
              </li>
              <li className={styles.list}>
                <h3>Microsoft dynamics for Retail</h3>
                <p>
                  {" "}
                  Personalize customer engagement and increase employee
                  productivity by creating an exceptional, insightful shopping
                  experience that unifies digital, in- store, and back office
                  operations.{" "}
                </p>
              </li>
              <li className={styles.list}>
                <h3>Microsoft dynamics for project service automation</h3>
                <p>
                  {" "}
                  Microsoft Dynamics 365 for Project Service Automation delivers
                  a cloud-based project management application that keeps each
                  step of the project moving forward, and each employee involved
                  in the process working productively. Dynamics 365 for Project
                  Service Automation enables businesses to build and validate
                  customer relationships by leveraging intelligent and intuitive
                  tools.{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};
export default Page2;
