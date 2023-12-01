document.querySelector(".sidebar .toggle-btn").addEventListener("click", function() {
  document.querySelector(".sidebar").classList.toggle("active");
});

// The toggle method of classList is used to add a class if it doesn't exist on the element, and if it already exists, it removes it.

// This creates a toggling effect. If the sidebar is currently visible (having the active class) and you click the element with the class toggle-btn, the active class will be removed, hiding the sidebar. If the sidebar is not visible (not having the active class), clicking the element with the class toggle-btn will add the active class, making the sidebar visible.

