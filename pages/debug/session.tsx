import { useSession } from "next-auth/react";

export default function SessionDebugPage() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-avrblue mb-4">Session Debug</h1>
      <p className="text-gray-400 mb-6">Status: <strong>{status}</strong></p>

      <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(session, null, 2)}
      </pre>

      <p className="mt-6 text-gray-500 text-xs">
        Tipp: Prüfe auch <code className="text-avrblue">/api/auth/session</code> direkt im Browser
      </p>
    </div>
  );
}
