export default function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert("The table was booked! Have a nice day :)");
  });
}