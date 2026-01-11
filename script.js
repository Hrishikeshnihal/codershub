function showInfo(type) {
  const box = document.getElementById("infoBox");

  const data = {
    profile: {
      title: "User Profile Service",
      text: "Manages user data such as profile details, followers, and settings using microservices architecture."
    },
    feed: {
      title: "News Feed Service",
      text: "Generates personalized feeds using scalable backend services and caching mechanisms."
    },
    chat: {
      title: "Chat Service",
      text: "Handles real-time messaging using WebSockets for instant communication."
    },
    load: {
      title: "Load Balancer",
      text: "Distributes incoming traffic evenly across servers to ensure high availability and fault tolerance."
    },
    database: {
      title: "Database Strategy",
      text: "Uses SQL for user data and NoSQL for posts, likes, and comments to handle massive scale."
    },
    websocket: {
      title: "WebSockets & Notifications",
      text: "Provides real-time updates such as messages, likes, and notifications without page refresh."
    },
    security: {
      title: "Security & Privacy",
      text: "Uses OAuth for authentication and SSL/TLS encryption to protect user data."
    },
    network: {
      title: "Geographically Distributed Network",
      text: "Multiple global data centers reduce latency and ensure faster content delivery worldwide."
    }
  };

  box.innerHTML = `<h2>${data[type].title}</h2><p>${data[type].text}</p>`;
}
