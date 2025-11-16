// Team Members Data
const teamMembers = [
    {
        name: "Member 1",
        role: "Team Member 1",
        description: "Passionate about web development and creating responsive websites. Enjoys learning new technologies and solving problems.",
        detail: "Add more details about this member here. You can include their background, interests, achievements, or any other relevant information that showcases their unique contributions to the team.",
        skillsSubtitle: "HTML, CSS, JavaScript",
        skills: ["HTML", "CSS", "JavaScript"],
        talentsSubtitle: "Web Development, Problem Solving",
        talents: ["Web Development", "Problem Solving"],
        email: "member1@student.com",
        phone: "+1 234 567 8901"
    },
    {
        name: "Member 2",
        role: "Team Member 2",
        description: "Frontend developer with a focus on user experience and modern design principles. Skilled in creating interactive interfaces.",
        detail: "Expert in responsive design and CSS frameworks. Has contributed to multiple successful projects with innovative UI solutions that enhance user engagement and satisfaction.",
        skillsSubtitle: "React, TypeScript, Tailwind",
        skills: ["React", "TypeScript", "Tailwind"],
        talentsSubtitle: "UI Design, Frontend Development",
        talents: ["UI Design", "Frontend Development"],
        email: "member2@student.com",
        phone: "+1 234 567 8902"
    },
    {
        name: "Member 3",
        role: "Team Member 3",
        description: "Backend specialist focused on database management and server-side programming. Passionate about building scalable systems.",
        detail: "Experienced in designing and implementing robust backend architectures. Specializes in API development and database optimization for high-performance applications.",
        skillsSubtitle: "Python, MySQL, Node.js",
        skills: ["Python", "MySQL", "Node.js"],
        talentsSubtitle: "Database Design, API Development",
        talents: ["Database Design", "API Development"],
        email: "member3@student.com",
        phone: "+1 234 567 8903"
    },
    {
        name: "Member 4",
        role: "Team Member 4",
        description: "Full-stack developer with experience in both frontend and backend technologies. Enjoys tackling complex challenges.",
        detail: "Versatile developer who bridges the gap between frontend and backend. Known for delivering complete solutions from concept to deployment with attention to detail.",
        skillsSubtitle: "JavaScript, PHP, SQL",
        skills: ["JavaScript", "PHP", "SQL"],
        talentsSubtitle: "Full-Stack Development, DevOps",
        talents: ["Full-Stack Development", "DevOps"],
        email: "member4@student.com",
        phone: "+1 234 567 8904"
    },
    {
        name: "Member 5",
        role: "Team Member 5",
        description: "UI/UX designer who creates beautiful and intuitive user interfaces. Focuses on user-centered design principles.",
        detail: "Passionate about creating seamless user experiences through thoughtful design. Skilled in prototyping and user research to ensure optimal usability.",
        skillsSubtitle: "Figma, Adobe XD, Sketch",
        skills: ["Figma", "Adobe XD", "Sketch"],
        talentsSubtitle: "UI/UX Design, Prototyping",
        talents: ["UI/UX Design", "Prototyping"],
        email: "member5@student.com",
        phone: "+1 234 567 8905"
    },
    {
        name: "Member 6",
        role: "Team Member 6",
        description: "Mobile app developer specializing in cross-platform development. Experienced in creating mobile-first solutions.",
        detail: "Skilled in developing native and hybrid mobile applications. Focuses on performance optimization and creating smooth mobile experiences.",
        skillsSubtitle: "React Native, Flutter, Swift",
        skills: ["React Native", "Flutter", "Swift"],
        talentsSubtitle: "Mobile Development, App Design",
        talents: ["Mobile Development", "App Design"],
        email: "member6@student.com",
        phone: "+1 234 567 8906"
    },
    {
        name: "Member 7",
        role: "Team Member 7",
        description: "Quality assurance specialist ensuring all projects meet high standards. Expert in testing and debugging.",
        detail: "Dedicated to maintaining code quality and catching bugs early. Implements comprehensive testing strategies to ensure reliable and bug-free applications.",
        skillsSubtitle: "Testing, Debugging, Automation",
        skills: ["Testing", "Debugging", "Automation"],
        talentsSubtitle: "Quality Assurance, Test Automation",
        talents: ["Quality Assurance", "Test Automation"],
        email: "member7@student.com",
        phone: "+1 234 567 8907"
    }
];

let currentMemberIndex = 0;

// DOM Elements
const prevBtn = document.getElementById('prevMember');
const nextBtn = document.getElementById('nextMember');
const currentMemberSpan = document.getElementById('currentMember');
const totalMembersSpan = document.getElementById('totalMembers');

// Update member display
function updateMemberDisplay() {
    const member = teamMembers[currentMemberIndex];
    
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberRole').textContent = member.role;
    document.getElementById('memberDescription').textContent = member.description;
    document.getElementById('memberDetail').textContent = member.detail;
    
    document.getElementById('skillsSubtitle').textContent = member.skillsSubtitle;
    const skillsContainer = document.getElementById('skillsTags');
    skillsContainer.innerHTML = '';
    member.skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'tag tag-skill';
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
    });
    
    document.getElementById('talentsSubtitle').textContent = member.talentsSubtitle;
    const talentsContainer = document.getElementById('talentsTags');
    talentsContainer.innerHTML = '';
    member.talents.forEach(talent => {
        const tag = document.createElement('span');
        tag.className = 'tag tag-talent';
        tag.textContent = talent;
        talentsContainer.appendChild(tag);
    });
    
    document.getElementById('memberEmail').textContent = member.email;
    document.getElementById('memberPhone').textContent = member.phone;
    
    currentMemberSpan.textContent = currentMemberIndex + 1;
}

// Navigation handlers
prevBtn.addEventListener('click', () => {
    currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
    updateMemberDisplay();
});

nextBtn.addEventListener('click', () => {
    currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
    updateMemberDisplay();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

// Set total members count
totalMembersSpan.textContent = teamMembers.length;

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Clear error
function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.classList.remove('show');
    errorElement.textContent = '';
}

// Input listeners
nameInput.addEventListener('input', () => clearError(nameInput, nameError));
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
messageInput.addEventListener('input', () => clearError(messageInput, messageError));

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Reset errors
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);
    
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        nameError.textContent = 'Name is required';
        nameError.classList.add('show');
        isValid = false;
    }
    
    // Validate email
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        emailError.textContent = 'Email is required';
        emailError.classList.add('show');
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        emailError.textContent = 'Please enter a valid email address';
        emailError.classList.add('show');
        isValid = false;
    }
    
    // Validate message
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        messageError.textContent = 'Message is required';
        messageError.classList.add('show');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        messageInput.classList.add('error');
        messageError.textContent = 'Message must be at least 10 characters';
        messageError.classList.add('show');
        isValid = false;
    }
    
    // Submit if valid
    if (isValid) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
            timestamp: new Date().toISOString()
        };
        
        console.log('Form submitted:', formData);
        
        // Store in localStorage (temporary - will be MySQL later)
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Show success message
        successMessage.style.display = 'flex';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// Initialize
updateMemberDisplay();

// Console log
console.log('%c📚 Student Portfolio Project', 'font-size: 18px; color: #4a90e2; font-weight: bold;');
console.log('%cBuilt with pure HTML, CSS, and JavaScript', 'font-size: 14px; color: #5f6368;');
console.log('%cReady for MySQL database integration!', 'font-size: 14px; color: #ff8400; font-weight: bold;');
