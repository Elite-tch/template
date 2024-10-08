
  const ticketTypeSelect = document.getElementById('ticket_type'); // Make sure this is declared
  const ticketQuantitySelect = document.getElementById('ticket_quantity');
  const totalAmountDiv = document.getElementById('total_amount');
  
  // Function to calculate total
  function calculateTotal() {
      const ticketPrice = parseInt(ticketTypeSelect.value);
      const ticketQuantity = parseInt(ticketQuantitySelect.value);
  
      // Check if both price and quantity are valid numbers
      if (!isNaN(ticketPrice) && !isNaN(ticketQuantity)) {
          const total = ticketPrice * ticketQuantity;
          totalAmountDiv.textContent = `Total: ₦${total}`;
      } else {
          totalAmountDiv.textContent = `Total: ₦0`;
      }
  }
  
  // Listen for changes in both selects
  ticketTypeSelect.addEventListener('change', calculateTotal);
  ticketQuantitySelect.addEventListener('change', calculateTotal);
 
  
  
  