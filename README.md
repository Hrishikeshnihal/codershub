# 🌐 Instagram Architecture Visualizer (CodersHub)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Project](https://img.shields.io/badge/Exhibition-Computer%20Engineering-blue?style=for-the-badge)](https://github.com/Hrishikeshnihal/codershub)

> An interactive educational web exhibition project exploring the **Engineering Backbone of Modern Social Media Connectivity**, breaking down Instagram's large-scale distributed system architecture with clickable hotspots and component deep dives.

---

## 📌 Project Overview

Built for a Computer Engineering technical exhibition, this project visually breaks down the complex microservices, caching layers, database strategies, and real-time networking protocols that power Instagram's global scale (serving billions of requests per second).

Users interact with an architectural diagram model and click key hotspot nodes to inspect each subsystem's technical responsibilities.

---

## 🧩 Architectural Subsystems Explored

| Subsystem Node | Technical Role & Mechanism |
|---|---|
| 👤 **User Profile Service** | Decoupled microservices architecture managing identity, profile metadata, follower graphs, and user preferences. |
| 📰 **News Feed Service** | High-throughput feed generation algorithms leveraging multi-tiered caching (Redis / Memcached) to assemble personalized timelines. |
| 💬 **Chat Service** | Low-latency duplex messaging engine leveraging persistent **WebSockets** for real-time delivery and presence states. |
| ⚖️ **Load Balancer** | Layer 4 & Layer 7 load distribution balancing traffic across application server pools to ensure high availability and zero downtime. |
| 🗄️ **Database Strategy (Polyglot)** | Relational **SQL** for ACID-critical transactional user records; distributed **NoSQL** for massive append-only post feeds, likes, and comment logs. |
| 🔔 **WebSockets & Push Notifications** | Event-driven notification pipelines transmitting real-time alerts without client polling. |
| 🔒 **Security & Privacy** | OAuth 2.0 / OpenID Connect authentication, rate-limiting gates, and end-to-end SSL/TLS cryptographic transport. |
| 🌍 **Geographically Distributed Network** | Multi-region global edge nodes and Content Delivery Networks (CDNs) caching media assets close to end-users to minimize latency. |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Hrishikeshnihal/codershub.git
cd codershub
```

### 2. Run Locally
This is a lightweight, zero-dependency static application:
```bash
# Open directly in your browser
start index.html

# Or serve via Python
python -m http.server 3000
```
Visit `http://localhost:3000` in any web browser.

---

## 📂 Project Structure

```text
codershub/
├── index.html        # Interactive exhibition layout with hotspot coordinates
├── style.css         # Responsive styling, hotspot pulsing animations & info cards
├── script.js         # Interactive hotspot click handling and dynamic DOM injection
├── model.jpg         # Instagram high-level architectural diagram
└── README.md         # Documentation
```

---

## 👤 Author

**Team CodersHub • Hrishikesh Nihal**
- GitHub: [@Hrishikeshnihal](https://github.com/Hrishikeshnihal)
- Email: nihalhrishikesh@gmail.com
