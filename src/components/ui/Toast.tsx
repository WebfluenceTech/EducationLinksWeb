import { useEffect } from 'react';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, type = 'success', onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className={`flex items-center gap-3 rounded-xl px-5 py-4 shadow-lg ${
        type === 'success' ? 'bg-green-600 text-white' : 'bg-brand-red text-white'
      }`}>
        {type === 'success' ? <CheckCircle className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
        <p className="text-sm font-medium">{message}</p>
        <button onClick={onClose} className="ml-2 rounded-full p-1 hover:bg-white/20 transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
