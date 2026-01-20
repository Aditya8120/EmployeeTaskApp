const employees = [
  {
    id: 1,
    name: "Aditya Johari",
    email: "employee1@company.com",
    password: "123",

    taskSummary: {
      total: 3,
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        id: 1,
        title: "Prepare sales report",
        description: "Create monthly sales report for March",
        date: "2026-01-02",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Client follow-up",
        description: "Follow up with pending client emails",
        date: "2026-01-03",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "Team meeting",
        description: "Attend weekly sync-up meeting",
        date: "2026-01-05",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    name: "Rohan Verma",
    email: "employee2@company.com",
    password: "123",

    taskSummary: {
      total: 4,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        id: 1,
        title: "Bug fixing",
        description: "Fix login page validation issues",
        date: "2026-01-01",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Code review",
        description: "Review pull requests from team",
        date: "2026-01-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "Update documentation",
        description: "Update API documentation",
        date: "2026-01-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        id: 4,
        title: "Deploy build",
        description: "Deploy latest build to staging",
        date: "2026-01-07",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    name: "Priya Singh",
    email: "employee3@company.com",
    password: "123",

    taskSummary: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        id: 1,
        title: "Design banner",
        description: "Create promotional banner for website",
        date: "2026-01-02",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Social media post",
        description: "Schedule Instagram post",
        date: "2026-01-03",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "Client feedback",
        description: "Analyze feedback from last campaign",
        date: "2026-01-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    name: "Aman Gupta",
    email: "employee4@company.com",
    password: "123",

    taskSummary: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 1,
        title: "Prepare PPT",
        description: "Prepare presentation for client demo",
        date: "2026-01-02",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Email follow-up",
        description: "Send follow-up emails to clients",
        date: "2026-01-04",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "Requirement analysis",
        description: "Analyze client requirements",
        date: "2026-01-06",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    name: "Neha Sharma",
    email: "employee5@company.com",
    password: "123",

    taskSummary: {
      total: 4,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        id: 1,
        title: "UI improvements",
        description: "Improve dashboard UI",
        date: "2026-01-03",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Fix responsiveness",
        description: "Fix mobile responsiveness issues",
        date: "2026-01-05",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 3,
        title: "Design review",
        description: "Review design with team",
        date: "2026-01-06",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 4,
        title: "Update assets",
        description: "Update design assets library",
        date: "2026-01-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 6,
    name: "Sahil Mehta",
    email: "employee6@company.com",
    password: "123",

    taskSummary: {
      total: 3,
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        id: 1,
        title: "Server monitoring",
        description: "Monitor server performance",
        date: "2026-01-02",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Backup logs",
        description: "Take backup of server logs",
        date: "2026-01-04",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "Fix deployment issue",
        description: "Resolve deployment failure issue",
        date: "2026-01-06",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    name: "Admin User",
    email: "admin@company.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
