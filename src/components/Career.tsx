import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Engineering</h4>
                <h5>Pandit Deendayal Energy University (PDEU)</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Currently in 2nd year. CGPA: 8.66. Core subjects include Data Structures, 
              Object-Oriented Programming (OOP), and Database Management Systems (DBMS).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador (GSA)</h4>
                <h5>Google</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Organizing workshops and coding sessions for students interested in programming. 
              Guiding peers in programming concepts and Data Structures & Algorithms (DSA).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member</h4>
                <h5>AIESEC Ahmedabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Participating in leadership and community initiatives. Developing teamwork, 
              communication, and project management skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
