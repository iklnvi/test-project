import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type ItemType = {
  id: number;
  name: string;
  description: string;
};

function SinglePage() {
  const { id } = useParams();
  const [item, setItem] = useState<ItemType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.API_URL}/items/${id}`)
      .then((res) => {
        if (res.status === 403) {
          throw new Error("403");
        }
        return res.json();
      })
      .then((data) => setItem(data))
      .catch((err) => {
        if (err.message === "403") {
          setItem(null);
          setError(
            "Access Denied (403): You don't have permission to view this item."
          );
        } else {
          console.error("Failed to fetch item", err);
          setError("Something went wrong.");
        }
      });
  }, [id]);

  return (
    <div className="detail">
      <Link to={"/"}>Go Back</Link>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : item ? (
        <>
          <h2>Item Details</h2>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SinglePage;
