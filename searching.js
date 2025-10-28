// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Basic setup code (currently not needed for the visual structure)
    console.log('Forum Search Page Loaded.');

    // Example of a basic interaction handler (e.g., for the Join button)
    document.querySelectorAll('.join-button').forEach(button => {
        button.addEventListener('click', (e) => {
            alert(`You are attempting to join the forum for: ${e.currentTarget.closest('.result-item').querySelector('.result-title').textContent}`);
            // In a real app, this would handle the join logic.
        });
    });
});