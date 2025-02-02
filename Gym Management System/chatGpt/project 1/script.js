document.addEventListener("DOMContentLoaded", () => {
    const memberForm = document.getElementById("memberForm");
    const memberList = document.getElementById("memberList");
    const toggleDarkModeBtn = document.getElementById("toggleDarkMode");

    // Load saved members from local storage
    let members = JSON.parse(localStorage.getItem("members")) || [];

    function displayMembers() {
        memberList.innerHTML = ""; // Clear previous content
        members.forEach((member, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.age}</td>
                <td>${member.plan}</td>
                <td><button class="delete-btn" onclick="deleteMember(${index})">Delete</button></td>
            `;
            memberList.appendChild(row);
        });
    }

    // Add new member
    memberForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const plan = document.getElementById("plan").value;

        const newMember = { name, age, plan };
        members.push(newMember);
        localStorage.setItem("members", JSON.stringify(members));

        memberForm.reset();
        displayMembers();
    });

    // Delete member function
    window.deleteMember = (index) => {
        members.splice(index, 1);
        localStorage.setItem("members", JSON.stringify(members));
        displayMembers();
    };

    // Dark Mode Toggle
    toggleDarkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Display members on load
    displayMembers();
});
