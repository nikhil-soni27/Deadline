import styles from "../CSS/Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.minifooter}>
          <div className={styles.footer}>
            <div className={styles.columns}>
              <h4>Our Products</h4>
              <ul>
                <li className="footer-list">
                  <a href="#">Intelligent Enterprise</a>
                </li>
                <li >
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
            <div className={styles.columns}>
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
            <div className={styles.columns}>
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
            <div className={styles.columns}>
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
            <div className={styles.columns}>
              <h4>Power Platform</h4>
              <ul >
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
            <div className={styles.columns}>
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
          <div className={styles.imagesfooter}>
            <div className={styles.endcolumn}>
              <img src="https://celebaltech.com/assets/img/micro.webp" />
              <p>
                Email us at:
                <a
                  className="footer-tag"
                  href="mailto:enterprisesales@celebaltech.com"
                >
                  enterprisesales@celebaltech.com
                </a>
              </p>
            </div>
            <div className={styles.midcolumn}></div>
            <div className={styles.endcolumn}>
              <img src="https://celebaltech.com/assets/img/worldmap.png"></img>
              <div className={styles.endcolumntext}>INDIA | USA | UK | SINGAPORE</div>
            </div>
          </div>
          <div className={styles.lastmidline}>
            © 2021 Celebal Technologies | Terms & Conditions | Privacy Policies
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
