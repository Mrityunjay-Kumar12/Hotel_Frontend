import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddRooms.css";

export default function AddRooms() {
  const [roomData, setRoomData] = useState({
    roomNumber: "",
    type: "",
    price: "",
    description: "",
    image: "",
    available: true,
  });

  const [rooms, setRooms] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch all rooms
  const fetchRooms = async () => {
    const res = await fetch("http://localhost:5000/api/rooms");
    const data = await res.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoomData({ ...roomData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `http://localhost:5000/api/rooms/${editId}`
      : "http://localhost:5000/api/rooms";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(roomData),
      });
      const data = await res.json();
      toast.success(data.message);
      setRoomData({ roomNumber: "", type: "", price: "", description: "", image: "", available: true });
      setEditId(null);
      fetchRooms();
    } catch {
      toast.error("Operation failed!");
    }
  };

  const handleEdit = (room) => {
    setEditId(room._id);
    setRoomData(room);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this room?")) return;
    await fetch(`http://localhost:5000/api/rooms/${id}`, { method: "DELETE" });
    toast.info("Room deleted");
    fetchRooms();
  };

  return (
    <div className="add-rooms-container">
      <h2>{editId ? "Edit Room" : "Add New Room"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="roomNumber" placeholder="Room Number" required value={roomData.roomNumber} onChange={handleChange} />
        <input type="text" name="type" placeholder="Room Type" required value={roomData.type} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price per Night" required value={roomData.price} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={roomData.description} onChange={handleChange}></textarea>
        <input type="text" name="image" placeholder="Image URL" value={roomData.image} onChange={handleChange} />
        <label>
          <input type="checkbox" name="available" checked={roomData.available} onChange={handleChange} />
          Available
        </label>
        <button type="submit">{editId ? "Update Room" : "Add Room"}</button>
      </form>

      <h3>All Rooms</h3>
      <table>
        <thead>
          <tr>
            <th>Room #</th>
            <th>Type</th>
            <th>Price</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.roomNumber}</td>
              <td>{room.type}</td>
              <td>₹{room.price}</td>
              <td>{room.available ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleEdit(room)}>Edit</button>
                <button onClick={() => handleDelete(room._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
