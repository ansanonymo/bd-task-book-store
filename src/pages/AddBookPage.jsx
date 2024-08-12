import AddBookForm from "../components/AddBook/AddBookForm";

export default function AddBookPage() {
  return (
    <div className="w-full">
      <div className="max-w-[90%] mx-auto shadow-md my-8 p-5">
        <h2 className="text-4xl text-center">Add A Book</h2>
        <div className="h-[1px] bg-gray-300 my-6"></div>
        <AddBookForm />
      </div>
    </div>
  );
}
