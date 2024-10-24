import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100">
      <div className="text-center">
        <Loader2 className="w-16 h-16 mx-auto text-sky-500 animate-spin" />
        <p className="mt-4 text-xl font-semibold">Cargando...</p>
      </div>
    </div>
  );
}
