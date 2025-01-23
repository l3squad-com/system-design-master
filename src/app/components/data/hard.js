export const questions = {
  questions: [
    // Advanced System Design - CAP Theorem
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "The __ theorem states that a distributed system can only guarantee two out of three properties: Consistency, Availability, and Partition Tolerance.",
      blanks: ["CAP"],
      note: "CAP Theorem"
    },
    // Advanced Load Balancer
    {
      id: 2,
      type: "multiple-choice",
      question: "Which algorithm is most commonly used by load balancers for evenly distributing traffic?",
      options: ["Round Robin", "Least Connections", "Hashing", "Random"],
      correctAnswers: ["Round Robin"],
      multipleAnswers: false,
      note: "Load Balancer"
    },
    // Data Partitioning
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In horizontal partitioning, data is divided across multiple __.",
      blanks: ["shards"],
      note: "Data Partitioning"
    },
    // Distributed Systems - Consensus
    {
      id: 4,
      type: "multiple-choice",
      question: "Which consensus algorithm is widely used in distributed systems to maintain consistency?",
      options: ["Raft", "Paxos", "Dijkstra's Algorithm", "A*"],
      correctAnswers: ["Raft", "Paxos"],
      multipleAnswers: true,
      note: "Consensus Algorithms"
    },
    // Caching Strategies
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ cache eviction policy removes the least recently used items.",
      blanks: ["LRU"],
      note: "Caching Strategies"
    },
    // Advanced Microservices
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is a drawback of a microservices architecture?",
      options: [
        "Improved scalability",
        "Increased operational complexity",
        "Ease of deployment",
        "Loose coupling"
      ],
      correctAnswers: ["Increased operational complexity"],
      multipleAnswers: false,
      note: "Microservices"
    },
    // Event-Driven Architecture
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "In event-driven architecture, a __ publishes events and __ consumes them.",
      blanks: ["producer", "consumer"],
      note: "Event-Driven Architecture"
    },
    // Database Sharding
    {
      id: 8,
      type: "multiple-choice",
      question: "What is a potential downside of database sharding?",
      options: [
        "Reduced write performance",
        "Increased complexity in queries",
        "Better scalability",
        "Improved read performance"
      ],
      correctAnswers: ["Increased complexity in queries"],
      multipleAnswers: false,
      note: "Database Sharding"
    },
    // Distributed System Challenges
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "Distributed systems are prone to __ failures, where components might appear to fail intermittently.",
      blanks: ["network"],
      note: "Distributed System Challenges"
    },
    // High Availability
    {
      id: 10,
      type: "multiple-choice",
      question: "Which of these strategies helps achieve high availability in distributed systems?",
      options: [
        "Single points of failure",
        "Redundancy",
        "Serial processing",
        "Centralized data storage"
      ],
      correctAnswers: ["Redundancy"],
      multipleAnswers: false,
      note: "High Availability"
    },
    // Message Queue - Dead Letter Queue
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "A __ queue holds messages that cannot be processed after a specific number of retries.",
      blanks: ["dead letter"],
      note: "Message Queue"
    },
    // Consistency Models
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of these consistency models ensures that all replicas eventually converge to the same state?",
      options: ["Strong consistency", "Eventual consistency", "Causal consistency", "Linearizability"],
      correctAnswers: ["Eventual consistency"],
      multipleAnswers: false,
      note: "Consistency Models"
    },
    // Distributed Transactions
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ protocol is used to ensure atomicity in distributed transactions.",
      blanks: ["two-phase commit"],
      note: "Distributed Transactions"
    },
    // Advanced CDNs
    {
      id: 14,
      type: "multiple-choice",
      question: "What is one challenge of using a CDN?",
      options: [
        "Reduced latency",
        "Content propagation delays",
        "Improved caching",
        "Load balancing"
      ],
      correctAnswers: ["Content propagation delays"],
      multipleAnswers: false,
      note: "Content Delivery Networks"
    },
    // Monitoring and Observability
    {
      id: 15,
      type: "matching",
      question: "Match the observability tools with their purposes",
      leftItems: ["Metrics", "Logs", "Tracing"],
      rightItems: [
        "Shows resource utilization over time",
        "Provides detailed records of system events",
        "Tracks the flow of requests across services"
      ],
      correctMatches: {
        Metrics: "Shows resource utilization over time",
        Logs: "Provides detailed records of system events",
        Tracing: "Tracks the flow of requests across services"
      },
      note: "Monitoring and Observability"
    }
  ]
};
