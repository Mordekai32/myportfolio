export default function SkillBadge({ children }) {
  return (
    <span
      className="px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-default"
      style={{
        backgroundColor: 'rgba(79, 70, 229, 0.08)',
        color: '#FFFFFF', // changed to pure white
        border: '1px solid rgba(79, 70, 229, 0.3)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.2)';
        e.currentTarget.style.borderColor = '#4F46E5';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(79, 70, 229, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(79, 70, 229, 0.3)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
      }}
    >
      {children}
    </span>
  );
}