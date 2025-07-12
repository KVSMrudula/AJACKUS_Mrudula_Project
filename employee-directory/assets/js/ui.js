import { Data } from './data.js';

export const UI = {
  renderList(list, container) {
    const perPage = parseInt(document.getElementById("perPage")?.value || 10);
    const page = parseInt(localStorage.getItem("currentPage") || 1);
    const start = (page - 1) * perPage;
    const paginated = list.slice(start, start + perPage);

    container.innerHTML = '';
    paginated.forEach(emp => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p>
          <span class="label department">${emp.department}</span>
          <span class="label role">${emp.role}</span>
        </p>
        <div class="card-actions">
          <button class="edit" data-id="${emp.id}">✏️ Edit</button>
          <button class="delete" data-id="${emp.id}">🗑 Delete</button>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach edit/delete buttons
    container.querySelectorAll(".edit").forEach(btn => {
      const id = btn.dataset.id;
      btn.onclick = () => {
        const emp = Data.find(id);
        if (!emp) return;
        localStorage.setItem("editId", id);
        const form = document.getElementById("addForm");
        Object.entries(emp).forEach(([k, v]) => {
          if (form[k]) form[k].value = v;
        });
        document.querySelector("#addModal h2").textContent = "Edit Employee";
        document.querySelector("#addForm button.primary").textContent = "Update";
        document.getElementById("addModal").classList.remove("hidden");
      };
    });

    container.querySelectorAll(".delete").forEach(btn => {
      const id = btn.dataset.id;
      btn.onclick = () => {
        Data.remove(id);
        document.dispatchEvent(new Event("dataUpdated"));
      };
    });

    // Render pagination
    const totalPages = Math.ceil(list.length / perPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      if (i === page) pageBtn.classList.add("active");
      pageBtn.onclick = () => {
        localStorage.setItem("currentPage", i);
        document.dispatchEvent(new Event("dataUpdated"));
      };
      pagination.appendChild(pageBtn);
    }
  }
};
