// SearchResults.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchTerm) return;

      const perfumesRef = collection(db, "perfumes");
      const q = query(
        perfumesRef,
        where("name", ">=", searchTerm),
        where("name", "<=", searchTerm + "\uf8ff")
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setResults(data);
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{searchTerm}"</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((perfume) => (
            <div key={perfume.id} className="bg-white shadow rounded p-4">
              <img src={perfume.image} alt={perfume.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg mt-2 font-bold">{perfume.name}</h3>
              <p className="text-sm text-gray-600">{perfume.brand}</p>
              <p className="text-orange-600 font-semibold mt-1">${perfume.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No perfumes found.</p>
      )}
    </div>
  );
};

export default SearchResults;
