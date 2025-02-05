export const questions = {
  questions: [
    // system Design Basics - Scalability
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "Scaling a system by increasing the size of the server is called __ scaling.",
      blanks: ["vertical"],
      note: "Scalability"
    },
    // system Design Basics - Load Balancers
    {
      id: 2,
      type: "multiple-choice",
      question: "Which component distributes user requests across multiple servers?",
      options: ["Load Balancer", "Database", "Cache", "API Gateway"],
      correctAnswers: ["Load Balancer"],
      multipleAnswers: false,
      note: "Load Balancers"
    },
    // Caching Basics
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "A __ cache stores frequently accessed data for faster retrieval.",
      blanks: ["memory"],
      note: "Caching"
    },
    // Data Storage
    {
      id: 4,
      type: "multiple-choice",
      question: "Which database type is best suited for storing relations between entities?",
      options: ["Relational Database", "NoSQL Database", "File Storage", "Key-Value Store"],
      correctAnswers: ["Relational Database"],
      multipleAnswers: false,
      note: "Data Storage"
    },
    // Microservices Basics
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "A __ architecture breaks an application into smaller, independent services.",
      blanks: ["microservices"],
      note: "Microservices"
    },
    // Rate Limiting Basics
    {
      id: 6,
      type: "multiple-choice",
      question: "Which feature is used to control the number of API requests a user can make?",
      options: ["Rate Limiting", "Load Balancing", "Caching", "Replication"],
      correctAnswers: ["Rate Limiting"],
      multipleAnswers: false,
      note: "Rate Limiting"
    },
    // Fault Tolerance Basics
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "A that continues to work even if a component fails is __ tolerant.",
      blanks: ["fault"],
      note: "Fault Tolerance"
    },
    // Content Delivery Networks
    {
      id: 8,
      type: "multiple-choice",
      question: "Which system is used to deliver content from servers closer to users?",
      options: ["CDN", "Database", "Load Balancer", "Queue"],
      correctAnswers: ["CDN"],
      multipleAnswers: false,
      note: "Content Delivery Networks"
    },
    // Distributed system Basics
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "A __ system consists of multiple connected computers working together.",
      blanks: ["distributed"],
      note: "Distributed system"
    },
    // API Gateways
    {
      id: 10,
      type: "multiple-choice",
      question: "Which component handles API requests and routes them to the right services?",
      options: ["API Gateway", "Cache", "CDN", "Broker"],
      correctAnswers: ["API Gateway"],
      multipleAnswers: false,
      note: "API Gateways"
    },
    // Logging and Monitoring
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "Monitoring tools help track __ to detect issues in real-time.",
      blanks: ["metrics"],
      note: "Monitoring"
    },
    // Database Basics
    {
      id: 12,
      type: "multiple-choice",
      question: "Which type of database is designed to handle structured data with tables?",
      options: ["Relational Database", "NoSQL Database", "Graph Database", "File system"],
      correctAnswers: ["Relational Database"],
      multipleAnswers: false,
      note: "Databases"
    },
    // Message Queues
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "A __ queue is used to manage communication between distributed services.",
      blanks: ["message"],
      note: "Message Queues"
    },
    // High Availability
    {
      id: 14,
      type: "multiple-choice",
      question: "What ensures that a system is available even during server failures?",
      options: ["Redundancy", "Load Balancer", "Database", "Logging"],
      correctAnswers: ["Redundancy"],
      multipleAnswers: false,
      note: "High Availability"
    },
    // Data Replication Basics
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "Data __ ensures copies of data are stored across multiple servers.",
      blanks: ["replication"],
      note: "Data Replication"
    }
  ]
};
