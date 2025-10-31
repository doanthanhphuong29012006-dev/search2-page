document.addEventListener('DOMContentLoaded', () => {
    console.log('Forum Search Page Loaded.');
    document.querySelectorAll('.join_button').forEach(button => {
        button.addEventListener('click', (e) => {
            alert(`You are attempting to join the forum for: ${e.currentTarget.closest('.result_item').querySelector('.result_title').textContent}`);
        });
    });
});
