import React from "react";
import styles from "../CSS/Page3.module.css";
import Footer from "../Pages/Footer";
const Page3 = () => {
  return (
    <>
       <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>University Chatbots</h1>
            </div>
            </div>
            </div>
            </section>
      <div className={styles.secondcontainer}>
        <div className={styles.rowcontainer}>
          <div className={styles.paraone}>
            <p>
              {" "}
              For any college or academic institution, swift communication and
              student engagement has become increasingly important with the
              emergence of remote learning. Academic institutions are embracing
              AI in their digital transformation journeys to cater to a
              digitally active student generation.
            </p>
          </div>
          <div className={styles.paratwo}>
            <p>
              Circle is a university chatbot developed on Microsoft Teams. This
              chatbot is available in both mobile and desktop application of
              Microsoft Teams environment. It streamlines the interactions
              between Faculty, Management and Students. This chatbot provides
              the modern technologically connected generation with a platform to
              digitally interact with universities.
            </p>
          </div>
          <div className={styles.parathree}>
            <p>
              Circle also allows easier tracking of student progress and
              improved communication between faculty and students.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.thirdcontainer}>
        <h3>HOW CIRCLE ADDS VALUE TO ACADEMIC INSTITUTION</h3>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Anytime Assistance</div>
            <div className={styles.thirdleftpara}>
              With Circle, students do not have to wait to get their queries
              addressed. Circle is available 24/7 to provide any information
              needed.
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/1.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/2.svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Automated workflows</div>
            <div className={styles.thirdleftpara}>
              Circle allows teachers to reach more students and automate test
              reminders, notifications and schedule emails.
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Collaborative Environment</div>
            <div className={styles.thirdleftpara}>
              With MS Teams on Circle, students and teachers can easily share
              files, projects, assignments and improve interactions.
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/3.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/4.svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              Support for After-School Activities
            </div>
            <div className={styles.thirdleftpara}>
              Circle helps students track their participation in clubs and
              extra-curricular activities and manage their time for academics.
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              Track Attendance and Test Scores
            </div>
            <div className={styles.thirdleftpara}>
              Through Circle, students can easily get an update on their test
              progress and attendance
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/5.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/6.svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Adapt to Changing Schedules</div>
            <div className={styles.thirdleftpara}>
              Circle automatically updates schedules according to faculty and
              resources availability.
            </div>
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>
              One-stop platform for Management
            </div>
            <div className={styles.thirdleftpara}>
              Circle gives university management a complete view of fees and
              attendance at every level.
            </div>
          </div>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/7.svg" />
          </div>
        </div>
        <div className={styles.thirdsecondcontainer}>
          <div className={styles.thirdright}>
            <img src="https://celebaltech.com/assets/img/Website%20Redesign%20-%20University%20Chatbot%20-%20Updated/8.svg" />
          </div>
          <div className={styles.thirdleft}>
            <div className={styles.thirdleftheading}>Seamless Progress Tracking</div>
            <div className={styles.thirdleftpara}>
              Even parents can track students grades on Circle along with fees
              and attendance tracking.
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Page3;
