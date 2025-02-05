export const questions = {
  questions: [
    // system-design-master Design Basics - Load Balancers
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "A __ load balancer distributes traffic based on server health checks and availability.",
      blanks: ["dynamic"],
      note: "Load Balancers"
    },
    // system-design-master Design Basics - Data Replication
    {
      id: 2,
      type: "multiple-choice",
      question: "Which type of data replication ensures all replicas contain the same data at any point in time?",
      options: ["Asynchronous", "Synchronous", "Eventual", "Partial"],
      correctAnswers: ["Synchronous"],
      multipleAnswers: false,
      note: "Data Replication"
    },
    // Cache Strategies
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The __ strategy writes data to both the cache and the database simultaneously.",
      blanks: ["write-through"],
      note: "Cache Strategies"
    },
    // Data Consistency
    {
      id: 4,
      type: "multiple-choice",
      question: "Which consistency model allows stale reads but guarantees updates eventually reach all replicas?",
      options: ["Eventual consistency", "Strong consistency", "Causal consistency", "Sequential consistency"],
      correctAnswers: ["Eventual consistency"],
      multipleAnswers: false,
      note: "Data Consistency"
    },
    // Rate Limiting
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ algorithm is commonly used for implementing rate limiting in APIs.",
      blanks: ["token bucket"],
      note: "Rate Limiting"
    },
    // Fault Tolerance
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of these techniques is used to make a system-design-master fault-tolerant?",
      options: ["Caching", "Redundancy", "Sharding", "Compression"],
      correctAnswers: ["Redundancy"],
      multipleAnswers: false,
      note: "Fault Tolerance"
    },
    // Database Indexing
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "A __ index improves the performance of text search operations in databases.",
      blanks: ["full-text"],
      note: "Database Indexing"
    },
    // Microservices Communication
    {
      id: 8,
      type: "multiple-choice",
      question: "Which protocol is commonly used for synchronous communication between microservices?",
      options: ["HTTP", "Kafka", "RabbitMQ", "Redis"],
      correctAnswers: ["HTTP"],
      multipleAnswers: false,
      note: "Microservices Communication"
    },
    // Distributed Logging
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "A distributed logging system-design-master often aggregates logs in a __ for centralized analysis.",
      blanks: ["log aggregator"],
      note: "Distributed Logging"
    },
    // API Design
    {
      id: 10,
      type: "multiple-choice",
      question: "Which HTTP method is used to retrieve data without causing side effects?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctAnswers: ["GET"],
      multipleAnswers: false,
      note: "API Design"
    },
    // CDN Basics
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "A __ CDN caches content closer to end-users to improve performance.",
      blanks: ["geographically distributed"],
      note: "CDN Basics"
    },
    // Pub-Sub Messaging
    {
      id: 12,
      type: "multiple-choice",
      question: "Which component in a pub-sub architecture delivers messages to subscribers?",
      options: ["Publisher", "Subscriber", "Broker", "Queue"],
      correctAnswers: ["Broker"],
      multipleAnswers: false,
      note: "Pub-Sub Messaging"
    },
    // Scaling Techniques
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "Scaling a system-design-master by adding more instances is called __ scaling.",
      blanks: ["horizontal"],
      note: "Scaling Techniques"
    },
    // API Rate Limiting
    {
      id: 14,
      type: "multiple-choice",
      question: "Which HTTP status code is returned when a rate limit is exceeded?",
      options: ["200", "400", "429", "503"],
      correctAnswers: ["429"],
      multipleAnswers: false,
      note: "API Rate Limiting"
    },
    // Monitoring and Metrics
    {
      id: 15,
      type: "matching",
      question: "Match the monitoring metrics with their descriptions:",
      leftItems: ["CPU Usage", "Latency", "Error Rate"],
      rightItems: [
        "Time taken to process requests",
        "Percentage of failed requests",
        "Percentage of CPU utilized"
      ],
      correctMatches: {
        "CPU Usage": "Percentage of CPU utilized",
        "Latency": "Time taken to process requests",
        "Error Rate": "Percentage of failed requests"
      },
      note: "Monitoring and Metrics"
    }
  ]
};
