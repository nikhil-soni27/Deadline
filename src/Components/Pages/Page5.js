import React from "react";
import styles from "../CSS/Page5.module.css";
import Footer from "../Pages/Footer";
const Page5 = () => {
  return (
    <>
       <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>Enterprise Integration</h1>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.secondcontainer}>
        <div className={styles.secondcontainerheading}>
          <p>
            Develop, implement and manage enterprise-className integration
            solutions.
          </p>
        </div>

        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Service Bus Relay</div>
            <div className={styles.thirdleftpara}>
              <p>
                The Service Bus Relay is a unique service that makes it possible
                to securely expose on-premises services to the Internet through
                a cloud-based relay. The service supports a variety of messaging
                patterns including request/reply, one-way asynchronous, and
                peer-to-peer.
              </p>
              <p>
                But what if the service client and server aren’t online at the
                same time? Service Bus Brokered Messaging offers a pair of
                asynchronous store-and-forward services. Queues provide
                first-in-first-out delivery to a single consumer. Data is stored
                in the queue until retrieved by the consumer. Topics are
                slightly different. They make it possible for multiple
                recipients to get a message from a producer. It offers a
                publish/subscribe engine with per-recipient filters.
              </p>
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/email-campaign/rafiki.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/process/bro.svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              <p>Event Hubs</p>
            </div>
            <div className={styles.thirdleftpara}>
              <p>
                Azure Event Hubs is a scalable service for high-volume event
                intake. Stream in millions of events per second from
                applications or devices. It’s not an end-to-end messaging
                engine, but rather, focuses heavily on being a low latency
                “front door” that can reliably handle consistent or bursty event
                streams.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Azure Relay</div>
            <div className={styles.thirdleftpara}>
              <p>
                The Azure Relay service facilitates hybrid applications by
                enabling you to securely expose services that reside within a
                corporate enterprise network to the public cloud, without having
                to open a firewall connection, or require intrusive changes to a
                corporate network infrastructure. Relay supports a variety of
                different transport protocols and web services standards.
              </p>
              <p>
                The relay service supports traditional one-way,
                request/response, and peer-to-peer traffic. It also supports
                event distribution at internet-scope to enable publish/subscribe
                scenarios and bi-directional socket communication for increased
                point-to-point efficiency.
              </p>
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/completed-steps/amico.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/cloud-hosting/amico.svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Data Factory</div>
            <div className={styles.thirdleftpara}>
              <p>
                Data Factory The Azure Data Factory is a cloud-based data
                integration service that does traditional extract-transform-load
                but with some modern twists. Data Factory can pull data from
                either on-premises or cloud endpoints. There’s an agent-based
                “data management gateway” for extracting data from on-premises
                file systems, SQL Servers, Oracle databases, Teradata databases,
                and more. Data transformation happens in Hadoop cluster or batch
                processing environment. All the various processing activities
                are collected into a pipeline that gets executed. Activities can
                have policies attached. A policy controls concurrency, retries,
                delay duration, and more.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              Enterprise integration on Azure
            </div>
            <div className={styles.thirdleftpara}>
              <p>
                This reference architecture integrates enterprise backend
                systems, using message queues and events to decouple services
                for greater scalability and reliability. The backend systems may
                include software as a service (SaaS) systems, Azure services,
                and existing web services in your enterprise.
              </p>
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205//server/bro.svg" />
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Page5;
