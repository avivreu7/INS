// Set minimum date to today for the date inputs
const today = new Date().toISOString().split('T')[0];
document.getElementById("startDate").setAttribute("min", today);
document.getElementById("endDate").setAttribute("min", today);

// Ensure end date is after start date
document.getElementById("startDate").addEventListener("change", function() {
  const startDate = this.value;
  document.getElementById("endDate").setAttribute("min", startDate);
  
  // If current end date is before new start date, update it
  const endDateInput = document.getElementById("endDate");
  if (endDateInput.value && endDateInput.value < startDate) {
    endDateInput.value = startDate;
  }
});

// Form submission
document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const travelers = document.getElementById("travelers").value;
  const destination = document.getElementById("destination").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  
  // Format dates to dd/mm/yyyy for better readability in WhatsApp
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  
  // Create WhatsApp message
  const message = `שלום צביקה, אני מעוניין בביטוח נסיעות לחו"ל:%0A%0Aשם: ${name}%0Aטלפון: ${phone}%0Aמספר נוסעים: ${travelers}%0Aיעד: ${destination}%0Aתאריך יציאה: ${formatDate(startDate)}%0Aתאריך חזרה: ${formatDate(endDate)}%0A%0Aאשמח לקבל הצעת מחיר. תודה!`;
  
  // Open WhatsApp with the message
  const whatsappUrl = `https://wa.me/972523376220?text=${message}`;
  window.open(whatsappUrl, "_blank");
});
