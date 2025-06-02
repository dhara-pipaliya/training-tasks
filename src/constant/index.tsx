import { ITask } from "../components/pages/tasks";
import { IOrder } from "../context/orderSundae";

export const tasks: ITask[] = [
  {
    id: 1,
    title: "Counter App",
    description:
      "Count the value using a class component with increment and decrement, state methods,and updates the value using the setstate method.",
  },
  {
    id: 2,
    title: "Greeting App",
    description:
      " Create a Greeting component that takes a name as a prop and displays a personalized message.",
  },
  {
    id: 3,
    title: "Form Handling",
    description:
      "Create a form with validation that stores and displays data on submission.",
  },
  {
    id: 4,
    title: "Todo List",
    description:
      "Build a simple todo list where users can add and remove tasks using state and list rendering.",
  },
  {
    id: 5,
    title: "e-commerce",
    description:
      "Build a simple todo list where users can add and remove tasks using state and list rendering.",
  },
  {
    id: 6,
    title: "User TodoList",
    description:
      "User Details using material UI component with use useReducer() hook for state management",
  },
  {
    id: 7,
    title: "User Management",
    description:
      "Practice CRUD operations, caching, and optimistic updates using Redux",
  },
];

export const scoops: IOrder[] = [
  {
    id: 1,
    img: "/images/chocolate.png",
    name: "Chocolate",
    price: 10,
    quantity: 0,
  },
  {
    id: 2,
    img: "/images/vanilla.png",
    name: "Vanilla",
    price: 20,
    quantity: 0,
  },
  {
    id: 3,
    img: "/images/mintChip.png",
    name: "Mint Chip",
    price: 30,
    quantity: 0,
  },
];

export const toppings: IOrder[] = [
  {
    id: 1,
    img: "/images/gummiBears.png",
    name: "Gummi bears",
    price: 40,
    quantity: 0,
  },
  {
    id: 2,
    img: "/images/coldcherrie.png",
    name: "Coldcherrie",
    price: 50,
    quantity: 0,
  },
  {
    id: 3,
    img: "/images/hotfudge.png",
    name: "Hot Fudge",
    price: 60,
    quantity: 0,
  },
  {
    id: 4,
    img: "/images/caramel.png",
    name: "Caramel",
    price: 70,
    quantity: 0,
  },
  {
    id: 5,
    img: "/images/cherrie.png",
    name: "Cherrie",
    price: 80,
    quantity: 0,
  },
  {
    id: 6,
    img: "/images/strawberry.png",
    name: "Strawberry",
    price: 90,
    quantity: 0,
  },
];
