export default function Card({ title, body }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700 text-sm">{body}</p>
    </div>
  );
}
