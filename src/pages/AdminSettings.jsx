import React, { useEffect, useState } from "react";

const AdminSettings = () => {
  const [form, setForm] = useState({
    cryptoAddress: "",
    cashAppTag: "",
    zelleInfo: "",
    wireTransfer: "",
    paypalEmail: "",
    secret: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/donation-settings")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch settings");
        return res.json();
      })
      .then((data) => {
        setForm((prev) => ({
          ...prev,
          cryptoAddress: data.cryptoAddress || "",
          cashAppTag: data.cashAppTag || "",
          zelleInfo: data.zelleInfo || "",
          wireTransfer: data.wireTransfer || "",
          paypalEmail: data.paypalEmail || "",
        }));
      })
      .catch((error) => {
        console.error("Failed to fetch settings", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    if (form.secret !== "mySecret123") {
      setStatus("❌ Invalid secret code.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/donation-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update");

      setStatus("✅ Settings updated successfully.");
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Admin Donation Settings
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-xl rounded-lg p-8"
      >
        <div className="space-y-4">
          <Input
            label="Crypto Address"
            name="cryptoAddress"
            value={form.cryptoAddress}
            onChange={handleChange}
          />
          <Input
            label="CashApp Tag"
            name="cashAppTag"
            value={form.cashAppTag}
            onChange={handleChange}
          />
          <Input
            label="Zelle Info"
            name="zelleInfo"
            value={form.zelleInfo}
            onChange={handleChange}
          />
          <Input
            label="PayPal Email"
            name="paypalEmail"
            value={form.paypalEmail}
            onChange={handleChange}
          />
          <Textarea
            label="Wire Transfer Instructions"
            name="wireTransfer"
            value={form.wireTransfer}
            onChange={handleChange}
          />
          <Input
            label="Secret Code"
            name="secret"
            value={form.secret}
            onChange={handleChange}
            type="password"
          />
        </div>

        {status && (
          <p className="text-center text-sm text-gray-600">{status}</p>
        )}

        <button
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded transition duration-200"
        >
          {loading ? "Updating..." : "Update Settings"}
        </button>
      </form>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block mb-1 text-gray-700 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 text-gray-700 font-medium">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
    />
  </div>
);

export default AdminSettings;
