import { useState } from "react";

function App() {
  const [studytime, setStudytime] = useState("");
  const [absences, setAbsences] = useState("");
  const [G1, setG1] = useState("");
  const [G2, setG2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/predict/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        features: [
          parseFloat(studytime),
          parseFloat(absences),
          parseFloat(G1),
          parseFloat(G2),
        ],
      }),
    });

    const data = await response.json();
    setResult(data.prediction === 1 ? "Pass" : "Fail");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-semibold text-lg">
            🎓 EduPredict
          </div>
          <div className="flex gap-8 text-gray-600 font-medium">
            <span>Dashboard</span>
            <span>Students</span>
            <span className="text-blue-600">Analysis</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
            📊 KNN MODEL V1.0
          </span>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Student Performance <br /> Prediction System
          </h1>

          <p className="text-gray-600 mb-8 max-w-xl">
            Leverage machine learning to identify students who may need
            additional academic support before final exams.
          </p>

          <div className="bg-white border rounded-xl p-6 shadow-sm max-w-xl">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              📘 How it works
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-sm">
                  1
                </span>
                Enter the student's weekly study hours and absence record.
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-sm">
                  2
                </span>
                Input grades from the first (G1) and second (G2) academic
                periods.
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-sm">
                  3
                </span>
                The KNN model analyzes historical data to predict the final
                outcome.
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-xl p-8 shadow-sm max-w-md w-full"
        >
          <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
            🧮 Input Student Data
          </h3>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Study Time</label>
                <input
                  placeholder="Hours/week"
                  value={studytime}
                  onChange={(e) => setStudytime(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Absences</label>
                <input
                  placeholder="Total count"
                  value={absences}
                  onChange={(e) => setAbsences(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">
                  First Period Grade
                </label>
                <input
                  placeholder="0 - 20"
                  value={G1}
                  onChange={(e) => setG1(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                />
                <span className="text-xs text-gray-400">Scale: 0 to 20</span>
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Second Period Grade
                </label>
                <input
                  placeholder="0 - 20"
                  value={G2}
                  onChange={(e) => setG2(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                />
                <span className="text-xs text-gray-400">Scale: 0 to 20</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Predict Performance
            </button>

            {result && (
              <p className="text-center font-semibold text-lg text-blue-600">
                Prediction: {result}
              </p>
            )}

            <p className="text-xs text-gray-400 text-center">
              Data is processed securely. Predictions are estimates based on
              historical trends.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
