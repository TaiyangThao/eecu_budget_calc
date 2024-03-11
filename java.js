
  // Add click event listener to each list item
  document.querySelectorAll('#careerList li').forEach(item => {
    item.addEventListener('click', event => {
      // Retrieve the salary data from the clicked list item
      const salary = item.getAttribute('data-salary');
      // Display the salary in an alert box
      alert(`Salary: $${salary}`);
    });
  });

  document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve input values
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const savingsGoal = parseFloat(document.getElementById('savingsGoal').value);
    const selectedCareer = parseFloat(document.getElementById('careerSelect').value);
    
    // Calculate budget
    const totalIncome = monthlyIncome * 12;
    const totalExpenses = monthlyExpenses * 12;
    const netIncome = totalIncome - totalExpenses;
    const totalSavings = netIncome + savingsGoal;
    
    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Total Income: $${totalIncome.toLocaleString()}<br>
                               Total Expenses: $${totalExpenses.toLocaleString()}<br>
                               Net Income: $${netIncome.toLocaleString()}<br>
                               Total Savings: $${totalSavings.toLocaleString()}`;
  });