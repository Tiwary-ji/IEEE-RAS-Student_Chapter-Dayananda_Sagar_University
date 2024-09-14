document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2024;
    const dropdown = document.getElementById("excom-dropdown");

    if (dropdown) {
        for (let year = startYear; year <= currentYear; year++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = `Execom${year}.html`;
            a.textContent = `ExeCom ${year}`;
            li.appendChild(a);
            dropdown.appendChild(li);
        }

        // Add event listener to toggle dropdown on click
        const dropdownButton = document.querySelector('.dropdown > a'); // Select the anchor within the dropdown
        dropdownButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const dropdownContent = dropdownButton.nextElementSibling; // Get the next sibling which is the dropdown content
            if (dropdownContent) {
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            } else {
                console.error("Dropdown content not found.");
            }
        });
    } else {
        console.error("Dropdown element not found.");
    }
});

//add an event listener for hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navPanel = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        if (navPanel.style.display === 'block') {
            navPanel.style.display = 'none';
        } else {
            navPanel.style.display = 'block';
        }
    });
});

//event

