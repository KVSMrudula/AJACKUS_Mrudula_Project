export const Data = (() => {
  const seed = [
    { id: crypto.randomUUID(), firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", department: "Engineering", role: "Full Stack Developer" },
    { id: crypto.randomUUID(), firstName: "Bob", lastName: "Lee", email: "bob.lee@example.com", department: "Marketing", role: "Marketing Manager" },
    { id: crypto.randomUUID(), firstName: "Carol", lastName: "Smith", email: "carol.smith@example.com", department: "IT", role: "DevOps Engineer" },
    { id: crypto.randomUUID(), firstName: "David", lastName: "Brown", email: "david.brown@example.com", department: "Academics", role: "Lecturer" },
    { id: crypto.randomUUID(), firstName: "Robert", lastName: "Miller", email: "robert.miller@company.com", department: "Operations", role: "Project Manager" },
    { id: crypto.randomUUID(), firstName: "Lisa", lastName: "Wilson", email: "lisa.wilson@company.com", department: "Marketing", role: "Content Specialist" },
    { id: crypto.randomUUID(), firstName: "James", lastName: "Moore", email: "james.moore@company.com", department: "Engineering", role: "DevOps Engineer" },
    { id: crypto.randomUUID(), firstName: "Amanda", lastName: "Taylor", email: "amanda.taylor@company.com", department: "Sales", role: "Sales Manager" },
    { id: crypto.randomUUID(), firstName: "Christopher", lastName: "Anderson", email: "christopher.anderson@company.com", department: "Finance", role: "Senior Accountant" },
    { id: crypto.randomUUID(), firstName: "Michelle", lastName: "Thomas", email: "michelle.thomas@company.com", department: "HR", role: "Recruiter" },
    { id: crypto.randomUUID(), firstName: "Kevin", lastName: "Jackson", email: "kevin.jackson@company.com", department: "Engineering", role: "Backend Developer" },
    { id: crypto.randomUUID(), firstName: "Nicole", lastName: "White", email: "nicole.white@company.com", department: "Marketing", role: "Digital Marketing Specialist" },
    { id: crypto.randomUUID(), firstName: "Daniel", lastName: "Harris", email: "daniel.harris@company.com", department: "Operations", role: "Project Coordinator" },
    { id: crypto.randomUUID(), firstName: "Rachel", lastName: "Martin", email: "rachel.martin@company.com", department: "Sales", role: "Account Executive" },
    { id: crypto.randomUUID(), firstName: "Mark", lastName: "Thompson", email: "mark.thompson@company.com", department: "Engineering", role: "Technical Lead" },
    { id: crypto.randomUUID(), firstName: "Jessica", lastName: "Garcia", email: "jessica.garcia@company.com", department: "Finance", role: "Budget Analyst" },
    { id: crypto.randomUUID(), firstName: "Andrew", lastName: "Martinez", email: "andrew.martinez@company.com", department: "HR", role: "HR Manager" },
    { id: crypto.randomUUID(), firstName: "Stephanie", lastName: "Robinson", email: "stephanie.robinson@company.com", department: "Marketing", role: "Brand Manager" },
    { id: crypto.randomUUID(), firstName: "Ryan", lastName: "Clark", email: "ryan.clark@company.com", department: "Engineering", role: "Full Stack Developer" },
    { id: crypto.randomUUID(), firstName: "Lauren", lastName: "Rodriguez", email: "lauren.rodriguez@company.com", department: "Operations", role: "Quality Assurance Specialist" },
    { id: crypto.randomUUID(), firstName: "Brian", lastName: "Lewis", email: "brian.lewis@company.com", department: "Sales", role: "Business Development Manager" },
    { id: crypto.randomUUID(), firstName: "Megan", lastName: "Lee", email: "megan.lee@company.com", department: "Finance", role: "Controller" },
    { id: crypto.randomUUID(), firstName: "Tyler", lastName: "Walker", email: "tyler.walker@company.com", department: "Engineering", role: "Software Architect" },
    { id: crypto.randomUUID(), firstName: "Mrudula", lastName: "k", email: "k.walker@company.com", department: "Engineering", role: "IT" },
    { id: crypto.randomUUID(), firstName: "Neha", lastName: "K", email: "k.walker@company.com", department: "Engineering", role: "Academics" }

  ];

  let employees = JSON.parse(localStorage.getItem("employees"));

  // ✅ Only seed if localStorage is empty or corrupted
  if (!Array.isArray(employees) || employees.length === 0) {
    employees = seed;
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  const save = () => localStorage.setItem("employees", JSON.stringify(employees));

  return {
    getAll: () => [...employees],
    add: (emp) => { employees.push(emp); save(); },
    update: (id, updates) => {
      const i = employees.findIndex(e => e.id === id);
      if (i !== -1) { employees[i] = { ...employees[i], ...updates }; save(); }
    },
    remove: (id) => { employees = employees.filter(e => e.id !== id); save(); },
    find: id => employees.find(e => e.id === id)
  };
})();
