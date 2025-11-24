const table = document.getElementById("userTable");

async function loadUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();

    table.innerHTML = data.map(user => `
        <tr>
            <td><input value="${user.name}" id="name-${user.id}"></td>
            <td><input value="${user.email}" id="email-${user.id}"></td>
            <td>
                <button onclick="updateUser(${user.id})">Update</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}

async function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    loadUsers();
}

async function updateUser(id) {
    const name = document.getElementById(`name-${id}`).value;
    const email = document.getElementById(`email-${id}`).value;

    await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    loadUsers();
}

async function deleteUser(id) {
    await fetch(`/api/users/${id}`, { method: "DELETE" });
    loadUsers();
}

loadUsers();
