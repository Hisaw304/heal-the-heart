import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCreditCard, FaUpload, FaBitcoin, FaPaypal } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { FaUniversity } from "react-icons/fa";
import { SiCashapp, SiZelle } from "react-icons/si"; // from simple-icons

const RECAPTCHA_SITE_KEY = "6LcIkZcrAAAAAGd48qGev8KTKtc_4Mt_oHab2wmW"; // Replace with your site key

const Donate = () => {
  const navigate = useNavigate();

  // Manual states
  const [nameManual, setNameManual] = useState("");
  const [emailManual, setEmailManual] = useState("");
  const [giftCardType, setGiftCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expiration, setExpiration] = useState("");
  const [captchaTokenManual, setCaptchaTokenManual] = useState(null);
  const [manualLoading, setManualLoading] = useState(false);
  const [manualError, setManualError] = useState("");
  const [manualSuccess, setManualSuccess] = useState("");

  // Upload states
  const [nameUpload, setNameUpload] = useState("");
  const [emailUpload, setEmailUpload] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [captchaTokenUpload, setCaptchaTokenUpload] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");

  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setManualError("");
    setManualSuccess("");

    if (!captchaTokenManual) {
      setManualError("Please complete the reCAPTCHA.");
      return;
    }

    setManualLoading(true);

    try {
      const res = await fetch("/api/manual-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameManual,
          email: emailManual,
          cardType: giftCardType,
          cardNumber,
          amount,
          pin: securityCode,
          expiration,
          captchaToken: captchaTokenManual,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setManualSuccess("Thank you! Your donation has been submitted.");
      setNameManual("");
      setEmailManual("");
      setGiftCardType("");
      setCardNumber("");
      setAmount("");
      setSecurityCode("");
      setExpiration("");
      setCaptchaTokenManual(null);
    } catch (err) {
      setManualError(err.message);
    } finally {
      setManualLoading(false);
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    setUploadError("");
    setUploadSuccess("");

    if (!captchaTokenUpload) {
      setUploadError("Please complete the reCAPTCHA.");
      return;
    }

    setUploadLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", nameUpload);
      formData.append("email", emailUpload);
      formData.append("frontImage", frontImage);
      formData.append("backImage", backImage);
      formData.append("captchaToken", captchaTokenUpload);

      const res = await fetch("/api/upload-giftcard", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      setUploadSuccess("Your card images were submitted successfully.");
      setNameUpload("");
      setEmailUpload("");
      setFrontImage(null);
      setBackImage(null);
      setCaptchaTokenUpload(null);
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploadLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-neutral-100 pt-28 pb-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Make a Donation</h2>

      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Manual Gift Card Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <FaRegCreditCard className="text-yellow-500 text-2xl" />
            Enter Gift Card Details
          </div>

          <form onSubmit={handleManualSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded"
                value={nameManual}
                onChange={(e) => setNameManual(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded"
                value={emailManual}
                onChange={(e) => setEmailManual(e.target.value)}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Gift Card Type"
              className="w-full border p-3 rounded"
              value={giftCardType}
              onChange={(e) => setGiftCardType(e.target.value)}
              required
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-3 rounded"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Amount (optional)"
                className="w-full border p-3 rounded"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Security Code / PIN"
                className="w-full border p-3 rounded"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="Expiration (MM/YY)"
                className="w-full border p-3 rounded"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
              />
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />I acknowledge
              that I am donating to Heal the Heart Foundation and no
              goods/services were received.
            </label>

            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={setCaptchaTokenManual}
              className="mx-auto"
            />

            {manualError && (
              <p className="text-red-600 text-sm">{manualError}</p>
            )}
            {manualSuccess && (
              <p className="text-green-600 text-sm">{manualSuccess}</p>
            )}

            <button
              type="submit"
              disabled={manualLoading}
              className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
            >
              {manualLoading ? "Submitting..." : "Submit Gift Card"}
            </button>
          </form>
        </div>

        {/* You can repeat this pattern for the Upload, Crypto, and PayPal blocks below */}

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <FaUpload className="text-yellow-500 text-2xl" />
            Upload Card Images
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded"
                value={nameUpload}
                onChange={(e) => setNameUpload(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded"
                value={emailUpload}
                onChange={(e) => setEmailUpload(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Front
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border p-2 rounded"
                onChange={(e) => setFrontImage(e.target.files[0])}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Back
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border p-2 rounded"
                onChange={(e) => setBackImage(e.target.files[0])}
                required
              />
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />I confirm the
              donation and agree to destroy the physical card after processing.
            </label>

            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={setCaptchaTokenUpload}
              className="mx-auto"
            />

            {uploadError && (
              <p className="text-red-600 text-sm">{uploadError}</p>
            )}
            {uploadSuccess && (
              <p className="text-green-600 text-sm">{uploadSuccess}</p>
            )}

            <button
              type="submit"
              disabled={uploadLoading}
              className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
            >
              {uploadLoading ? "Uploading..." : "Submit Upload"}
            </button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <FaBitcoin className="text-yellow-500 text-2xl" />
            Donate with Crypto
          </div>
          <p className="text-gray-700 mb-6">
            Prefer to donate using Bitcoin or Ethereum? It's quick, secure, and
            borderless.
          </p>
          <button
            onClick={() => navigate("/donate")}
            className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
          >
            Donate with Crypto
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <FaPaypal className="text-yellow-500 text-2xl" />
            Donate via PayPal
          </div>
          <p className="text-gray-700 mb-6">
            Prefer to donate through PayPal? Your support goes a long way.
          </p>
          <button
            onClick={() => navigate("/donate")}
            className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
          >
            Donate with PayPal
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <SiCashapp className="text-green-500 text-2xl" />
            Donate via CashApp
          </div>
          <p className="text-gray-700 mb-6">
            Prefer to donate through CashApp? Your support goes a long way.
          </p>
          <button
            onClick={() => navigate("/donate")}
            className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
          >
            Donate with CashApp
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <SiZelle className="text-purple-600 text-2xl" />
            Donate via Zelle
          </div>
          <p className="text-gray-700 mb-6">
            Prefer to donate through Zelle? Your support goes a long way.
          </p>
          <button
            onClick={() => navigate("/donate")}
            className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
          >
            Donate with Zelle
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
            <FaUniversity className="text-blue-700 text-2xl" />
            Donate via Wire Transfer
          </div>
          <p className="text-gray-700 mb-6">
            Prefer to donate through Wire Transfer? Your support goes a long
            way.
          </p>
          <button
            onClick={() => navigate("/donate")}
            className="w-fit max-w-xs ms-auto bg-yellow-400 hover:bg-yellow-500 py-3 rounded-md px-5 text-black font-semibold transition text-center"
          >
            Donate Using Wire Transfer
          </button>
        </div>
      </div>

      {/* <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-6 text-xl font-semibold">
          <FaPaypal className="text-yellow-500 text-2xl" />
          Donate via PayPal
        </div>
        <p className="text-gray-700 mb-6">
          Prefer to donate through PayPal? Your support goes a long way.
        </p>
        <button
          onClick={() => navigate("/donate")}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-semibold transition"
        >
          Donate with PayPal
        </button>
      </div> */}
    </section>
  );
};

export default Donate;
