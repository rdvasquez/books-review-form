import { db } from "@/app/lib/db";
import Link from "next/link";

// Add data from an API
// set up async server component
export default async function BooksPage() {
  // fetch data from the API
  const result = await db.query(`SELECT * FROM books`);
  const books = result.rows;
  console.log(books);

  return (
    <div className="background">
      <main className="flex min-h-screen flex-col items-center justify-between p-24;"></main>
      <div className="books-container">
        <h2>Help us review these books...</h2>
      </div>
      {books.map(function (book) {
        return (
          <div key={book}>
            <Link href={`/books/${book.id}`}>
              {book.name}: {book.author}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
