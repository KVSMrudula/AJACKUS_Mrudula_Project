import { Data } from './data.js';
import { UI } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  const empList = document.getElementById('employeeList');
  const addForm = document.getElementById('addForm');
  const addBtn = document.getElementById('addEmployeeBtn');
  const addModal = document.getElementById('addModal');
  const cancelAdd = document.getElementById('cancelAdd');

  // ✅ FILTER + SORT + PAGINATE
  const applyFilters = () => {
    const q = document.getElementById("search")?.value.toLowerCase() || "";
    const name = document.getElementById("filterName").value.toLowerCase();
    const dept = document.getElementById("filterDepartment").value;
    const role = document.getElementById("filterRole").value;
    const sortKey = document.getElementById("sortBy")?.value;

    let results = Data.getAll().filter(e => {
      const matchSearch = `${e.firstName} ${e.lastName} ${e.email}`.toLowerCase().includes(q);
      const matchName = !name || e.firstName.toLowerCase().includes(name);
      const matchDept = !dept || e.department === dept;
      const matchRole = !role || e.role === role;
      return matchSearch && matchName && matchDept && matchRole;
    });

    // ✅ SORT
    if (sortKey) {
      results.sort((a, b) =>
        (a[sortKey] || "").toLowerCase().localeCompare((b[sortKey] || "").toLowerCase())
      );
    }

    UI.renderList(results, empList);
  };

  // ✅ INIT
  UI.renderList(Data.getAll(), empList);
  applyFilters();

  // 🔍 Filters + Sort
  document.getElementById("search")?.addEventListener("input", applyFilters);
  document.getElementById("sortBy")?.addEventListener("change", applyFilters);
  document.getElementById("perPage")?.addEventListener("change", () => {
    localStorage.setItem("currentPage", 1);
    applyFilters();
  });

  document.getElementById("filterBtn")?.addEventListener("click", () =>
    document.getElementById("filterSidebar").classList.toggle("hidden")
  );
  document.getElementById("closeFilter")?.addEventListener("click", () =>
    document.getElementById("filterSidebar").classList.add("hidden")
  );
  document.getElementById("applyFilters")?.addEventListener("click", applyFilters);
  document.getElementById("clearFilters")?.addEventListener("click", () => {
    document.getElementById("filterName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";
    document.getElementById("sortBy").value = "";
    localStorage.setItem("currentPage", 1);
    applyFilters();
  });

  // ➕ Open Add Modal
  addBtn?.addEventListener('click', () => {
    localStorage.removeItem("editId");
    addForm.reset();
    document.querySelector("#addModal h2").textContent = "Add Employee";
    document.querySelector("#addForm button.primary").textContent = "Add";
    addModal.classList.remove("hidden");
  });

  // ❌ Cancel Modal
  cancelAdd?.addEventListener('click', () => {
    addForm.reset();
    addModal.classList.add('hidden');
    localStorage.removeItem("editId");
  });

  // 💾 Add/Edit Submit
  addForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(addForm));
    const editId = localStorage.getItem("editId");

    if (editId) {
      Data.update(editId, data);
      localStorage.removeItem("editId");
    } else {
      Data.add({ id: crypto.randomUUID(), ...data });
    }

    addForm.reset();
    addModal.classList.add('hidden');

    // Reset modal UI
    document.querySelector("#addModal h2").textContent = "Add Employee";
    document.querySelector("#addForm button.primary").textContent = "Add";

    // Clear filters
    document.getElementById("search").value = "";
    document.getElementById("filterName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";
    document.getElementById("sortBy").value = "";
    localStorage.setItem("currentPage", 1);

    applyFilters();
  });

  // 🔁 Re-apply filters on delete or page change
  document.addEventListener("dataUpdated", applyFilters);
});
