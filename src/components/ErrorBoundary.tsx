import { Component, type ErrorInfo, type ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full max-w-md mx-auto my-8 p-6 parchment-card text-center">
          <div className="w-12 h-12 rounded-full bg-ghibli-red-light border border-ghibli-red/30 flex items-center justify-center mx-auto mb-3 text-ghibli-red">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-lg text-ghibli-navy mb-2">
            Something unexpected happened
          </h2>
          <p className="text-xs text-ghibli-brown/80 mb-4">
            We encountered a temporary hiccup displaying the page.
          </p>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ghibli-red text-white font-bold text-sm shadow-stamp hover:shadow-none transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reload Test</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
