import { Book } from "./Book";
import "./index.css";

const books = [
  {
    bookName: "Structure and Interpretation of Computer Program",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585371/Other/it_othe9w.jpg",
    infoUrl:
      "https://www.google.com/books/edition/Structure_and_Interpretation_of_Computer/iL34DwAAQBAJ?hl=en&gbpv=0",
  },
  {
    bookName: "Computer Systems: A Programmer's Perspective",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716584375/Other/csps_dgkayq.png",
    infoUrl:
      "https://www.google.com/books/edition/Computer_Systems/lX8k0AEACAAJ?hl=en",
  },
  {
    bookName: "Clean Code: A Handbook of Agile Software Craftsmanship",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585302/Other/rt_rbjyen.jpg",
    infoUrl:
      "https://www.google.com/books/edition/Clean_Code/_i6bDeoCQzsC?hl=en&gbpv=0",
  },
  {
    bookName: "The Pragmatic Programmer",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585253/Other/awf_ne3sdj.jpg",
    infoUrl:
      "https://www.google.com/books/edition/The_Pragmatic_Programmer/5wBQEp6ruIAC?hl=en&gbpv=0",
  },
  {
    bookName: "Introduction to Algorithms",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585142/Other/adsfasf_tcezpz.jpg",
    infoUrl:
      "https://www.google.com/books/edition/Introduction_to_Algorithms_third_edition/F3anBQAAQBAJ?hl=en&gbpv=0",
  },
  {
    bookName: "Designing Data-Intensive Applications",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585223/Other/ddia_h1iafb.jpg",
    infoUrl:
      "https://www.google.com/books/edition/Designing_Data_Intensive_Applications/p1heDgAAQBAJ?hl=en&gbpv=0",
  },
  {
    bookName: "Patterns of Enterprise Application Architecture",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585070/Other/eaf_qvryaq.jpg",
    infoUrl:
      "https://www.google.com/books/edition/Patterns_of_Enterprise_Application_Archi/Jl5rkQnbfAIC?hl=en&gbpv=0",
  },
  {
    bookName: "You Don't Know JS Yet",
    imgUrl:
      "https://res.cloudinary.com/dywd7jbbl/image/upload/v1716585915/Other/eafe_rkkvei.jpg",
    infoUrl:
      "https://www.google.com/books/edition/You_Don_t_Know_Js/V8h1swEACAAJ?hl=en",
  },
  {
    bookName: "Design Patterns: Elements of Reusable Object-Oriented Software",
    imgUrl: "https://m.media-amazon.com/images/I/81IGFC6oFmL._SL1500_.jpg",
    infoUrl:
      "https://www.google.com/books/edition/Design_Patterns/6oHuKQe3TjQC?hl=en&gbpv=0",
  },
];

function App() {
  return (
    <main className="flex flex-col items-center justify-center py-10  z-[-2] min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#858484_1px)] bg-[size:20px_20px]">
      <ul className="grid grid-cols-3 gap-10">
        {books.map((urlObj, id) => (
          <li key={id}>
            <Book href={urlObj} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
