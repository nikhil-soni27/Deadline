import React from "react";
import styles from "../CSS/Page4.module.css";
import Footer from "../Pages/Footer";
const Page4 = () => {
  return (
    <>
       <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>Enterprise Chatbots</h1>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.secondcontainer}>
        <div className={styles.rowcontainer}>
          <div className={styles.paraone}>
            <p>
              Enterprise Chatbots are making the enterprise communications easy
              and this is the reason that they are gaining popularity across
              industries. Enterprise Chatbots are basically the conversation
              agents that works through an Artificial Intelligence software
              developed according to the needs and utility of the particular
              scenario. Next Gen enterprises are adopting these bots quickly as
              they are the future of conversations.
            </p>
          </div>
        </div>
        <div className={styles.iconscontainer}>
          <div className={styles.iconsleft}>FEATURES</div>
          <div className={styles.iconsright}>
            <div className={styles.iconstrayone}>
              <div className={styles.lasttray}>
                <div className={styles.imageinsideeachtray}>
                  <img src="https://celebaltech.com/assets/img/EC1.png" />
                </div>
                <p>Improved Customer Service</p>
              </div>
              <div className={styles.lasttray}>
                <div className={styles.imageinsideeachtray}>
                  <img src="https://celebaltech.com/assets/img/EC2.png" />
                </div>
                <p>Better Engagement</p>
              </div>
              <div className={styles.lasttray}>
                <div className={styles.imageinsideeachtray}>
                  <img src="https://celebaltech.com/assets/img/EC3.png" />
                </div>
                <p>Cost saving</p>
              </div>
            </div>
            <div className={styles.iconstraytwo}>
              <div className={styles.lasttray}>
                <div className={styles.imageinsideeachtray}>
                  <img src="https://celebaltech.com/assets/img/EC4.png" />
                </div>
                <p>Monitoring Customer Data for insights</p>
              </div>
              <div className={styles.lasttray}>
                <div className={styles.imageinsideeachtray}>
                  <img src="https://celebaltech.com/assets/img/EC5.png" />
                </div>
                <p>Rapid growth in messenger apps</p>
              </div>
              <div className={styles.lasttray}>
                <div className={styles.imageinsideeachtray}>
                  <img src="https://celebaltech.com/assets/img/EC6.png" />
                </div>
                <p>Increased Efficiency</p>
              </div>
            </div>
            <div className={styles.iconstraytwo}></div>
          </div>
        </div>
        <div className={styles.headingaboveimages}>Why Enterprise Chatbot exists?</div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              Instant Response for customer queries
            </div>
            <div className={styles.thirdleftpara}>
              With chatbots wait time for customer is eliminated as chatbot is
              almost instantaneous and customer can reach out on demand at any
              time.
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/1.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <img src="https://celebaltech.com/assets/img/EC-browser.png" />
          </div>
          <div className={styles.thirdright}>
            <div className={styles.thirdleftheading}>
              Assists Sales & Marketing Teams Reach Customers Faster
            </div>
            <div className={styles.thirdleftpara}>
              Enterprise chatbots can initiate a conversation with potential
              customers, while are browsing through the products & services.
              Chatbots can provide extra information that a user may ask
              regarding the services immediately.
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              Automating Business Operations for Visible Efficiency Gains
            </div>
            <div className={styles.thirdleftpara}>
              Chatbots engage the customers over messaging platform by asking
              relevant questions to contextualize the responses and automate
              over 40% of the processes.
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/EC-mobile.png" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <img src="https://celebaltech.com/assets/img/EC-happy.png" />
          </div>
          <div className={styles.thirdright}>
            <div className={styles.thirdleftheading}>Work Stress Busters</div>
            <div className={styles.thirdleftpara}>
              Enterprise chatbots can initiate a conversation with potential
              customers, while are browsing through the products & services.
              Chatbots can provide extra information that a user may ask
              regarding the services immediately.
            </div>
          </div>
        </div>
        <div className={styles.redbar}>Go to Marketplace</div>
      </div>
     <Footer/>
    </>
  );
};

export default Page4;
