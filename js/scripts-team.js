function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isDropdownVisible = dropdown.style.display === "block";
    
    dropdown.style.display = isDropdownVisible ? "none" : "block";

    if (!isDropdownVisible) {
        const currentPerson = dropdown.closest(".person");
        const nextPerson = currentPerson.nextElementSibling;
        if (nextPerson) {
            nextPerson.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            currentPerson.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }
}