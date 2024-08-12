import BooksContainer from "../components/Books/BooksContainer";

export default function BooksPage() {
  return (
    <div className="w-full">
      <div className="border-b">
        <h1 className="text-center text-4xl my-7 uppercase text-emerald-600">
          All Books
        </h1>
      </div>
      <BooksContainer />
    </div>
  );
}
