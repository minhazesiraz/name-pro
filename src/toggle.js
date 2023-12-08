// Initialize the dropdown state
document.addEventListener('DOMContentLoaded', function () {
  const dropdownBtn = document.getElementById('dropdownBtn');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdownBtn.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
});

// Initialize the sidebar state
function initSidebar() {
  // Select the sidebar elements
  const sidebar1st = document.querySelector('.sidebar1st');
  const sidebar2nd = document.querySelector('.sidebar2nd');

  // Select the button that triggers the sidebar toggle
  const openButton = document.querySelector('.toggle-menu-button');

  // Add an event listener to the button
  openButton.addEventListener('click', () => {
    // Toggle classes for the first sidebar
    sidebar1st.classList.toggle('lg:visible');
    sidebar1st.classList.add('lg:basis-6/12');
    sidebar1st.classList.remove('lg:basis-2/12', 'lg:hidden');

    // Toggle classes for the second sidebar (if needed)
    sidebar2nd.classList.toggle('overflow-visible');
    sidebar2nd.classList.add('lg:basis-6/12');
    sidebar2nd.classList.remove('lg:basis-[83.3333333333%]');
  });
}

// Call the initialization function
initSidebar();

























// Initialize the sidebar state
function initSidebar() {
  const sidebar1st = document.querySelector('.sidebar1st');
  const sidebar2nd = document.querySelector('.sidebar2nd');
  const openButton = document.querySelector('.toggle-menu-button');
  
  openButton.addEventListener('click', () => {
    // Toggle the main sidebar
    sidebar1st.classList.toggle('lg:visible');
    sidebar1st.classList.add('lg:basis-6/12');
    sidebar1st.classList.remove('lg:basis-2/12', 'lg:hidden');
    

    // Toggle the second sidebar (if needed)
    sidebar2nd.classList.toggle('overflow-visible');
    sidebar2nd.classList.add('lg:basis-6/12');
    sidebar2nd.classList.remove('lg:basis-[83.3333333333%]');
  });
}

// Call the initialization function
initSidebar();







// function dropDown() {
//   document.querySelector('#submenu').classList.toggle('hidden');
//   document.querySelector('#arrow').classList.toggle('rotate-0');
// }

// function toggleMenu() {
//   document.querySelector('.sidebar').classList.toggle('left-[-300px]');
// }

// Initialize the sidebar state
// function initSidebar() {
//   const sidebar = document.querySelector('.sidebar');
//   const openButton = document.querySelector('.toggle-menu-button');
  
//   openButton.addEventListener('click', () => {
//     sidebar.classList.toggle('overflow-visible');
//     sidebar.classList.add('lg:basis-6/12');
//     sidebar.classList.remove('lg:basis-2/12');
//   });
// }