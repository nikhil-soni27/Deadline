import React from "react";
import styles from "../CSS/Page9.module.css";
import Footer from "../Pages/Footer";
const Page9 = () => {
  return (
    <>
       <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>Data Center Migration</h1>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.secondcontainer}>
        <div className={styles.secondcontainerheading}>
          <p>
            {" "}
            Data plays one of the significant roles for shaping any
            organization’s journey towards success. Data helps leaders to make
            wiser and smarter decisions about where to take their companies.
            Managing a large set of data on your premises is a challenging task
            and can lead to data loss, lesser insights, high cost, and
            inefficiencies. Legacy systems and applications cannot compete with
            today’s customer-centric technologies like cloud computing.
          </p>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              How can Celebal Technologies help you in this Migration Journey?
            </div>
            <ul>
              <li className={styles.list}>
                Celebal Technologies can help you migrate your organization’s
                complete infrastructure to Azure Cloud within few weeks and zero
                downtown.
              </li>
              <li className={styles.list}>
                We focus primarily on secure architecture while migrating large
                workloads of data.
              </li>
              <li className={styles.list}>
                We provide the tools you need for easy lift & shift of your data
                and promise for a minimal code change environment and your
                choice of Azure Database destination.
              </li>
              <li className={styles.list}>
                We will provide you continual health, performance, and cost
                management and also provide you with support at every stage of
                migration. We provide the tools for every stage of the migration
                process.
              </li>
            </ul>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%208/cloud-hosting/cuate.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/data-center-migration(2).svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Migrate Infrastructure</div>
            <ul>
              <li className={styles.list}>
                If your company is looking to migrate to Azure, our migration
                practice helps customers migrate from on-premise VMware/Hyper-V,
                or other clouds like AWS to a Microsoft Azure Datacentre.
              </li>
              <li className={styles.list}>
                We will provide you with Migrating VMware workloads, Configuring
                backup, and disaster recovery for migrated workloads, Using
                Azure Stack as a migration target for customers that cannot
                migrate to the public cloud.
              </li>
              <li className={styles.list}>
                We help you in the process of deciding the right virtual
                machines family and size, with the correct availability options,
                which is an important value-add.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page9;
