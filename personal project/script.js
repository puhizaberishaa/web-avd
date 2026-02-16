const pages = document.querySelectorAll(".page")
const sidebarItems = document.querySelectorAll(".sidebar li")
const navLinks = document.querySelectorAll(".navbar a")
const logoutBtn = document.querySelector(".logout-btn")
const tableBody = document.querySelector("tbody")
const cards = document.querySelectorAll(".card h2")
const form = document.getElementById("announcementForm")

let announcements = JSON.parse(localStorage.getItem("announcements")) || []

let students = [
{ name: "Deon Qirezi", class: "IX-2", avg: 4.6, status: "Active" },
{ name: "Arta Krasniqi", class: "VIII-1", avg: 4.9, status: "Active" },
{ name: "Jon Berisha", class: "IX-3", avg: 3.8, status: "Inactive" }
]

function showPage(id) {
pages.forEach(p => p.classList.add("hidden"))
document.getElementById(id).classList.remove("hidden")
}

function renderStudents() {
tableBody.innerHTML = ""
students.forEach(s => {
tableBody.innerHTML +=
&lt;tr&gt; &lt;td&gt;${s.name}&lt;/td&gt; &lt;td&gt;${s.class}&lt;/td&gt; &lt;td&gt;${s.avg}&lt;/td&gt; &lt;td class="${s.status === "Active" ? "active" : "inactive"}"&gt; ${s.status} &lt;/td&gt; &lt;/tr&gt;

})
}

function updateStats() {
cards[0].textContent = students.length
cards[3].textContent = announcements.length
}

renderStudents()
updateStats()

sidebarItems.forEach(item => {
item.addEventListener("click", () => {
const t = item.textContent.toLowerCase()
if (t.includes("dashboard")) showPage("dashboard")
if (t.includes("student")) showPage("students")
if (t.includes("teacher")) showPage("teachers")
if (t.includes("grade")) showPage("grades")
if (t.includes("schedule")) showPage("schedule")
if (t.includes("announcement")) showPage("announcements")
})
})

navLinks.forEach(link => {
link.addEventListener("click", e => {
e.preventDefault()
const t = link.textContent.toLowerCase()
if (t.includes("dashboard")) showPage("dashboard")
if (t.includes("student")) showPage("students")
if (t.includes("teacher")) showPage("teachers")
if (t.includes("grade")) showPage("grades")
if (t.includes("schedule")) showPage("schedule")
if (t.includes("announcement")) showPage("announcements")
})
})

logoutBtn.addEventListener("click", () => {
if (confirm("Are you sure you want to logout?")) {
localStorage.clear()
location.reload()
}
})

form.addEventListener("submit", e => {
e.preventDefault()
const title = form.querySelector('input').value
const content = form.querySelector('textarea').value
announcements.push({ title, content, date: new Date() })
localStorage.setItem("announcements", JSON.stringify(announcements))
updateStats()
form.reset()
renderAnnouncements()
})

const announcementsList = document.getElementById("announcementsContainer")

function renderAnnouncements() {
if (!announcementsList) return
announcementsList.innerHTML = ""

announcements.forEach(a =&gt; {
    const div = document.createElement("div")
    div.className = "announcement-item"
    div.innerHTML = `
        &lt;h3&gt;${a.title}&lt;/h3&gt;
        &lt;p&gt;${a.content}&lt;/p&gt;
        &lt;small&gt;Published: ${new Date(a.date).toLocaleString()}&lt;/small&gt;
    `
    announcementsList.appendChild(div)
})
}