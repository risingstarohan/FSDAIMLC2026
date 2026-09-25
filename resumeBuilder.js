const showResume = document.getElementById('showResume');
const resumeDetails = document.getElementById('resumeDetails');

showResume.addEventListener('click', function () {

    resumeDetails.innerHTML = `
        <h1>My Resume</h1>

        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Rohan Chaudhary</p>
        <p><strong>Email:</strong> rohanchaudharyofficial@gmail.com</p>
        <p><strong>Phone:</strong> 9580097908</p>
        <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>

        <h2>Education</h2>
        <p>B.Tech in Computer Science (AIML)</p>

        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>C++</li>
        </ul>

        <h2>Projects</h2>
        <p>Resume Builder Project</p>

        <h2>About Me</h2>
        <p>I am a student interested in web development and programming.</p>
    `;
});