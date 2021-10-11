import React from "react";
import "../CSS/Page5.css";
const Page5 = () => {
  return (
    <>
      <div class="image">
        <img
          class="img"
          src="https://celebaltech.com/assets/img/Enterprise%20Integration%20Hero.webp"
        />
        <section class="text-over-photo">
          <h1>Enterprise Integration</h1>
        </section>
      </div>
      <div class="second-container">
        <div class="second-container-heading">
          <p>
            {" "}
            Develop, implement and manage enterprise-class integration
            solutions.{" "}
          </p>
        </div>

        <div class="third-second-container">
          <div class="third-left">
            <div class="third-left-heading">Service Bus Relay</div>
            <div class="third-left-para">
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
          <div class="third-right">
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/email-campaign/rafiki.svg" />
          </div>
        </div>
        <div class="third-second-container">
          <div class="third-left">
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/process/bro.svg" />
          </div>
          <div class="third-right">
            <div class="third-left-heading">
              <p>Event Hubs</p>
            </div>
            <div class="third-left-para">
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
        <div class="third-second-container">
          <div class="third-left">
            <div class="third-left-heading">Azure Relay</div>
            <div class="third-left-para">
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
          <div class="third-right">
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/completed-steps/amico.svg" />
          </div>
        </div>
        <div class="third-second-container">
          <div class="third-left">
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205/cloud-hosting/amico.svg" />
          </div>
          <div class="third-right">
            <div class="third-left-heading">Data Factory</div>
            <div class="third-left-para">
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
        <div class="third-second-container">
          <div class="third-left">
            <div class="third-left-heading">
              Enterprise integration on Azure
            </div>
            <div class="third-left-para">
              <p>
                This reference architecture integrates enterprise backend
                systems, using message queues and events to decouple services
                for greater scalability and reliability. The backend systems may
                include software as a service (SaaS) systems, Azure services,
                and existing web services in your enterprise.
              </p>
            </div>
          </div>
          <div class="third-right">
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20Azure%20-%20Page%205//server/bro.svg" />
          </div>
        </div>
      </div>
      <footer>
        <div class="mini-footer">
          <div class="footer">
            <div class="columns">
              <h4>Our Products</h4>
              <ul class="footer-list">
                <li class="footer-last-list">
                  <a href="#">Intelligent Enterprise</a>
                </li>
                <li>
                  <a href="#">Supply Chain Solutions</a>
                </li>
                <li>
                  <a href="#">EKAA</a>
                </li>
                <li>
                  <a href="#">University Chatbots</a>
                </li>
                <li>
                  <a href="#">SAP / ERP Chatbots</a>
                </li>
                <li>
                  <a href="#">Enterprise Chatbots</a>
                </li>
                <li>
                  <a href="#">C-SMART</a>
                </li>
              </ul>
            </div>
            <div class="columns">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Azure</a>
                </li>
                <li>
                  <a href="#">Data Services</a>
                </li>
                <li>
                  <a href="#">Big Data</a>
                </li>
                <li>
                  <a href="#">SAP Surround</a>
                </li>
                <li>
                  <a href="#">MS Teams</a>
                </li>
              </ul>
            </div>
            <div class="columns">
              <h4>Azure Services</h4>
              <ul>
                <li>
                  <a href="#">App Modernization</a>
                </li>
                <li>
                  <a href="#">Cloud Infrastructure</a>
                </li>
                <li>
                  <a href="#">Data Services</a>
                </li>
                <li>
                  <a href="#">Enterprise Integration</a>
                </li>
                <li>
                  <a href="#">Data Center Migration</a>
                </li>
                <li>
                  <a href="#">Azure DevOps</a>
                </li>
                <li>
                  <a href="#">Database Migration</a>
                </li>
                <li>
                  <a href="#">Cloud Innovation</a>
                </li>
              </ul>
            </div>
            <div class="columns">
              <h4>Data Science</h4>
              <ul>
                <li>
                  <a href="#">Text Analytics</a>
                </li>
                <li>
                  <a href="#">Recommendation Systems</a>
                </li>
                <li>
                  <a href="#">Sales Marketing Analytics</a>
                </li>
                <li>
                  <a href="#">Supply Chain Analytics</a>
                </li>
                <li>
                  <a href="#">HR Analytics</a>
                </li>
              </ul>
            </div>
            <div class="columns">
              <h4>Power Platform</h4>
              <ul>
                <li>
                  <a href="#">Power BI</a>
                </li>
                <li>
                  <a href="#">PowerApps</a>
                </li>
                <li>
                  <a href="#">Power Automate</a>
                </li>
                <li>
                  <a href="#">Dynamic 365</a>
                </li>
              </ul>
            </div>
            <div class="columns">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Our Achievements</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer">
            <div class="end-columns">
              <img src="https://celebaltech.com/assets/img/micro.webp" />
              <p>
                Email us at:
                <a
                  class="footer-tag"
                  href="mailto:enterprisesales@celebaltech.com"
                >
                  enterprisesales@celebaltech.com
                </a>
              </p>
              {/* <div class="social-links">
                <a
                  href="https://twitter.com/celebaltech?lang=en"
                  class="circle"
                >
                  <i class="fa fa-twitter fa-2x"></i>
                </a>
              </div> */}
            </div>
            <div class="mid-column"></div>
            <div class="end-columns">
              <img src="https://celebaltech.com/assets/img/worldmap.png"></img>
              <div class="end-column-text">INDIA | USA | UK | SINGAPORE</div>
            </div>
          </div>
          <div class="last-mid-line">
            © 2021 Celebal Technologies | Terms & Conditions | Privacy Policies
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page5;
