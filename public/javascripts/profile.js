document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get updated values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here you can implement code to update user information
        // For now, let's just log the values
        console.log("Updated Email:", email);
        console.log("Updated Password:", password);

        // You can also display a success message to the user
        alert("User information updated successfully!");
    });
});
