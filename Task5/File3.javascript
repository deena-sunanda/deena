// script.js
document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, name: 'Course 1', description: 'Introduction to Course 1' },
        { id: 2, name: 'Course 2', description: 'Introduction to Course 2' },
        { id: 3, name: 'Course 3', description: 'Introduction to Course 3' }
    ];

    const courseList = document.getElementById('course-list');
    const contentDisplay = document.getElementById('content-display');

    // Display course list
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.textContent = course.name;
        courseDiv.onclick = () => viewCourse(course);
        courseList.appendChild(courseDiv);
    });

    // Function to display course content
    function viewCourse(course) {
        contentDisplay.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.description}</p>
        `;
    }

    // Example of adding more functionality
    // Additional features like search or filtering can be implemented here
});
