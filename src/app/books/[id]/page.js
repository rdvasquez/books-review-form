import { db } from "@/app/lib/db";
// import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// Add data from an API
// set up async server component
export default async function BooksPage({ params }) {
  // fetch data from the API
  const result = await db.query(`SELECT * FROM reviews WHERE book_id=$1`, [
    params.id,
  ]);
  const reviews = result.rows;
  console.log(reviews);

  return (
    <div>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */}
      <h2>Home</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review} div className="review forms">
            <p>
              <strong>{review.reviewer_name}</strong> -{review.content}:{" "}
              {review.rating}
            </p>
          </div>
        ))
      ) : (
        <p>No review yet</p>
      )}
      <AddReview book_id={params.id} />
    </div>
  );
}

// params.id is the review id

function AddReview({ book_id }) {
  async function handleAddReview(formData) {
    "use server";

    const reviewer_name = formData.get("reviewer_name"); // add an item to dbase
    const content = formData.get("content");
    const rating = formData.get("rating");

    await db.query(
      `INSERT INTO reviews (book_id, reviewer_name, content, rating) VALUES ($1, $2, $3, $4)`,
      [book_id, reviewer_name, content, rating]
    );

    revalidatePath("/books/${book_id}");
    redirect("/destination");
  }
  return (
    <div class="review-form">
      <h2>Please add your review here</h2>
      <form action={handleAddReview}>
        <input type="hidden" name="book_id" value={book_id} />

        <label for="name">Reviewer Name</label>
        <input name="reviewer_name" />

        <label for="content">Content</label>
        <input name="content" />

        <label for="rating">Rating</label>
        <input name="rating" />
        <button>Send</button>
      </form>
    </div>
  );
}

//post review form - different function
// checks the review table length
