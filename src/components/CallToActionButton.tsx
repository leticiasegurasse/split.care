import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallToActionButtonProps {
  to: string;
  text: string;
  target?: string;
}

const CallToActionButton = ({ to, text, target = "_blank" }: CallToActionButtonProps) => {
  return (
    <Link 
      to={to} 
      target={target}
      className="inline-flex items-center gap-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-600)] text-white pr-2 pl-7 py-2 rounded-lg text-lg font-semibold transition-colors duration-200 group"
    >
      <span>{text}</span>
      <div className="bg-[var(--color-secondary-600)] p-2 rounded-md group-hover:bg-[var(--color-secondary-700)] transition-colors duration-200">
        <ArrowRight className="w-7 h-7" />
      </div>
    </Link>
  );
};

export default CallToActionButton; 