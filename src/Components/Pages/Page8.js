import React from "react";
import styles from "../CSS/Page8.module.css";
import Footer from "../Pages/Footer";
const Page8 = () => {
  return (
    <>
      <section class={styles.image}>
      <div class={styles.imagecontainer}>
        <div class={styles.textoverphoto}>
          <div>
            <h1>Power Automate</h1>
            </div>
            </div>
            </div>
            </section>
     <div className={styles.text}>
        <div className={styles.paragraphone}>
          <p><span>Power Automate</span> is an intelligent process automation service that goes beyond simple task automation, allowing non-technical users to automate complex business processes and workflows without a complex IT deployment. is an online workflow service that automates actions across the most common apps and services, allowing you to create “flows” that automate processes that were done manually or inefficiently in the past.</p>
        </div>
        <div className={styles.paragraphtwo}>
          <p>Through a simple and intuitive interface, users can create automated workflows that can be triggered by insights from Power BI, leveraged via apps built with PowerApps (e.g. a user action in a Power App might kick off an approval process) and integrated with events from any of the hundreds of systems the Power Platform natively supports. The workflows run completely in the cloud and are fully managed and secured by Microsoft.</p>
        </div>
        <div className={styles.paragraphthree}>
          <p>Although it goes beyond simple task automation, Power Automate’s simple, intuitive interface enables non-technical users to automate even the most complex processes and workflows. Workflows can be triggered by insights from Power BI, leveraged through apps built with Power Apps or bots built with Power Virtual Agents, and integrated with events from any system supported by the Power Platform. Best of all, workflows run entirely in the cloud and are fully managed and secured by Microsoft.</p>  
        </div>
        <div className={styles.paragraphfour}>
          <p>With Power Automate, the possibilities are virtually endless</p>  
        </div>
      </div>
      <div className={styles.text2}>
        <h3>Power Automate can be used to automate any task, such as:</h3>
        <ul className={styles.ulpoints}>
          <li className={styles.list}> Automating workflows between applications and services, like capturing, tracking, and following up on sales leads </li>
          <li className={styles.list}> Synchronizing files, like copying email attachments to OneDrive </li>
          <li className={styles.list}> Getting notifications, like responding instantly to important emails </li>
          <li className={styles.list}> Collecting data of any type and disseminating it to appropriate recipients </li>
        </ul>
        <p className={styles.ulparagraphone}>One of the most powerful features of Power Automate is its ability to work with other applications. That means you can automate workflows between Outlook, Power BI, Excel, Dynamics 365, Salesforce, Facebook…whatever application is involved in the process.</p>
      <p className={styles.ulparagraphtwo}>Microsoft provides a large list of templates for the most commonly requested workflows that help you build flows by making only a few simple changes. And, of course, you can always create your own flows from scratch.</p>
      </div>
      <div className={styles.middlecontainer}>
        <div className={styles.leftcontainer}>
          <div className={styles.leftcontainertext}>
            <h3>Bring AI to workflows without having to code</h3>
            <p> Easily train AI models for forms processing, binary classification, object detection, and text recognition using the built-in AI capabilities of Power Automate. </p>
          </div>
        </div>
          <div className={styles.rightcontainer}>
        <img src="https://celebaltech.com/assets/img/panel5-1024x565.webp"/>
          </div>
      </div>
      <div className={styles.lastcontainer}>
<div className={styles.lastleftcontainer}>
  <img src="https://celebaltech.com/assets/img/powerautomate-1024x576.webp"/>
</div>
          <div className={styles.lastrightcontainer}>
            <div className={styles.lastcontainertext}>
              <p>Boost business productivity to get more done by giving everyone the ability to automate organizational processes.</p>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Page8;
