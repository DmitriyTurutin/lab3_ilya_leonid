// Get all startup elements
const startups = document.querySelectorAll('.startup-card');

// Add click event listener to each startup element
startups.forEach(startup => {
    // Get the clicked startup's more info button
    const moreInfoButton = startup.querySelector('.startup-info-button')
    moreInfoButton.addEventListener('click', e => {
        // Get the clicked startup's name, revenue, and description
        const name = startup.querySelector('.startup-name').textContent;
        const revenue = startup.querySelector('.startup-revenue').textContent;
        const description = startup.querySelector('.startup-description').textContent;

        // Create the dialog box element
        const dialog = document.createElement('div');
        dialog.classList.add('dialog');

        // Add the startup's name, revenue, and description to the dialog box
        dialog.innerHTML = `
        <p>Name: ${name}</p>
        <p>Revenue: ${revenue}</p>
        <p>Description: ${description}</p>
        `;

        // Add a close button to the dialog box
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', () => {
            dialog.remove();
            // remove the overlay
            document.querySelector('.overlay').remove();
        });
        dialog.appendChild(closeButton);

        // Add the dialog box to the page
        document.body.appendChild(dialog);

        // Add the overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    });
});

