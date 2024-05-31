import "./About.css";
import aboutImage from "./images/Screenshot 2023-12-01 135606.png";
import missionImage from "./images/20943892.jpg";
import apartImage from "./images/individuality-concept-among-silhouettes.jpg";
import whyImage from "./images/7720441.jpg";
import communityImage from "./images/8635954.jpg";

export default function About() {
  return (
    <div className="about">
      {/* About Section */}
      <div className="about-section">
        <img src={aboutImage} alt="About Image" className="section-image" />
        <div>
          <h1>About SourcePedia</h1>
          <p>
            Welcome to SourcePedia, your ultimate destination for seamless
            access to a wealth of knowledge and information. At SourcePedia, we
            believe in the power of information to transform lives and drive
            progress. As we celebrate our 1-year milestone, we take pride in
            being your reliable source for a diverse range of web documents that
            cater to your curiosity, education, and exploration.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <img src={missionImage} alt="Mission Image" className="section-image" />
        <div>
          <h2>Our Mission</h2>
          <p>
            At the heart of SourcePedia is a commitment to democratizing
            information. We strive to provide a platform where users can
            effortlessly discover, explore, and engage with a vast array of web
            documents, from insightful articles to comprehensive research
            papers. Our mission is to empower individuals with the knowledge
            they need to make informed decisions, foster learning, and fuel
            their intellectual curiosity.
          </p>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="apart-section">
        <img src={apartImage} alt="Apart Image" className="section-image" />
        <div>
          <h2>What Sets Us Apart</h2>
          <p>
            SourcePedia stands out for its user-friendly interface, making
            navigation and exploration a breeze. Our dedicated team curates and
            organizes web documents across various topics, ensuring that you have a
            seamless and enriching experience every time you visit. We prioritize
            accuracy, reliability, and diversity, curating content that reflects a
            spectrum of perspectives and voices.
          </p>
        </div>
      </div>

      {/* Why SourcePedia Section */}
      <div className="why-section">
        <img src={whyImage} alt="Why Image" className="section-image" />
        <div>
          <h2>Why SourcePedia?</h2>
          <ul>
            <li className="curated-excellence">
              <strong>Curated Excellence:</strong> Our team of experts carefully
              curates web documents to bring you the best-in-class content across
              diverse fields.
            </li>
            <li className="user-friendly-interface">
              <strong>User-Friendly Interface:</strong> Navigate through a clean
              and intuitive interface designed to enhance your exploration and
              discovery.
            </li>
            <li className="varied-topics">
              <strong>Varied Topics:</strong> Whether you're interested in
              science, technology, arts, or current affairs, SourcePedia is your
              one-stop destination for a broad range of web documents.
            </li>
          </ul>
        </div>
      </div>

      {/* Join Our Community Section */}
      <div className="community-section">
        <img src={communityImage} alt="Community Image" className="section-image" />
        <div>
          <h2>Join Our Community</h2>
          <p>
            As we celebrate our first year, we invite you to be a part of the
            SourcePedia community. Follow us on social media, engage in
            discussions, and stay updated on the latest additions to our growing
            repository of web documents. Together, let's continue the journey of
            exploration and knowledge-sharing.
          </p>
          <p>
            Thank you for being a part of the SourcePedia family. Here's to many
            more years of learning, discovery, and empowerment!
          </p>
        </div>
      </div>
    </div>
  );
}
