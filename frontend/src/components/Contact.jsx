import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Dhanraj Sardana</h1>
      <p className="text-center text-gray-600 mb-2">
        (+91) 9650790453 | <a href="mailto:dhanrajsardana2003@gmail.com" className="text-blue-600 underline">dhanrajsardana2003@gmail.com</a>
      </p>
      <p className="text-center text-gray-600 mb-6">
        <a href="https://www.linkedin.com/in/dhanrajsardana" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a> | 
        <a href="https://github.com/Dhanraj-Sardana" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 underline">GitHub</a>
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Introduction</h2>
        <p>
          I am a passionate coder and fresher eager to apply my skills in the tech industry. Driven by curiosity and a commitment to continuous learning, I am excited to explore and contribute to innovative projects.
          Beyond coding, I have a deep passion for physics and lead a team of 50 performers as the president of my college theatre society—managing productions, inspiring creativity, and fostering teamwork.
          This blend of technical expertise, leadership experience, and love for science fuels my enthusiasm to make meaningful contributions in diverse fields.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Java</li>
          <li>Node.js</li>
          <li>React & ReactDOM</li>
          <li>Electron</li>
          <li>WebRTC</li>
          <li>Object Oriented Programming</li>
          <li>Basic Machine Learning</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        <p>
          <strong>Dr. Akhilesh Das Gupta Institute of Professional Studies</strong><br />
          B.Tech in Computer Science Engineering (Pursuing) – 92.662%
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
        <div className="mb-4">
          <h3 className="font-bold">CollabVS – Custom Version Control (Ongoing)</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Built a full-fledged version control system from scratch in Node.js with Git-like functionality.</li>
            <li>Enabled 100% offline use with a custom .mycvs file-based repo.</li>
            <li>Developed an Electron + React GUI, increasing usability and execution speed by 30%.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Real-Time Background Extraction (Aug 2023 – Sep 2023)</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Developed a Python-based background extraction tool using SVD for video frames.</li>
            <li>Enhanced accuracy with dynamic thresholding and lighting adjustment.</li>
            <li>Processed 500 frames efficiently by converting to grayscale and reducing computational load.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Internship & Training</h2>
        <div className="mb-4">
          <h3 className="font-bold">Ybi Foundation – Python Programming Internship (Nov 2024)</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Built a Digit Decoder using Random Forest Classifier with 91% accuracy.</li>
            <li>Used grid search & cross-validation for hyperparameter tuning and overfitting control.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">IBM Training (July 2023 – Aug 2023)</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Built ML foundations with Allsoft Solutions, co-powered by IBM.</li>
            <li>Achieved 85%+ accuracy using Decision Trees, KNN, and Logistic Regression.</li>
            <li>Improved Kaggle model performance by 10% with outlier removal and scaling.</li>
          </ul>
        </div>
      </section>

      <section className="text-center">
        <p className="text-gray-700">
          I'm always open to new opportunities and collaborations. If you're hiring or want to build something impactful together, let's connect!
        </p>
      </section>
    </div>
  );
};

export default Contact;

