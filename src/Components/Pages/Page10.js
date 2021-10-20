import React from "react";
import styles from "../CSS/Page10.module.css";
import Footer from "./Footer";
const Page10 = () => {
  return (
    <>
      <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>HR Analytics</h1>
            </div>
            </div>
            </div>
            </section>
        <div className={styles.secondcontainer}>
          <div className={styles.secondcontainerheading}>
            <p>
             
              Human Resources has been transformed with the emergence of
              Artificial Intelligence. AI enables HR professionals to make
              data-driven decisions on employee recruitment, retention and
              training. Through HR analytics, HR departments can not only get
              insights on current employee data but also get predictions on
              future possibilities in training, compensation, and retention.
              This approach also improves employee engagement and work culture
              with constant collection of feedback and surveys data.
            </p>
          </div>
          <div className={styles.heading}>Benefits of HR Analytics</div>
          <div className={styles.thirdsecondcontainer}>
            <div className={styles.thirdleft}>
              <div className={styles.thirdleftparaone}>Churn modeling </div>
              <p>
                HR Analytics can give insights on employee performance and
                progress in an organization.
              </p>
            </div>
            <div className={styles.thirdright}>
              <img src="https://celebaltech.com/assets/img/Website%20Redesign-%20HR%20analytics/site-stats/cuate.svg" />
            </div>
          </div>
          <div className={styles.thirdsecondcontainer}>
            <div className={styles.thirdright}>
              <img src="https://celebaltech.com/assets/img/Website%20Redesign-%20HR%20analytics/hiring/amico.svg" />
            </div>
            <div className={styles.thirdleft}>
              <div className={styles.thirdleftpara}>Enhanced Recruiting Process</div>
              <div className={styles.thirdleft}>
                <p>
                  HR Analytics can aggregate data from previous hiring sessions
                  and current employee pool to improve recruitment procedure.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.thirdsecondcontainer}>
            <div className={styles.thirdleft}>
              <div className={styles.thirdleftpara}>Improved Employee Satisfaction </div>
              <p>
                HR Analytics can give insights into employee retention figures.
                It can analyze the exit interviews, employee satisfaction
                surveys
              </p>
            </div>
            <div className={styles.thirdright}>
              <img src="https://celebaltech.com/assets/img/Website%20Redesign-%20HR%20analytics/projections/cuate.svg" />
            </div>
          </div>
          <div className={styles.thirdsecondcontainer}>
            <div className={styles.thirdright}>
              <img src="https://celebaltech.com/assets/img/Website%20Redesign-%20HR%20analytics/digital-personal-files/pana.svg" />
            </div>
            <div className={styles.thirdleft}>
              <div className={styles.thirdleftpara}>Task Automation</div>
              <div className={styles.thirdleft}>
                <p>
                  HR professionals can automate collection of data from surveys,
                  assessments, feedback forms and combining this data for
                  overall insights.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.thirdsecondcontainer}>
            <div className={styles.thirdleft}>
              <div className={styles.thirdleftpara}>AI Powered HR Chatbots </div>
              <p>
                With chatbots, employees can easily apply for leaves, get
                information on HR related queries, request salary slips, etc.
              </p>
            </div>
            <div className={styles.thirdright}>
              <img src="https://celebaltech.com/assets/img/Website%20Redesign-%20HR%20analytics/chat-bot/pana.svg" />
            </div>
          </div>
          <div className={styles.thirdsecondcontainer}>
            <div className={styles.thirdright}>
              <img src="https://celebaltech.com/assets/img/Website%20Redesign-%20HR%20analytics/accept-tasks/amico.svg" />
            </div>
            <div className={styles.thirdleft}>
              <div className={styles.thirdleftpara}>Human Capital Management</div>
              <div className={styles.thirdleft}>
                <p>
                  HR professional can seamlessly monitor appraisal, bonus,
                  fringe benefits, and promotions of the organization and track
                  employee performance.
                </p>
              </div>
            </div>
          </div>
        </div>
     
     <Footer/>
    </>
  );
};

export default Page10;
