const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    
    // State (even though it's immutable b/c of const, it's still a state)
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add(theme);
    // ^The line above is called "Short-Circuiting."
    
    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    }

    // Events
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', handleThemeToggle)
    });
    
}

export default darkMode;
